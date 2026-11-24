'use strict';
(async()=>{
const KEY='sea-of-steel-sortie-definitions-v1';
const data=await fetch('candidates.json').then(r=>{if(!r.ok)throw Error('Reference data could not be loaded');return r.json()});
const status=document.querySelector('#status'), host=document.querySelector('#cards');
let stored={};try{stored=JSON.parse(localStorage.getItem(KEY)||'{}')}catch{}
const notes=Object.create(null);for(const row of data.rows)notes[row.id]=typeof stored[row.id]==='string'?stored[row.id]:'';
const fields=new Map();
function message(t){status.textContent=t}
function save(){try{localStorage.setItem(KEY,JSON.stringify(notes));message('Saved in this browser · '+data.rows.filter(r=>notes[r.id].trim()).length+' of '+data.rows.length+' entries have notes.')}catch{message('Browser storage unavailable. Export JSON to preserve your draft.')}}
function el(tag,text,cls){const x=document.createElement(tag);if(text!==undefined)x.textContent=text;if(cls)x.className=cls;return x}
let section='';
for(const r of data.rows){if(r.section!==section){section=r.section;host.append(el('h2',section))}const card=el('article',undefined,'card');card.dataset.id=r.id;card.dataset.search=(r.name+' '+r.description+' '+r.factions.join(' ')).toLowerCase();
const figure=el('figure');if(r.images.length){for(const img of r.images){const a=el('a');a.href=img.src;a.target='_blank';a.rel='noopener';const i=el('img');i.src=img.src;i.alt=r.name+' — '+img.caption;i.width=img.width;i.height=img.height;i.loading='lazy';a.append(i);figure.append(a,el('figcaption',img.caption))}}else figure.append(el('div','Exact unit picture not yet available. Art reference remains open.','empty-art'));
const description=el('div');description.append(el('h3',r.name),el('div',r.factions.join(' / ')+' · '+r.id,'meta'),el('p',r.description,'description'));
const details=el('div',undefined,'details'), label=el('label','Your card details');label.htmlFor=r.id;const field=el('textarea');field.id=r.id;field.value=notes[r.id];field.setAttribute('aria-label',r.name+' card details');field.addEventListener('input',()=>{notes[r.id]=field.value;save();filter()});fields.set(r.id,field);details.append(label,field);card.append(figure,description,details);host.append(card)}
function filter(){const q=document.querySelector('#search').value.trim().toLowerCase(),f=document.querySelector('#filter').value;for(const c of host.querySelectorAll('.card')){const filled=Boolean(notes[c.dataset.id].trim());c.hidden=!c.dataset.search.includes(q)||(f==='filled'&&!filled)||(f==='empty'&&filled)}}
document.querySelector('#search').addEventListener('input',filter);document.querySelector('#filter').addEventListener('change',filter);
function payload(){return{schema:data.schema,scope:data.scope,exportedAt:new Date().toISOString(),entries:data.rows.map(r=>({id:r.id,name:r.name,factions:r.factions,details:notes[r.id]}))}}
function markdown(){return '# Sortie card definition proposals\n\n'+data.scope+'\n\n'+data.rows.filter(r=>notes[r.id].trim()).map(r=>'## '+r.name+'\nID: `'+r.id+'`\nFaction references: '+r.factions.join(' / ')+'\n\n'+notes[r.id].trim()).join('\n\n')}
function download(text,type,name){const a=el('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
document.querySelector('#json').onclick=()=>download(JSON.stringify(payload(),null,2),'application/json','sortie-card-definitions.json');document.querySelector('#markdown').onclick=()=>download(markdown(),'text/markdown','sortie-card-definitions.md');
document.querySelector('#import').onchange=async e=>{try{const file=e.target.files[0];if(!file)return;const p=JSON.parse(await file.text());if(p.schema!==data.schema||!Array.isArray(p.entries))throw Error('Choose a JSON export from this worksheet.');let count=0;for(const entry of p.entries)if(fields.has(entry.id)&&typeof entry.details==='string'){notes[entry.id]=entry.details;fields.get(entry.id).value=entry.details;count++}save();filter();message('Imported '+count+' entries; draft saved.')}catch(err){message('Import failed: '+err.message)}finally{e.target.value=''}};
function fallback(t){const f=document.querySelector('#fallback');f.hidden=false;f.value=t;f.focus();f.select()}
document.querySelector('#copy').onclick=async()=>{try{await navigator.clipboard.writeText(markdown());message('Filled notes copied.')}catch{fallback(markdown());message('Press Ctrl+C to copy the filled notes.')}};
document.querySelector('#submit').onclick=()=>{if(!data.rows.some(r=>notes[r.id].trim())){message('Write at least one card detail before submitting.');return}const u=new URL('https://github.com/Irontaxi/sea-of-steel-qa/issues/new');u.searchParams.set('title','Sortie card definition proposals · CL3282 reference');const body=markdown();u.searchParams.set('body',body);if(u.href.length>7500){u.searchParams.delete('body');fallback(body);message('Copy these notes into the new GitHub issue, or attach your JSON export.')}window.open(u.href,'_blank','noopener,noreferrer')};
save();filter();
})().catch(e=>{document.querySelector('#status').textContent='Worksheet unavailable: '+e.message+'. Your existing browser draft has not been cleared.'});

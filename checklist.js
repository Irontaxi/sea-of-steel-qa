const build = document.querySelector('#build');
const rows = [...document.querySelectorAll('li[data-id]')];
const notes = document.querySelector('#notes');
const status = document.querySelector('#status');
const results = document.querySelector('#results');
const key = 'sea-of-steel-qa-' + build.dataset.build;
let state = { marks: {}, notes: '' };
try { state = JSON.parse(localStorage.getItem(key)) || state; } catch {}
notes.value = state.notes;
function save() {
    try { localStorage.setItem(key, JSON.stringify(state)); } catch {}
}
function refresh() {
    for (const row of rows) {
        for (const button of row.querySelectorAll('button')) {
            button.setAttribute('aria-pressed', String(state.marks[row.dataset.id] === button.dataset.result));
        }
    }
}
for (const row of rows) {
    for (const button of row.querySelectorAll('button')) {
        button.onclick = () => {
            const id = row.dataset.id;
            state.marks[id] = state.marks[id] === button.dataset.result ? '' : button.dataset.result;
            save();
            refresh();
        };
    }
}
notes.oninput = () => { state.notes = notes.value; save(); };
refresh();

function report() {
    const checks = rows.map(row => '- ' + (state.marks[row.dataset.id] || '—') + ' ' + row.querySelector('span').textContent);
    return ['Sea of Steel · ' + build.textContent, '', ...checks, '', '### Notes', notes.value.trim() || 'None'].join('\n');
}
function showCopy(text) {
    results.hidden = false;
    results.value = text;
    results.select();
}
document.querySelector('#copy').onclick = async () => {
    try {
        await navigator.clipboard.writeText(report());
        status.textContent = 'Copied.';
    } catch {
        showCopy(report());
        status.textContent = 'Press Ctrl+C to copy.';
    }
};
document.querySelector('#submit').onclick = () => {
    const url = new URL('https://github.com/Irontaxi/sea-of-steel-qa/issues/new');
    url.searchParams.set('title', 'QA results · Steam build ' + build.dataset.build);
    const text = report();
    url.searchParams.set('body', text);
    if (url.href.length > 7500) {
        url.searchParams.delete('body');
        showCopy(text);
        status.textContent = 'Copy the report below and paste it into the new GitHub issue.';
    }
    window.open(url.href, '_blank', 'noopener,noreferrer');
};

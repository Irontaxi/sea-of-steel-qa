from html import escape
from pathlib import Path
import re
import sys

root = Path(__file__).resolve().parent
source = Path(sys.argv[1]).read_text(encoding="utf-8-sig")
release = re.search(r'<p(?: id="build")?>Steam testing (\d+) · Version ([\d.]+)[^<]*</p>', source)
if not release:
    raise SystemExit("Expected a Steam testing build and version in the checklist header.")
build, version = release.groups()
target = root / "builds" / f"{build}.html"
if target.exists():
    raise SystemExit(f"Build {build} is already archived.")
rows = re.search(r"<ul>.*?</ul>", source, re.S)
style = re.search(r"<style>(.*?)</style>", source, re.S)
if not rows or not style or "<button data-result=" not in rows[0]:
    raise SystemExit("Expected the Sea of Steel checklist format.")
page = f"""<!doctype html>
<html lang="en">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Sea of Steel QA · {build}</title>
<style>{style[1]}
a {{color:#e1c798}} textarea {{display:block;width:100%;box-sizing:border-box;margin:.5rem 0 1rem}} [hidden] {{display:none!important}}
button[aria-pressed=true][data-result="✓"] {{background:#20674d}}
button[aria-pressed=true][data-result="✕"] {{background:#873a39}}
</style>
<nav><a href="../">Latest checklist</a> · <a href="../archive.html">Archive</a> · <a href="https://github.com/Irontaxi/sea-of-steel-qa/issues?q=is%3Aissue+QA+sort%3Aupdated-desc">Submissions</a></nav>
<h1>Sea of Steel QA</h1>
<p id="build" data-build="{build}">Steam testing {build} · Version {version}</p>
{rows[0]}
<label for="notes">Notes for QA</label>
<textarea id="notes" rows="4" placeholder="What happened? Include the seed and steps if relevant."></textarea>
<p>Submissions are public on GitHub. Edit your existing issue to report a retest of this build.</p>
<button id="submit" type="button">Submit to GitHub</button>
<button id="copy" type="button">Copy results</button>
<p id="status" role="status"></p>
<textarea id="results" hidden readonly rows="12" aria-label="Results to copy"></textarea>
<script src="../checklist.js" defer></script>
</html>
"""
target.write_text(page, encoding="utf-8")
entries = sorted((root / "builds").glob("*.html"), key=lambda p: int(p.stem), reverse=True)
latest = entries[0].stem
links = []
for entry in entries:
    label = re.search(r'<p id="build"[^>]*>([^<]+)</p>', entry.read_text(encoding="utf-8"))[1]
    links.append(f'<li><a href="builds/{entry.name}">{escape(label)}</a></li>')
(root / "index.html").write_text(f"""<!doctype html>
<html lang="en"><meta charset="utf-8"><title>Sea of Steel QA</title>
<meta http-equiv="refresh" content="0; url=builds/{latest}.html">
<p><a href="builds/{latest}.html">Open the latest checklist</a> · <a href="archive.html">Archive</a></p>
</html>
""", encoding="utf-8")
(root / "archive.html").write_text(f"""<!doctype html>
<html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Sea of Steel QA archive</title><style>{style[1]} a {{color:#e1c798}}</style>
<nav><a href="./">Latest checklist</a></nav><h1>QA checklist archive</h1>
<ul>{''.join(links)}</ul>
</html>
""", encoding="utf-8")

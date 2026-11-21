# Sea of Steel QA

The site root links to the current full-game Steam testing and Steam demo checklists. The archive lists every published build, including local development builds.

## QA reference

- [Current player guide](references/player-guide-current.md) covers interface size, local Sortie, mines, land orders and the matching live testing build.
- [November 21 release and integration notes](references/main-integration-2026-11-21.md) record the live co-op recovery build, included changes, remaining test limits and main/full-only testing policy.
- [Earning resources in a round](references/player-resources.md) lists player objective payouts, reinforcement spending, and what carries into the next sector.
- [Bot strategy and reinforcements](references/bot-strategy.md) covers enemy behavior, resource costs, arrival rules, and force limits. Update it when those rules change.
- [Ship stats and damage](references/ship-stats-2026.11.10.2.html) records the unit and weapon values for the named build.

Local development checklists live under `local/` and use a dated binary-hash identity, separate from Steam build IDs even when the displayed game version is unchanged. Set `data-report-title` on the build paragraph for local GitHub submission titles. Retain local archive links when publishing a later Steam checklist; `add_checklist.py` preserves these links. Each build has independent saved marks and notes.

Mark each item, add notes, and choose **Submit to GitHub**. This opens a prefilled public issue. Edit that issue after a retest of the same build. Use the [submissions list](https://github.com/Irontaxi/sea-of-steel-qa/issues?q=is%3Aissue+%22QA+results%22+sort%3Aupdated-desc) to find the most recently updated reports for QA.

To add a new build, run `python add_checklist.py path/to/Morning-Checklist.html`. Review the new build page and the updated index and archive, then commit and push to `main`. GitHub Pages publishes the root of `main`.

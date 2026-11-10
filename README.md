# Sea of Steel QA

The site root opens the latest Steam testing checklist. The archive lists every published build.

Mark each item, add notes, and choose **Submit to GitHub**. This opens a prefilled public issue. Edit that issue after a retest of the same build. Use the [submissions list](https://github.com/Irontaxi/sea-of-steel-qa/issues?q=is%3Aissue+%22QA+results%22+sort%3Aupdated-desc) to find the most recently updated reports for QA.

To add a new build, run `python add_checklist.py path/to/Morning-Checklist.html`. Review the new build page and the updated index and archive, then commit and push to `main`. GitHub Pages publishes the root of `main`.

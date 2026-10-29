# mrjholt.co.uk

Walking vlog site. Vanilla HTML, CSS and JS, hosted on GitHub Pages.

## Adding a walk
1. Copy `walk-template.html` to a new file named after the walk, for example `ribchester.html`.
2. Replace every `PLACEHOLDER` (search the file for it).
3. Set `data-lat` and `data-lng` on the `<main>` element. This is the only place coordinates are needed.
4. Paste the YouTube IDs into the two `data-youtube-id` attributes.
5. Add one entry at the top of the `WALKS` list in `js/walks.js` (slug, title, date, summary, url, image). The home page shows the first entry as the latest walk and lists the rest under Previous walks.
6. Set `data-walk-nav` on the new page to the same slug. Previous and next links are built from the list, so older pages need no edits.
7. Update the latest video section in `index.html` if there is a new video.

## DNS records (set at the registrar for mrjholt.co.uk)

| Type  | Host | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| AAAA  | @    | 2606:50c0:8000::153    |
| AAAA  | @    | 2606:50c0:8001::153    |
| AAAA  | @    | 2606:50c0:8002::153    |
| AAAA  | @    | 2606:50c0:8003::153    |
| CNAME | www  | mrjholt.github.io      |

Then in the GitHub repo go to Settings, Pages, confirm the custom domain is mrjholt.co.uk and tick Enforce HTTPS once the certificate is issued. Remove any other A, AAAA or CNAME records on @ and www first.

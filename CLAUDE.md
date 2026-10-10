# mrjholt.co.uk

Built by John Holt. Run the web-project skill at the start of every session.

## Status
MVP built and committed. Files: index.html, walk-template.html, ribchester.html, css/style.css, js/main.js, js/sun-weather.js, CNAME, README (walk process and DNS records). Palette is forest green, sage and lake blue with near-black text; fonts Outfit and DM Sans. All content is placeholder, to be replaced after the Ribchester filming.

## Purpose
Personal website, rebuilt as the home for my walking vlog. It helps people recreate the walks I film. The latest video matters, but the walk information is the core product. It is also a permanent personal archive for my children.

## Branding
- Name: John Holt
- Tagline: Walks, nature and stories I want to share
- YouTube: @MrJHolt
- Instagram: placeholder for now
- Voice: first person, I work alone. UK English. No em dashes.

## Design
- Reference: example 01.jpg in the repo root (an L4 Financial site, designed for a finance client).
- Stick closely to its layout and style and fit my content into it. Do not redesign.
- Tweaks are expected (colours, imagery, content). Ask me before making any, never change things silently.
- Fonts, palette and logo are not yet decided.

## Stack
- Vanilla HTML, CSS and JS. No frameworks, no build step.
- Mobile first, BEM naming, CSS custom properties.
- Font Awesome free via CDN.
- HTML in the project root, CSS in css/ (style.css), JS in js/ (main.js).
- No inline styles, no embedded CSS or JS in HTML.
- Hosting: GitHub Pages with custom domain mrjholt.co.uk. Include a CNAME file and list the DNS records I need to set at my registrar.
- Dev server: VS Code Live Server only (port 5500 or 5501).

## MVP scope
1. Home page: latest YouTube video embed (video ID pasted in manually, no auto-fetch), latest walk card linking to its walk page, short intro, YouTube and Instagram links.
2. One walk page: Ribchester, built from a reusable walk template. Each new walk is a copied HTML page.

## Each walk page contains
1. Title, location, date walked, distance, approximate time.
2. Start point as a what3words link only (no API).
3. Episode video embed (YouTube).
4. Animated route map as an unlisted YouTube video embed.
5. Photo gallery, images compressed to WebP and lazy loaded.
6. Practical notes from my experience: refreshments, tricky crossings, parking, anything that helps someone repeat the walk.
7. Live weather plus sunrise, sunset and golden hour for the walk location. Reuse the logic from my Lancashire Light repo (mrjohnholt/sunriseSunset, live at https://mrjohnholt.github.io/sunriseSunset/). Each walk page only needs a latitude and longitude set in one place.

## Out of scope for now
Searchable video library, behind-the-scenes diary, GPX downloads, analytics, cookies.

## Content and placeholders
Ribchester content does not exist yet (filmed after setup). Use clearly marked placeholders for all text, photos, video IDs, what3words and coordinates. Mark them in the code so they are easy to find and replace before launch.

## Workflow going forward
I paste notes for each new walk. Claude creates the walk page from the template and updates the home page latest video and latest walk.

## Source files
- example 01.jpg: design reference.
- img/John-1.jpg: photo of me.
- .claude/skills/frontend-design.md: design guidance.

## Open questions
- Colour palette and fonts (reference palette is navy, sage green and pale blue).
- Site logo or wordmark.
- Navigation items for a two-page MVP.
- Weather source used in the Lancashire Light repo.

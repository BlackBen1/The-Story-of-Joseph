# The Story of Joseph — The Musical

Static website for *The Story of Joseph*, presented by Boatseed at Shell Hall, MUSON Centre, Lagos.

## Structure
- `index.html`, `story.html`, `cast.html`, `tickets.html`, `visit.html` — pages (served at `/`, `/story`, `/cast`, `/tickets`, `/visit`)
- `404.html` — not-found page
- `assets/` — images, logos, icons, `site.css`, `nav.js`
- `vercel.json` — clean URLs and security headers (CSP, HSTS, frame, referrer and permissions policies)

## Deploy
Import this repository in Vercel with framework preset **Other**, no build command, output directory `.` (root). Every push to `main` redeploys.

## Domain
Share-preview tags currently point at `https://the-story-of-joseph.vercel.app`. When a custom domain is connected, replace that URL in the `og:`, `twitter:` and `canonical` tags of each page.

## External services
Tickets: Eventporte · Fonts: Google Fonts · Map: Google Maps embed · Social: Instagram @boatseedproductions

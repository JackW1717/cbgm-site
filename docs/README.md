# CBGM website — GitHub Pages build

Static build of the ClearBid Global Markets site. No build step, no dependencies.

## Contents

| File | Page |
|---|---|
| `index.html` | Home |
| `platform.html` | Platform |
| `solutions.html` | Solutions |
| `markets.html` | Markets |
| `about.html` | About |
| `press.html` | Press |
| `contact.html` | Contact |

Supporting files: `assets/` (logos, portraits, partner marks, icons, demo video), `_ds/` (design tokens, stylesheets, webfonts), `support.js`, `responsive.js`, `markets-map.html`, `.nojekyll`, `robots.txt`.

Do not delete `.nojekyll` — it stops GitHub from ignoring the `_ds` folder, which begins with an underscore.

## Deploying

1. Place this folder at the root of the repository, named `docs`.
2. Commit and push to `main`.
3. In the repository, go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**.
5. Set branch to `main` and folder to `/docs`. Save.
6. The site publishes at `https://<user>.github.io/<repo>/` within a few minutes.

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Custom domain

Add a file named `CNAME` in this folder containing the domain only, for example `www.clearbidmarkets.com`, then point a CNAME record at `<user>.github.io` in DNS.

## Updating

This folder is generated from the source design files. Edit the source, regenerate, and replace this folder wholesale rather than editing these files by hand.

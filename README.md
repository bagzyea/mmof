# MMOF — Website Redesign Concepts

A static gallery of the two homepage design directions for the new MMOF website.
The landing page shows both as cards; clicking a card opens that concept's
full-length page. Both concepts use the official MMOF brand palette and Archivo
typography (see `MMOF_Artwork_Brandguide_LR.pdf`).

## Brand palette

| Role | Name | Hex |
|------|------|-----|
| Primary / trademark | Pinot Red | `#8C2344` |
| Primary | Noir | `#000000` |
| Primary base | Off-White | `#F7F0EC` |
| Secondary accent | Tangerine | `#D67C46` |
| Secondary surface | Dark Pine | `#1E4440` |
| Secondary | Dusk Grey | `#C3BDB8` |

Typeface: **Archivo** (Bold for headings/logo, Regular for body).

## Concepts

| Direction | Page | Personality |
|-----------|------|-------------|
| **2A · Meridian** | [`meridian.html`](meridian.html) | Restrained, investor-grade — Dark Pine surfaces on Off-White, Pinot Red primary, Tangerine detailing, Archivo throughout. |
| **2C · Field** | [`field.html`](field.html) | Clean editorial — airy whitespace, Pinot Red lead on Off-White, Noir contrast, Tangerine pops, Archivo throughout. |

## Structure

```
index.html          Landing page (two concept cards)
meridian.html        Concept 2A
field.html           Concept 2C
assets/              Photography (16 JPEGs, embedded originally, now real files)
```

Each concept page is fully self-contained inline-styled HTML with a
"← All concepts" button back to the landing page.

## Running locally

No build step. Just open `index.html` in a browser (double-click), or serve the
folder:

```bash
# Python
python -m http.server 8000
# then visit http://localhost:8000
```

The only external dependency is Google Fonts (loaded over the network).

## Deploying

This is a plain static site — deploy the whole folder as-is to any static host
(GitHub Pages, Netlify, Vercel, S3, …). `index.html` is at the repo root.

## Note on content

All copy is **placeholder** — company names (Kazi Health, Bunda Foods, etc.),
team members, quotes, metrics, cohort dates and article titles are realistic
stand-ins for layout only. Photography is stock, chosen to read commercial.
Replace with real content and consistent studio photography before launch.

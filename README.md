# MMOF — Website Redesign Concepts

A static gallery of three homepage design directions for the new MMOF website.
The landing page shows all three as cards; clicking a card opens that concept's
full-length page.

## Concepts

| Direction | Page | Personality |
|-----------|------|-------------|
| **2A · Meridian** | [`meridian.html`](meridian.html) | Restrained, investor-grade — ink navy + ivory, Spectral serif, brass accent. BlackRock-leaning. |
| **2B · Twin Engine** | [`twin-engine.html`](twin-engine.html) | Bold and confident — black / yellow, heavy Archivo, marquee ticker, split "Capital \| Building." |
| **2C · Field** | [`field.html`](field.html) | Clean editorial — airy whitespace, Bricolage display, growth-green accent. Shona-leaning. |

## Structure

```
index.html          Landing page (three concept cards)
meridian.html        Concept 2A
twin-engine.html     Concept 2B
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

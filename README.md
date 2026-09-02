# Waverly Inn website prototype

A conversion-focused, mobile-first static site concept for The Waverly Inn at 16 Bank Street, New York.

## Preview locally

No build step or package install is required.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Pages

- `index.html` — editorial homepage and main reservation funnel
- `menus.html` — Summer 2026 dinner and weekend brunch menus
- `story.html` — evidence-backed history and atmosphere story
- `private-dining.html` — private / semi-private dining conversion page
- `visit.html` — location, hours, contact, reservations and useful links

## Technical approach

- Semantic HTML
- CSS only for layout and visual design
- Small vanilla JavaScript enhancement for mobile navigation, gallery dialog and accessible menu tabs
- No framework, bundler or WebGL dependency
- Mobile-first responsive behavior
- `prefers-reduced-motion` support
- Essential content remains visible without JavaScript; menu panels are progressively enhanced into tabs
- Restaurant JSON-LD and Open Graph metadata on the homepage

## Business data baseline

Prototype content is grounded in the restaurant's current owner-controlled web material and current public research. Key production facts include:

- Address: 16 Bank Street, New York, NY 10014
- Phone: 917-828-1154
- Owner-published dinner hours: seven nights, 5pm–11pm
- Owner-published weekend brunch hours: Saturday and Sunday, 11am–5pm
- Reservations: Resy
- Private dining contact: Fritz@waverlynyc.com
- Gift certificates: Toast
- Instagram: @thewaverlyinnstagram

The owner-published hours should be re-confirmed before commercial launch because some current third-party listings show a 10pm dinner close.

## Photography

This prototype deliberately uses Waverly-specific public web photography to establish the creative direction. Rights have **not** been asserted or cleared for commercial launch. See [`ASSET_NOTES.md`](ASSET_NOTES.md) for every source and replacement guidance.

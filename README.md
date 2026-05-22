# Agency Roofing Co. — Website

Single-page production site for **Agency Roofing Co. LLC** — Albuquerque, NM.
Built with agency. Driven by obligation.

## What's in this folder

```
index.html                              ← The site
styles.css                              ← All styling
script.js                               ← Mobile menu, form mailto, year stamp
assets/favicon.svg                      ← Browser tab icon
assets/logo-nav.svg                     ← Horizontal shield + AGENCY (nav)
assets/logo-full-lockup.svg             ← Full lockup for light grounds (future use)
assets/logo-full-lockup-dark.svg        ← Full lockup for ink grounds (footer)
```

Everything is static. No build step. No backend. No subscription.

---

## Deploy to GitHub Pages (recommended)

This site is configured to live at the root of a GitHub Pages repo — same setup as ARC CRM.

1. Create a new GitHub repo (e.g., `agencyroofing-site`).
2. Upload every file in this folder, preserving the `assets/` subfolder.
3. **Settings → Pages → Source: Deploy from a branch → main → /(root) → Save.**
4. Site goes live at `https://orlandobmontanez-cpu.github.io/agencyroofing-site/`
   (or whatever the repo is named).

When `agencyroofingco.com` is purchased, point it at the same repo via custom domain — no code changes needed.

---

## Updating the license number (when GB-98 issues)

Two spots to update:

**1. Credentials section** — `index.html`, line ~285 area:

```html
<div class="cred-item">
  <span class="cred-label">License Classification</span>
  <span class="cred-value">GB-98 — In Progress</span>   ← change this
</div>
```

Change to:

```html
<span class="cred-value">GB-98 · License #XXXXXX</span>
```

**2. Credentials note** — same section, just below the grid:

```html
<p class="credentials-note">
  <em>License number will be posted here upon issuance...</em>
</p>
```

Replace with:

```html
<p class="credentials-note">
  <em>NM GB-98 General Building Contractor · License #XXXXXX ·
  Insured and bonded.</em>
</p>
```

**3. Footer fineprint** — at the bottom of `index.html`:

```html
<p class="footer-fineprint">
  © 2026 Agency Roofing Co. LLC. All rights reserved.
  Licensing in progress with the State of New Mexico — license number will be posted upon issuance.
</p>
```

Replace with:

```html
<p class="footer-fineprint">
  © 2026 Agency Roofing Co. LLC. All rights reserved.
  NM GB-98 License #XXXXXX · Insured · Bonded.
</p>
```

---

## Brand standards baked into this site

- **Shield never appears alone.** Every shield placement is paired with the AGENCY wordmark.
- **Shield never touches AGENCY.** Nav: 25px horizontal clear space. Footer: 131px vertical (vs. 41px required).
- **Palette is locked**: Stone `#EAE4DA` · Ink `#1C1A18` · Copper `#974930` · Mid `#C97E78` · Highlight `#F0C8C2`
- **Type lockup**: Anton for AGENCY · Bebas Neue letter-spaced copper for ROOFING CO. · Lora italic gray for tagline
- **Tagline**: "Built with agency. Driven by obligation." — appears in hero, contact section, and footer

---

## How the contact form works (no backend)

The form composes a prefilled email and hands it to the user's mail client via `mailto:`. No server, no Formspree subscription, no spam-bait endpoint. If the user's mail client fails, there's a visible fallback link below the submit button with the direct phone and email.

When you want a real form backend later, swap in Formspree or Netlify Forms — only `script.js` needs to change.

---

Built May 17, 2026.

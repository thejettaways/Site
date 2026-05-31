# THE JETTAWAYS — Website

A static fan/promo site for The JettAways, a Joan Jett tribute band. Vibe: **leather, lipstick & rebellion.** Black, red, cream. Bebas Neue + Inter. No framework, no build step — just HTML, CSS, and a little vanilla JavaScript.

---

## What's in this folder

```
site/
├── index.html       Home — hero, who-we-are, what's-next
├── about.html       Story, what we're not, booking CTA
├── members.html     Four band cards (Jen "Jett" R. + 3 placeholders)
├── setlist.html     Joan Jett catalog, grouped by era
├── shows.html       Upcoming + past shows (currently empty-state)
├── gallery.html     Photo grid with click-to-zoom lightbox
├── contact.html     Email + social tiles
├── styles.css       The whole look — palette, layout, hover states
├── script.js        Mobile nav, active link highlight, lightbox
└── README.md        You are here
```

There's no `assets/` folder yet — every visual is CSS-generated (gradients, silhouette letters, a noise overlay). Drop real photos into `assets/gallery/` and `assets/members/` when you have them, then swap the placeholder `<span>` elements for `<img>` tags.

---

## Editing it

Open any `.html` file in a text editor. Find the section you want to change. Edit the words. Save. Reload the browser. That's it.

A few common edits:

- **Add a show** → open `shows.html`, find the `<!-- When shows are booked... -->` comment, copy the example `<div class="show">` block, paste it into `<div class="show-list">` above. Update date / venue / city / status.
- **Add a setlist song** → open `setlist.html`, drop a new `<li>` into the right era block. The number on the left is auto-generated.
- **Change member names** → open `members.html`, replace `[GUITARIST]` / `[BASSIST]` / `[DRUMMER]` with real names. Update the `silhouette` letter (the big initial) and the bio.
- **Update social handles** → open `contact.html` and update the `href` and the `.handle` text on each tile. Also update the four `<a>` links in the footer (those are in every `.html` file — change them in all 7 if you want them to match everywhere).
- **Change colors** → top of `styles.css`, the `:root { --red: #e10600; ... }` block. Change one variable, every page updates.

---

## Running it locally

You can just **double-click `index.html`** and it'll open in your browser. Everything works offline (the only outside dependency is Google Fonts).

If you'd rather run a tiny local server (some browsers are pickier about things like the lightbox script), you can:

```bash
# from the site/ folder
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

---

## Hosting it (two easy options)

You'll want this on a real URL eventually. Both options are free for a small fan site.

### Option A: GitHub Pages (recommended if you have a GitHub account)

1. Create a new repo on GitHub called something like `thejettaways-site` (it can be public — that's required for free Pages).
2. Push the contents of this `site/` folder to that repo (everything *inside* `site/` should be at the root of the repo — `index.html` at the top).

   ```bash
   cd site
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/thejettaways-site.git
   git push -u origin main
   ```

3. On GitHub, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to `Deploy from a branch`, set **Branch** to `main` and folder to `/ (root)`. Save.
5. Wait ~30 seconds. Your site will be live at `https://YOUR_USERNAME.github.io/thejettaways-site/`.

To update later: edit a file, `git add`, `git commit`, `git push`. The site re-deploys in under a minute.

**Custom domain (optional):** If you buy `thejettaways.com` from any registrar, you can point it at GitHub Pages from the same Settings → Pages screen. GitHub has a [walkthrough here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

### Option B: Netlify drop (zero git, fastest)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the entire `site/` folder onto the page.
3. You're live. Netlify gives you a random URL like `wonderful-jett-a3b1c.netlify.app` — you can rename it to `thejettaways.netlify.app` (or whatever's free) in **Site settings → Change site name**.

To update later: drag the folder onto Netlify again. Or hook it up to a GitHub repo and it'll auto-redeploy on push.

**Custom domain:** Buy a domain anywhere, then add it under **Domain settings** in your Netlify dashboard. Netlify also gives you free HTTPS automatically.

---

## Adding real photos

When you have band photos:

1. Make a folder: `site/assets/gallery/` (and `site/assets/members/` for member portraits).
2. Drop photos in. Use names like `band-01.jpg`, `jen-portrait.jpg`.
3. **Members page:** in `members.html`, find a `<div class="card-photo">` and replace the inner `<span class="silhouette">J</span>` with `<img src="assets/members/jen-portrait.jpg" alt="Jen Jett R." />`.
4. **Gallery page:** in `gallery.html`, replace each `<span class="placeholder">01</span>` with `<img src="assets/gallery/band-01.jpg" alt="..." />`.

The B&W → red duotone hover effect works on `<img>` automatically — no extra CSS needed. (It's the `filter: grayscale(100%) ...` rule in `styles.css`.)

For the gallery lightbox to show actual photos (instead of the era label), you'll want to lightly modify `script.js` — let me know when you're ready and I can swap the lightbox over to display the clicked image instead of the data-label text.

---

## What's NOT in this site (on purpose, for v1)

- No mailing list signup form (would need a backend or a service like Mailchimp/Buttondown — easy to add later)
- No streaming embed (Spotify / Bandcamp / SoundCloud — drop in when you have audio)
- No merch store
- No CMS — you edit the HTML directly. If you ever want a CMS, the easiest path is moving to **Decap CMS** on Netlify or **Astro + Netlify CMS**, but for a small fan site, raw HTML is faster.

---

## Credits

- **Fonts:** [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) (display) + [Inter](https://fonts.google.com/specimen/Inter) (body), both via Google Fonts.
- **Noise texture:** Inline SVG, no external asset.
- **Built:** 2026, with bad reputation.

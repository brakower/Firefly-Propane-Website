# Firefly Propane — Website

> "Firefly, we light your fire!" — Westchester, NY's most trusted local propane & home services team.

---

## 📁 Project Structure

```
Firefly-Propane-Website/
│
├── index.html                  ← Homepage (main entry point)
│
├── pages/
│   ├── bbq.html                ← BBQ Clean & Repair service page
│   ├── chimney.html            ← Chimney Sweeping service page
│   ├── dryer-vent.html         ← Dryer Vent Cleaning service page
│   ├── mosquito.html           ← Mosquito Magnet service page
│   ├── booking.html            ← Online booking (Calendly embed)
│   ├── blog.html               ← Tips & Blog index
│   └── blog-grill-signs.html   ← Article: "5 Signs Your Grill Needs Cleaning"
│
├── css/
│   └── styles.css              ← All styles (single stylesheet)
│
├── js/
│   └── main.js                 ← All interactivity (vanilla JS)
│
├── images/
│   └── firefly-logo.png        ← Brand logo (uploaded)
│   └── [your photos here]      ← Add your own photos (see below)
│
├── partials/
│   └── nav.html                ← Reference nav HTML snippet
│
└── README.md                   ← This file
```

---

## 🚀 Getting Started

This is a **plain HTML/CSS/JS** website — no build tools, no frameworks, no npm. Just open files in a browser.

### To run locally:
```bash
# Option 1: just double-click index.html in your file manager
# Option 2: use a simple local server (recommended to avoid path issues)

cd Firefly-Propane-Website
python3 -m http.server 8080
# → Open http://localhost:8080 in your browser
```

Or with Node.js:
```bash
npx serve .
```

### To deploy:
Upload the entire `firefly-website/` folder to any static host:
- **Netlify** — drag-and-drop the folder at netlify.com/drop
- **Vercel** — `vercel` CLI in this folder
- **GitHub Pages** — push to a repo, enable Pages from Settings
- **Traditional hosting** — FTP the folder to your web host's `public_html`

---

## 🖼️ Adding Your Photos

Every image on the site is currently a **placeholder**. Replace them by:

1. Add your photo files to the `images/` folder
2. Find the matching `<div class="img-placeholder">` in the HTML
3. Replace it with a proper `<img>` tag:

```html
<!-- BEFORE (placeholder) -->
<div class="img-placeholder" style="min-height:300px;">
  <span class="ph-icon">🔥</span>
  <strong>Before Photo</strong>
</div>

<!-- AFTER (real photo) -->
<img src="../images/bbq-before.jpg" alt="Dirty grill before cleaning" style="border-radius:16px;width:100%;">
```

## 🎨 Design System

All design tokens live in `:root` in `css/styles.css`.

### Colors
```css
--fire-red:    #D62828   /* Deep red */
--fire-orange: #F77F00   /* Warm orange */
--fire-yellow: #FCBF49   /* Bright yellow */
--fire-cream:  #FFF8ED   /* Warm off-white backgrounds */
--sky-blue:    #1B7DC4   /* Firefly brand blue */
--sky-dark:    #0D4F8A   /* Dark blue (headings, accents) */
--sky-light:   #E8F4FD   /* Light blue backgrounds */
--charcoal:    #2C2C2C   /* Body text */
--mid-gray:    #666666   /* Secondary text */
```

### Fonts (loaded from Google Fonts)
- **Fredoka One** — Display / headings (fun, rounded personality)
- **Nunito** — Body text (friendly, highly readable)

### Key CSS Classes
| Class | Purpose |
|---|---|
| `.container` | Centered max-width wrapper |
| `.btn.btn-fire` | Orange/red gradient button |
| `.btn.btn-blue` | Blue button |
| `.section` | Standard section with vertical padding |
| `.section-alt` | Cream background section |
| `.section-dark` | Dark blue section |
| `.two-col` | 2-column grid (stacks on mobile) |
| `.two-col.reverse` | Flipped 2-column grid |
| `.service-card` | White card with fire-colored top border |
| `.why-box` | Fire-gradient info box |
| `.cert-badge` | Dark blue certification highlight block |
| `.reveal` | Add to any element for scroll-reveal animation |
| `.fire-text` | Fire-gradient colored text |
| `.faq-list` / `.faq-item` | FAQ accordion container / individual question |
| `.gr-summary` / `.gr-card` | Google Reviews summary widget / badged review card |
| `.map-wrap` | Google Maps iframe container |
| `.blog-grid` / `.blog-card` | Blog index card grid |
| `.article-body` / `.article-tip-box` | Blog article prose container / callout box |
| `.calendly-wrap` | Container for the Calendly inline widget |
| `.social-icons` | Footer social icon row |

---

## 🌐 SEO Tips

Each page has:
- `<title>` tag — edit to reflect the page
- `<meta name="description">` — keep under 160 characters
- Semantic HTML (headings hierarchy: h1 → h2 → h3)
- Alt text on all images (add when you replace placeholders!)

To improve local SEO, consider adding:
- Google Business Profile with a link to this site
- Schema.org local business JSON-LD (ask Claude to generate this!)
- A sitemap.xml

---

## 📱 Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| `> 900px` | Full desktop layout |
| `≤ 900px` | Two-column grids become single column |
| `≤ 640px` | Mobile nav hamburger menu, further simplification |

Respects `prefers-reduced-motion` — all animations are disabled for users who prefer it.

---

## 🛠️ JavaScript Features (`js/main.js`)

| Feature | How it works |
|---|---|
| Mobile hamburger nav | Toggles `.open` class on `.nav-links` |
| Active nav link | Highlights current page link based on URL |
| Firefly dot animation | Spawns animated glow dots in the hero section |
| Coupon reveal | Shows `#couponBox` when `#couponBtn` is clicked |
| Contact form | Submits via `fetch()` to Formspree; shows success or error state without a page reload |
| FAQ accordion | Toggles `.open` on `.faq-item`, closing siblings within the same `.faq-list` |
| Scroll reveal | `IntersectionObserver` adds `.revealed` to `.reveal` elements |

See the **Contact Form**, **Online Booking**, **Google Reviews**, **Service Area Map**, **FAQ Accordions**, and **Blog** sections above for setup details on each integration.

---

## 🎯 Icon System

All emoji have been replaced with **Tabler Icons** (loaded via CDN in `styles.css`):

```css
@import url('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2/dist/tabler-icons.min.css');
```

Icons are inserted as `<i>` tags with the `ti ti-{name}` class, e.g.:

```html
<i class="ti ti-flame" aria-hidden="true"></i>
```

Browse the full icon set at [tabler.io/icons](https://tabler.io/icons). To swap an icon, just change the class name (e.g. `ti-flame` → `ti-fire-hydrant`). Icons used for purely decorative purposes have `aria-hidden="true"`; icons inside meaningful links/buttons inherit the link's accessible text.

Key icon classes used throughout the site:
| Class | Used for |
|---|---|
| `.service-icon` | Large icons on homepage service cards |
| `.fi-icon` / `.feature-number` | Small icons inside `.feature-item` rows |
| `.contact-item-icon` | Icons in the contact info block |
| `.page-hero-icon` | Big icon at the top of each service page |
| `.cert-badge-icon` | Icon inside the CSIA certification badge |
| `.ph-icon` | Icon inside image placeholders |
| `.vi` | Icon inside About section value pills |

---

## 📧 Contact Form — Formspree Setup

The homepage contact form (`#contactForm`) now posts to **Formspree** instead of faking a submission. To activate it:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy your form ID (looks like `xandbcde`)
3. In `index.html`, find:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" novalidate>
   ```
4. Replace `YOUR_FORM_ID` with your real ID
5. Formspree will email new submissions straight to the inbox you verify with them (e.g. barrie@fireflypropane.com)

The JS in `main.js` submits the form via `fetch()`, shows `.form-success` on a 200 response, and shows `.form-error` (with a fallback phone number) if anything fails — no page reload needed.

**Alternatives:** EmailJS (fully client-side, no backend) or a custom backend (Node/PHP) — see comments in `main.js` for where to swap in your own submit handler.

---

## 📅 Online Booking — Calendly Setup

`pages/booking.html` embeds a **Calendly inline widget**. To activate it:

1. Create a free [Calendly](https://calendly.com) account
2. Set up an event type (e.g. "Service Appointment," 60–90 min) — or create **separate event types per service** (BBQ, Chimney, Dryer Vent, Mosquito) and link each one from the matching service page's CTA buttons
3. Copy your scheduling link (e.g. `https://calendly.com/firefly-propane/service-appointment`)
4. In `pages/booking.html`, find:
   ```html
   <div class="calendly-inline-widget"
        data-url="https://calendly.com/YOUR-CALENDLY-USERNAME/service-appointment?hide_gdpr_banner=1&primary_color=f77f00"
   ```
5. Replace `YOUR-CALENDLY-USERNAME/service-appointment` with your real link path

The `primary_color=f77f00` param tints Calendly's UI with Firefly's brand orange. Calendly handles availability, reminders, and rescheduling automatically — no extra code needed.

**Alternative:** Housecall Pro, Jobber, or another field-service platform — most offer a similar embeddable booking widget or "Book Now" link you can drop into the same `.calendly-wrap` container.

---

## ⭐ Google Reviews

The homepage Reviews section (`#reviews`) includes a **Google Reviews summary widget** (rating, star count, "Read reviews on Google" link) above the existing testimonial cards.

To connect it to your real Google Business Profile:
1. In `index.html`, find the `.gr-summary` block and update the `<a class="gr-cta">` href to your real Google Business Profile review link
2. Update the `4.9` score and `120+ Google reviews` count to match your real numbers (update periodically)
3. For a live, auto-updating embed instead of a static summary, consider a third-party widget like [Elfsight](https://elfsight.com/google-reviews-widget/) or [EmbedSocial](https://embedsocial.com/google-reviews-widget/) — these pull live reviews via the Google Places API and can be dropped into the same section as an `<iframe>` or script embed once you have an API key.

---

## 🗺️ Service Area Map

The homepage Coverage section now includes a **Google Maps embed** showing the Westchester/Lower Fairfield service area.

To use your own map (e.g. centered on your office or a custom drawn service-area polygon):
1. Go to [Google Maps](https://www.google.com/maps), search your desired location/area
2. Click **Share → Embed a map**, copy the `<iframe>` `src` URL
3. In `index.html`, find the `.map-wrap iframe` and replace the `src` attribute with your copied URL

No API key is required for the basic embed shown here. For a custom-drawn service area boundary, use [Google My Maps](https://www.google.com/maps/d/) to draw a polygon, then embed that map instead.

---

## ❓ FAQ Accordions

Each service page (`bbq.html`, `chimney.html`, `dryer-vent.html`, `mosquito.html`) now has an **FAQ accordion** section before the final CTA.

To add or edit questions, copy this block inside any `.faq-list`:

```html
<div class="faq-item">
  <button class="faq-question">
    Your question here?
    <i class="ti ti-chevron-down faq-chevron" aria-hidden="true"></i>
  </button>
  <div class="faq-answer">
    <p>Your answer here.</p>
  </div>
</div>
```

The accordion behavior lives in `main.js` — clicking a question toggles its `.open` class (and closes any other open item in the same list). No extra setup needed; it works automatically on any `.faq-item` on any page.

---

## 📝 Blog / Tips Section

A new **Tips & Blog** section lives at `pages/blog.html`, linked from the nav and footer on every page.

- `pages/blog.html` — the article index (card grid)
- `pages/blog-grill-signs.html` — the first full article, **"5 Signs Your Grill Needs Cleaning"**

To add a new article:
1. Duplicate `pages/blog-grill-signs.html` and rename it (e.g. `blog-chimney-inspection.html`)
2. Update the `<title>`, meta description, hero heading, and body content
3. In `pages/blog.html`, replace one of the "Coming soon" placeholder cards with a real `<a href="your-new-article.html" class="blog-card">` link, following the pattern of the grill-signs card

Article styling (`.article-hero`, `.article-body`, `.article-tip-box`, `.article-numbered-list`) lives in `styles.css` and is reusable across any future post.

---

## 🔮 Future Enhancements (ideas)

- [x] Replace all emojis with real icons
- [x] Real contact form backend (Formspree)
- [x] Online booking/scheduling integration (Calendly)
- [x] Google Reviews embed
- [x] Service area map (Google Maps embed)
- [x] FAQ accordion sections per service
- [x] Blog / tips section ("5 signs your grill needs cleaning")
- [x] Add the good parts of the emoji version back
- [x] Fix the social media icon links
- [ ] Fix the get a quote thing
- [ ] On Friday, automate an email to everyone seen, including a recipe
- [ ] Google Analytics / tracking
- [ ] Live Google Reviews widget (via Places API or third-party embed) instead of static summary
- [ ] Separate Calendly event types per service, linked from each service page's CTA
- [ ] Additional blog articles (chimney inspection timing, dryer vent troubleshooting, mosquito magnet placement)

---

## 📞 Business Info

| | |
|---|---|
| **Business** | Firefly Propane |
| **Location** | Westchester County, NY |
| **Phone** | (914) 769-3336 |
| **Email** | barrie@fireflypropane.com |
| **Service Area** | Westchester County, NY & Lower Fairfield County, CT |
| **Slogan** | "Firefly, we light your fire!" |

---

*Built with ❤️ and 🔥 for Firefly Propane.*

# Maquillage by Abyna — Luxury Bridal Makeup Portfolio

A responsive, editorial marketing and portfolio website for **Maquillage by Abyna** (@maquillage_by_abyna), an elite bridal and luxury makeup artist based in Accra, Ghana.

Designed with an editorial, photography-first aesthetic inspired by high-end bridal platforms (*makeupbyashley.co*), this website is tailored to Abyna’s Ghanaian heritage, featuring real brides in traditional hand-beaded Kente, Northern Islamic bridal henna, white wedding ceremony glam, and editorial fashion.

---

## 🌟 Key Features

1. **Editorial Aesthetic & Design System**:
   - Typography pairing: **Cormorant Garamond** (high-fashion serif) and **Plus Jakarta Sans** (clean, modern sans-serif).
   - Bespoke bridal palette: warm alabaster, soft champagne gold accents, rich espresso, and terracotta undertones.
   - Generous whitespace, refined borders, and subtle micro-interactions.

2. **Full Photography & Video Portfolio**:
   - 3 curated sub-galleries: **Traditional Wedding (Kente & Henna)**, **White Wedding (Bridal & Robes)**, and **Fashion & Editorial**.
   - Interactive Lightbox with fullscreen high-res zoom, keyboard navigation (`Left`, `Right`, `Escape`), touch swipe support, and image counters.
   - Real bridal transformation video reels (`reel-01.mp4` through `reel-05.mp4`) with smooth video controls.

3. **Complete 8-Page Sitemap**:
   - `index.html` — Hero, 2-paragraph brand statement, top works gallery, pull-quotes, video reels, and footer.
   - `about.html` — Abyna's bio, 3 signature beauty pillars, morning-of calm timeline, and founder portrait.
   - `rates.html` — Transparent bridal packages (Ghanaian Cedi & USD equivalents), bridal party tiers, and luxury add-ons.
   - `portfolio.html` — Dynamic category filter tabs, full masonry grid, and transformation reels.
   - `training.html` — Professional 3-Day Bridal Artistry Masterclass and 1-Day "Master Your Own Face" private workshop.
   - `faqs.html` — Booking deposit policies (50% retainer), travel terms, skin prep tips, and cancellation policies.
   - `questionnaire.html` — Comprehensive bridal consultation form with direct WhatsApp dispatch.
   - `contact.html` — Validated date inquiry form, phone, email, and instant WhatsApp click-to-chat.

4. **Universal WhatsApp Integration**:
   - Floating WhatsApp button persistent across every page with animated pulse and hover tooltip.
   - Form submission automatically formats bride details and opens WhatsApp with a pre-filled message for instant date confirmation.

5. **SEO & Performance**:
   - Semantic HTML5, microdata `Schema.org` `BeautySalon` structured data.
   - Open Graph social share tags and meta descriptions tailored to Accra, Ghana bridal searches.
   - Optimized images with `loading="lazy"`.

---

## 📁 Project Directory Structure

```text
Maquillage by Abyna/
├── index.html               # Home page
├── about.html               # About Abyna & philosophy
├── rates.html               # Rates, packages & add-ons
├── portfolio.html           # Portfolio with category filter tabs & lightbox
├── training.html            # Masterclasses & workshops
├── faqs.html                # Booking & travel policies, FAQs
├── questionnaire.html       # Bridal consultation questionnaire
├── contact.html             # Contact & date availability inquiry
├── README.md                # Project documentation & client guide
└── assets/
    ├── css/
    │   └── style.css        # Complete CSS design system
    ├── js/
    │   ├── content.js       # Centralized brand, rates, FAQ & portfolio data
    │   └── main.js          # Lightbox, mobile drawer, form validation & WhatsApp logic
    ├── images/
    │   ├── brand/
    │   │   └── abyna-owner.jpg
    │   └── portfolio/
    │       ├── traditional/   # trad-01.jpg to trad-11.jpg
    │       ├── white-wedding/ # white-01.jpg to white-12.jpg
    │       └── editorial/     # edit-01.jpg to edit-12.jpg
    └── videos/
        ├── reel-01.mp4 to reel-05.mp4
```

---

## 🛠 How to Manage & Update Content

### 1. Updating Rates, Packages, and Contact Info
All primary business details, rates, and FAQs are centralized in **`assets/js/content.js`**.

Open `assets/js/content.js` in any text editor to edit:
- **Phone / WhatsApp Number**:
  ```javascript
  brand: {
    whatsappNumber: "233240000000", // Replace with Abyna's active WhatsApp number in international format (e.g., 233XXXXXXXXX)
    phoneDisplay: "+233 (0) 24 000 0000",
    email: "info@maquillagebyabyna.com",
    instagram: "@maquillage_by_abyna",
    ...
  }
  ```
- **Pricing Packages**:
  Under `SITE_CONFIG.packages`, edit `priceGHS`, `priceUSD`, features, or titles.
- **FAQs**:
  Under `SITE_CONFIG.faqs`, edit questions and answers.

> **Note:** The individual HTML pages (`rates.html`, `faqs.html`, `contact.html`) also contain accessible semantic HTML fallbacks. If updating `content.js`, you can mirror edits in the corresponding HTML files for static crawlers.

---

### 2. Adding or Replacing Portfolio Photos

To add or change photos:
1. Save your photo as a JPEG or WebP image inside:
   - `assets/images/portfolio/traditional/` for Kente / Traditional looks.
   - `assets/images/portfolio/white-wedding/` for White Wedding gown & robe looks.
   - `assets/images/portfolio/editorial/` for Fashion & Editorial looks.
2. Recommended photo specifications:
   - **Resolution**: Width of 1200px – 1600px.
   - **File Size**: 150KB – 400KB (compress using [TinyJPG](https://tinyjpg.com) or Squoosh).
   - **Orientation**: Portrait orientation (4:5 or 3:4 ratio) looks best in the masonry grid.
3. Register the new photo in `assets/js/content.js` inside `SITE_CONFIG.portfolio`:
   ```javascript
   {
     id: "trad-12",
     title: "Royal Emerald Kente Glam",
     category: "traditional",
     categoryLabel: "Traditional Wedding",
     image: "assets/images/portfolio/traditional/trad-12.jpg",
     thumbnail: "assets/images/portfolio/traditional/trad-12.jpg",
     description: "Velvet skin finish paired with gold leaf detailing for traditional Akan ceremony.",
     tag: "Kente Glam"
   }
   ```

---

### 3. Wiring Up the Contact Form Backend

The contact and questionnaire forms are designed to work seamlessly out-of-the-box with **Formspree**:

1. Create a free account at [Formspree.io](https://formspree.io).
2. Create a new form named `Maquillage by Abyna - Bridal Inquiries` and set Abyna’s email as the recipient.
3. Copy your Formspree form ID (e.g. `xbjnqweo` or your custom ID).
4. Update the endpoint in:
   - `assets/js/content.js` under `SITE_CONFIG.brand.formspreeEndpoint`
   - The `action="..."` attribute in `contact.html` and `questionnaire.html`
5. **Instant WhatsApp Fallback**: If internet connectivity is slow or if Formspree is unreachable, the form automatically falls back to generating a pre-filled WhatsApp message with all the bride's details ready to send with one click!

---

## 🚀 Running Locally & Testing

You can run this website on your computer using Python:

```bash
cd "/Users/id/Desktop/WEBSITES FOLDER/Maquillage by Abyna"
python3 -m http.server 8000
```

Then open your browser and navigate to:
```text
http://localhost:8000
```

---

## 🌐 Free 1-Click Deployment

This website is pure HTML5, CSS3, and modern Vanilla JavaScript — no Node.js build step or complex servers required. It can be deployed in under 2 minutes on any modern host:

### Option A: Netlify (Recommended)
1. Go to [Netlify.com](https://www.netlify.com).
2. Drag and drop the `Maquillage by Abyna` folder into Netlify Drop.
3. Done! Connect a custom domain like `maquillagebyabyna.com`.

### Option B: Vercel
1. Run `npx vercel` or import the GitHub repository into [Vercel](https://vercel.com).
2. Deployment is instantaneous.

### Option C: GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages → Source: Deploy from branch `main`**.
3. Your site will be live at `https://<username>.github.io/<repo-name>`.

---

© 2026 Maquillage by Abyna. Crafted with excellence for Ghanaian luxury bridal beauty.

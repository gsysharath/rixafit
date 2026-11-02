# RIXA FIT website

Next.js 16 (App Router) + React 19 + Tailwind CSS 3 site for RIXA FIT, Mahabubnagar.
Every page from the original HTML template is a statically generated route, and all
forms deliver to the gym's inbox with an automatic confirmation email to the visitor.

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in SMTP_PASS (see below)
npm run dev                  # http://localhost:3000
```

Without SMTP credentials in development, form submissions still succeed and are printed
to the terminal instead of being emailed. In production they fail with a clear message
until the credentials are set.

```bash
npm run lint
npm run build && npm start   # production build locally
```

## Deploy to Vercel

1. Push this repository to GitHub and import it at <https://vercel.com/new> (framework: Next.js, no extra settings).
2. Add the environment variables below in **Project → Settings → Environment Variables**.
3. Deploy, then add your custom domain under **Settings → Domains** and set `NEXT_PUBLIC_SITE_URL` to it.

| Variable | Required | Value |
| --- | --- | --- |
| `SMTP_USER` | yes | `rixafit2024@gmail.com` |
| `SMTP_PASS` | yes | Gmail **App Password** (16 characters) |
| `SMTP_HOST` | no | `smtp.gmail.com` (default) |
| `SMTP_PORT` | no | `465` (default) |
| `MAIL_TO` | no | Inbox that receives enquiries (defaults to `site.email`) |
| `MAIL_FROM_NAME` | no | Sender name, default `RIXA FIT` |
| `NEXT_PUBLIC_SITE_URL` | recommended | `https://your-domain.com` |

### Creating the Gmail App Password

1. Sign in to the Gmail account at <https://myaccount.google.com/security>.
2. Turn on **2-Step Verification** (required for app passwords).
3. Open <https://myaccount.google.com/apppasswords>, create one named "RIXA FIT website" and copy the 16-character code into `SMTP_PASS`.

Gmail allows roughly 500 emails/day; each submission sends two (notification + auto-reply).

## Forms

All forms post to `POST /api/enquiry` (`app/api/enquiry/route.js`):

| Form | Where | Gym receives | Visitor receives |
| --- | --- | --- | --- |
| Contact / plan enquiry | `/contact` (CHOOSE PLAN buttons prefill the plan) | Enquiry details | Confirmation + copy of message |
| Class booking | every `/classes/[slug]` page | Booking request | Booking confirmation |
| Newsletter | footer section of most pages | New subscriber | Welcome email |
| Blog comment | every `/blog/[slug]` page | Comment for review | Thank-you email |

Protection: server-side validation, a hidden honeypot field, same-origin check and a
per-IP rate limit (5 submissions / 10 minutes). The BMI calculators run entirely in the browser.

## Editing content

Business content lives in `data/` - edit these files instead of the page markup:

| File | Controls |
| --- | --- |
| `data/site.js` | Name, phone, email, WhatsApp, Instagram, address, opening hours, map, video link |
| `data/plans.js` | Membership plans (name, duration, price in INR) and important notes - home + `/pricing` |
| `data/classes.js` | Classes, schedules, descriptions → `/classes/[slug]` |
| `data/trainers.js` | Trainer names, roles, photos, bios → `/trainer/[slug]` |
| `data/services.js` | Services → `/services/[slug]` |
| `data/posts.js` | Blog articles → `/blog/[slug]` |

New entries automatically get their own page, appear in `sitemap.xml` and in the booking form dropdowns.
If you rename the first class/trainer/service/post slug, update the matching redirect in `next.config.js`.

## Project layout

```
app/                 routes (one folder per page, [slug] = detail pages), api/enquiry, sitemap, robots, 404
components/          Header, Footer, menus, banner, TemplateScripts (GSAP / sliders / counters)
components/forms/    AnimatedField + Contact, Booking, Newsletter, Comment, Home BMI forms
components/cards/    Reusable cards rendered from data
data/                Editable business content
lib/                 Form validation, mailer, BMI maths, client hooks
public/images, gym/  Optimised WebP images (served locally, cached 30 days)
styles/              Vendored third-party CSS
```

## SEO

Built in (no action needed):

- Every page gets a unique title, description, canonical URL, Open Graph and Twitter card via `pageMetadata()` in `lib/seo.js`, written around local searches such as "gym in Mahabubnagar" and "gym membership fees Mahabubnagar".
- `sitemap.xml` (all pages, classes, services, trainers and posts - new data entries are added automatically) and `robots.txt` pointing to it.
- Structured data: `HealthClub`/`ExerciseGym` local business (address, both phones, hours, price range, map, Instagram), `WebSite`, `BreadcrumbList` on every inner page, `Service` on class and service pages, `OfferCatalog` for membership plans, `BlogPosting` for articles.
- Web app manifest and icons, `en-IN` language, share image `public/images/og-image.jpg`.

Set `NEXT_PUBLIC_SITE_URL` to the live domain - canonical URLs and the sitemap are generated at build time (on Vercel the production domain is used automatically).

### Getting found on Google ("gym near me", "gym in Mahabubnagar")

Local gym searches are decided mostly by the Google map listing, so these steps matter as much as the website:

1. **Google Business Profile** (<https://business.google.com>) - claim or create "RIXA FIT", category *Gym*, same address and phone numbers as the website, add the website link, hours, photos and the membership prices. Verify it (postcard/phone/video).
2. **Google Search Console** (<https://search.google.com/search-console>) - add the domain, verify with the HTML tag method (put the token in `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and redeploy), then submit `https://your-domain/sitemap.xml` and request indexing for the home page.
3. **Bing Webmaster Tools** (<https://www.bing.com/webmasters>) - import from Search Console or use `NEXT_PUBLIC_BING_SITE_VERIFICATION`.
4. **Reviews** - ask members for Google reviews and reply to them; review count and rating strongly influence map rankings.
5. **Consistent details everywhere** - use the exact same name, address and phone on Instagram, Justdial, Sulekha and other listings, and link them to the website.
6. **Real content** - replace placeholder trainer profiles and testimonials with genuine ones, and keep adding blog posts about training in Mahabubnagar.

## Production notes

- Old template URLs (`/class-details`, `/about.html`, ...) permanently redirect to the new routes.
- Security headers (CSP, HSTS, frame, referrer, permissions) are set in `next.config.js`.
- The rate limiter is in-memory per server instance; for heavy traffic, swap in a shared store (e.g. Upstash Redis).

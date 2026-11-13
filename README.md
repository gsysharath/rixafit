# RIXA FIT website

Next.js 16 (App Router) + React 19 + Tailwind CSS 3 site for RIXA FIT, Mahabubnagar.
Every page from the original HTML template is a statically generated route, and all
forms deliver to the gym's inbox with an automatic confirmation email to the visitor.

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in SMTP_PASS (info@rixafit.com mailbox password)
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
3. Deploy, then connect **rixafit.com** (next section).

| Variable | Required | Value |
| --- | --- | --- |
| `SMTP_USER` | yes | `info@rixafit.com` |
| `SMTP_PASS` | yes | The `info@rixafit.com` mailbox password |
| `SMTP_HOST` | no | `smtpout.secureserver.net` (default) |
| `SMTP_PORT` | no | `465` (default) |
| `MAIL_TO` | no | Inbox(es) that receive enquiries, comma-separated (defaults to `info@rixafit.com`) |
| `MAIL_FROM_NAME` | no | Sender name, default `RIXA FIT` |
| `NEXT_PUBLIC_SITE_URL` | no | Defaults to `https://rixafit.com` in production builds |

### Connect rixafit.com (GoDaddy DNS)

1. In Vercel: **Project → Settings → Domains** → add `rixafit.com`, then add `www.rixafit.com` and choose *Redirect to rixafit.com*. Vercel then shows the DNS values to use.
2. In GoDaddy: **My Products → rixafit.com → DNS → DNS Records**:

   | Action | Type | Name | Value (copy the exact value Vercel shows) | TTL |
   | --- | --- | --- | --- | --- |
   | Edit (replaces "WebsiteBuilder Site") | A | `@` | Vercel's IP, e.g. `216.198.79.1` or `76.76.21.21` | 1 Hour |
   | Edit (currently `rixafit.com.`) | CNAME | `www` | Vercel's CNAME, e.g. `cname.vercel-dns.com` | 1 Hour |

   Leave the NS, SOA, `_domainconnect` and `_dmarc` records unchanged. If GoDaddy won't let you edit the "WebsiteBuilder Site" record, delete it and add the new A record (this takes the GoDaddy builder site offline, which is intended).
3. Wait until Vercel shows **Valid Configuration** for both domains (usually minutes, up to a few hours). Vercel issues the HTTPS certificate automatically.

### Email (info@rixafit.com - GoDaddy Professional Email powered by Titan)

Form notifications go to `info@rixafit.com` and every visitor gets an auto-reply sent from
`info@rixafit.com` (replies land back in that mailbox). Mail is sent through GoDaddy's
outgoing server `smtpout.secureserver.net` (port 465, SSL), the server GoDaddy specifies
for websites. The domain's DNS already has the matching records - leave them as they are:

| Type | Name | Value |
| --- | --- | --- |
| MX | `@` | `smtp.secureserver.net` (priority 0) |
| MX | `@` | `mailstore1.secureserver.net` (priority 10) |
| TXT (SPF) | `@` | `v=spf1 include:secureserver.net -all` |
| TXT (DMARC) | `_dmarc` | `v=DMARC1; p=quarantine; ...` |

Use the mailbox password for `SMTP_PASS`. After changing environment variables in Vercel,
redeploy (Deployments → ⋯ → Redeploy) so the new values are used. Each submission sends
two emails (notification + auto-reply); GoDaddy applies a daily sending limit per mailbox.

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

Canonical URLs, the sitemap and social tags use `https://rixafit.com` in production builds (set in `data/site.js`; `NEXT_PUBLIC_SITE_URL` overrides it).

### Getting found on Google ("gym near me", "gym in Mahabubnagar")

Local gym searches are decided mostly by the Google map listing, so these steps matter as much as the website:

1. **Google Business Profile** (<https://business.google.com>) - claim or create "RIXA FIT", category *Gym*, same address and phone numbers as the website, add the website link, hours, photos and the membership prices. Verify it (postcard/phone/video).
2. **Google Search Console** (<https://search.google.com/search-console>) - add the domain, verify with the HTML tag method (put the token in `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and redeploy), then submit `https://rixafit.com/sitemap.xml` and request indexing for the home page.
3. **Bing Webmaster Tools** (<https://www.bing.com/webmasters>) - import from Search Console or use `NEXT_PUBLIC_BING_SITE_VERIFICATION`.
3a. **Google Tag Manager + Google Analytics 4** - the Tag Manager container `GTM-5WN3TZ8T` is built in (`data/site.js` -> `gtmId`) and loads only on rixafit.com. Add the GA4 tag ("Google tag" with the `G-...` ID) inside Tag Manager and publish. The site pushes these dataLayer events for Custom Event triggers: `click_call`, `click_whatsapp`, `click_join_now`, `click_app_store`, `click_directions`, `click_instagram` and `generate_lead` (contact form sent), each with `link_url`, `link_text`, `page_path`. Leave `NEXT_PUBLIC_GA_ID` empty when GA4 runs through Tag Manager. Other services added in Tag Manager (Meta Pixel, Google Ads...) must also be allowed in the security policy in `next.config.js`.
4. **Reviews** - ask members for Google reviews and reply to them; review count and rating strongly influence map rankings.
5. **Consistent details everywhere** - use the exact same name, address and phone on Instagram, Justdial, Sulekha and other listings, and link them to the website.
6. **Real content** - replace placeholder trainer profiles and testimonials with genuine ones, and keep adding blog posts about training in Mahabubnagar.

## Production notes

- Old template URLs (`/class-details`, `/about.html`, ...) permanently redirect to the new routes.
- Security headers (CSP, HSTS, frame, referrer, permissions) are set in `next.config.js`.
- The rate limiter is in-memory per server instance; for heavy traffic, swap in a shared store (e.g. Upstash Redis).

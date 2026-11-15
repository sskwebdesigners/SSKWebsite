# SSK Web Solutions

Premium digital agency website built with React, TypeScript and Vite.

## Run locally

```sh
npm install
cp .env.example .env.local
npm run dev
```

## Build

```sh
npm run typecheck
npm run build
npm run preview
```

Vercel deployment is configured for SPA routes in `vercel.json`. Import the repository into Vercel and deploy with the default Vite build settings (`npm run build`, output directory `dist`).

## Enquiries

Set `VITE_API_BASE_URL` to an HTTPS API base URL. The site posts JSON to `/api/enquiries` and only shows the success state after a successful response. Implement that endpoint in a backend (for example, a Vercel Function backed by PostgreSQL); validate and rate-limit submissions server-side, store timestamps in UTC, and apply your retention policy. Without the endpoint configured, the form explains that online submission is unavailable and offers the WhatsApp/email fallback.

Set `VITE_WHATSAPP_PHONE` to the business WhatsApp number in international digits only, with no plus sign or spaces. Until configured, contact links fall back to email or the contact page. Update the sample email, domain, sitemap URLs, and canonical URL before launch.

## Content and pricing

Services, industries, concept portfolio items and INR/USD website starting prices are in `src/data/site.ts`. Pricing is indicative and displayed as starting prices. Monthly service enquiries are quote-led. Replace the demonstration concepts only with approved real work, and update the legal copy to match your actual policies and operating entity before launch.

## SEO and analytics

`index.html` contains baseline metadata; `App.tsx` updates titles and descriptions on client-side navigation. `public/robots.txt` and `public/sitemap.xml` use the example domain and should be updated to the production domain. Add real page-specific canonical URLs and structured data only after finalizing the production domain and business details. No office address, registration, credentials, client metrics or testimonials are claimed here. No hreflang is emitted because localized page variants do not exist.

GA4, Search Console and Meta Pixel are not loaded by default. Add analytics and advertising tags only with an appropriate consent flow and applicable privacy notices. The current cookie choice records essential-only or all in local storage but does not load any tracking scripts.

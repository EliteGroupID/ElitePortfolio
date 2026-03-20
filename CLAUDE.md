# ELITECH ID — ElitePortfolio

Digital product studio / software agency website. Premium, minimalist, dark-mode aesthetic (Awwwards-inspired).

---

## Tech Stack

- **Framework:** Next.js App Router + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion (`motion/react`)
- **i18n:** next-intl — EN and ID (Indonesian)
- **Icons:** Lucide React

---

## Project Structure

```
app/[locale]/               ← All pages (locale-aware routing)
  page.tsx                  ← Homepage
  works/page.tsx            ← Works listing
  works/[slug]/page.tsx     ← Case study detail
  services/page.tsx         ← Services listing
  services/[slug]/page.tsx  ← Service detail
  products/page.tsx         ← Products listing
  products/[slug]/page.tsx  ← Product detail
  contact/page.tsx          ← Contact form
  estimate/page.tsx         ← 4-step project estimator wizard
  privacy/page.tsx          ← Privacy policy
  terms/page.tsx            ← Terms of service

src/
  components/               ← Shared UI components
  data/                     ← Centralized content (single source of truth)
    works.ts                ← 6 case study projects
    services.ts             ← 5 services
    products.ts             ← 7 products (4 Software + 3 IoT)
  i18n/navigation.ts        ← Locale-aware Link component

messages/
  en.json                   ← English translations
  id.json                   ← Indonesian translations
```

---

## Critical Rules

### 1. Always use `<Link>` from `src/i18n/navigation`
Never use `<a>` tags or `next/link` directly. The project uses next-intl locale routing — plain links break it.

```tsx
// ✅ Correct
import { Link } from "@/i18n/navigation";
<Link href="/contact">Contact</Link>

// ❌ Wrong
<a href="/contact">Contact</a>
import Link from "next/link";
```

### 2. Anchor links to homepage sections must use `/#section`
`href="#about"` only works on the homepage. From any other page, use the full path.

```tsx
// ✅ Correct — works from any page
href="/#about"
href="/#services"
href="/#work"
href="/#products"

// ❌ Wrong — breaks when navigating from /works, /services, etc.
href="#about"
```

### 3. Content edits go in `src/data/` — never hardcode in page files
All works, services, and product content lives in `src/data/`. Edit there and changes flow to all pages.

| Content | File |
|---------|------|
| Case studies / portfolio works | `src/data/works.ts` → `allWorks[]` |
| Services | `src/data/services.ts` → `allServices[]` |
| Products | `src/data/products.ts` → `softwareProducts[]`, `iotProducts[]` |

---

## Homepage Section Order & Spacing

```
Hero → Services → TechMarquee → Works → Products → Process → WhyUs → About → Testimonials → CTABanner → Footer
```

Each section shows **max 3 items** with a "View All" link to the full listing page.

Spacing (do not change without reason):
- Services: `pt-32 pb-16`
- TechMarquee: `pt-10 pb-14 border-b` (no border-t)
- Works: `py-24`
- Products: `py-24`
- Process: `pt-16 pb-24 border-t`
- WhyUs: `py-24`
- About: `pt-16 pb-28`
- Testimonials: `py-24`

---

## Key Components

| Component | Description |
|-----------|-------------|
| `Navbar` | Fixed, scroll-aware, mobile menu, locale switcher |
| `SplashScreen` | Shows once per browser session (sessionStorage) |
| `CountUp` | Animated number counter, triggers on scroll via useInView |
| `TechMarquee` | Two-row infinite marquee, opposite scroll directions |
| `LocaleSwitcher` | EN/ID toggle in navbar and mobile menu |
| `Footer` | Links to all pages including `/estimate` and `/privacy` |

---

## Data File Notes

### `src/data/works.ts`
- Each work has **both** list fields (`desc`, `image`, `tags`, `featured`) and detail fields (`duration`, `client`, `role`, `images[]`, `tagline`, `overview`, `challenge`, `solution`, `results[]`, `testimonial`)
- Detail page uses `project.image` (not `heroImage`)

### `src/data/services.ts`
- Each service has `listStat` (single stat, used on listing page) and `stats[]` (3 stats, used on detail page)
- Also exports `relatedProjectData` — lookup map for related work preview cards on service detail pages
- Listing page still uses `titleKey` / `descKey` for i18n; detail page uses static `service.title`

### `src/data/products.ts`
- 4 Software products + 3 IoT products
- Used by homepage Products section, `/products` listing, and `/products/[slug]` detail

---

## Brand

- **Name:** ELITECH ID (rendered as `ELITECH ID.` — dot is `text-neutral-500`)
- **Background colors:** `#050505` (primary), `#0A0A0A` (secondary sections)
- **Text:** white primary, `neutral-400` secondary, `neutral-500` labels/muted
- **Border style:** `border-white/5` subtle, `border-white/10` hover states

# Can I Drink Milk — Project Specification

## Overview

**Domain:** www.canidrinkmilk.com
**Type:** Not-for-profit educational website
**Mission:** Help people understand lactose intolerance, identify whether they may be affected, and make informed dietary choices.
**Workshop context:** This project is being built live during a university workshop on prototyping with AI. The AI generating the site is the demonstration — the tools themselves do not use AI.

---

## Why This Matters

Around 65–70% of the global adult population has some degree of lactose malabsorption. Most people never connect their symptoms (bloating, cramps, gas, diarrhoea) to dairy consumption. They assume it's "normal digestion" or attribute it to something else entirely.

Lactose intolerance is not a disease. It is the ancestral default for humans. Lactase persistence (the ability to digest lactose into adulthood) is a genetic mutation that became common in populations with a long history of dairy farming, primarily Northern Europeans. The "disorder" is actually the norm for most of the world's population.

This framing is important for the tone of the site: we are not pathologising anyone. We are helping people understand their own bodies.

---

## Technical Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| **Framework** | Next.js 16 | App Router, server components by default |
| **React** | React 19 | |
| **Language** | TypeScript | Strict mode |
| **Package manager** | pnpm | With pnpm-workspace.yaml |
| **Styling** | CSS Modules | `.module.css` files per component, no Tailwind |
| **Design tokens** | CSS Custom Properties | Defined in `app/globals.css` |
| **Animation** | Motion (Framer Motion v12) | `motion/react` import path |
| **Icons** | Lucide React | `lucide-react` |
| **Fonts** | Google Fonts via `next/font` | Geist (sans), Geist Mono, Platypi (serif for headings) |
| **Images** | Next.js `<Image>` | Remote images from `assets.canidrinkmilk.com` CDN, AVIF format |
| **State management** | React `useReducer` | Quiz state is entirely client-side |
| **Data** | TypeScript module | `data/quiz.ts` — questions, scoring, result bands |

---

## Design System

### Colour Palette (Dark Theme)

```
Backgrounds:     #1A1A1A (primary), #252525 (secondary), #2A2A2A (card), #333333 (card hover)
Text:            #FFFFFF (primary), #B0B0B0 (secondary), #999999 (muted)
Accent (teal):   #92C5BC (base), #A8D4CC (hover), rgba(146,197,188,0.15) (subtle)
Brand:           #444344 (charcoal), #E2EAEF (light grey)
```

### Typography

- **Sans-serif (body):** Geist (`--font-geist-sans`)
- **Monospace:** Geist Mono (`--font-geist-mono`)
- **Serif (headings):** Platypi (`--font-platypi` / `--font-serif`)
- **Scale:** `--text-xs` (0.75rem) through `--text-5xl` (3.5rem)
- Headlines use `clamp()` for fluid sizing

### Spacing

8-point scale via custom properties: `--space-xs` (0.25rem) through `--space-4xl` (6rem)

### Layout

- Max content width: `--max-width: 1100px`
- Content padding: `--content-padding: 1.5rem`
- Border radii: `--radius-sm` (8px) through `--radius-full` (9999px)

### Design Direction

- Dark theme — warm, approachable, slightly playful but credible
- Not clinical or medical-feeling
- Milk/dairy visual language but not cliched (no cartoon cows... well, one SVG cow brandmark)
- Teal accent on dark charcoal creates a modern, trustworthy feel
- Mobile-first responsive design

---

## Project Structure

```
app/
  layout.tsx              # Root layout — fonts, metadata, global CSS
  globals.css             # CSS custom properties (design tokens), reset
  page.tsx                # Landing page — composes section components
  page.module.css         # Landing page styles (minimal)
  favicon.ico
  quiz/
    page.tsx              # Quiz route — server component wrapper with metadata
    QuizClient.tsx        # Quiz client component — all quiz logic
    QuizClient.module.css # Quiz styles

components/
  Brand.tsx               # SVG wordmark ("Can I Drink Milk?")
  BrandMark.tsx           # SVG cow brandmark icon
  Hero/
    Hero.tsx              # Hero section
    Hero.module.css
    HeroImageColumns.tsx  # Animated image columns behind hero (Motion)
    HeroImageColumns.module.css
  StatsStrip/
    StatsStrip.tsx        # Three key statistics
    StatsStrip.module.css
  Reframe/
    Reframe.tsx           # "It's Not a Disease" educational reframe
    Reframe.module.css
  Symptoms/
    Symptoms.tsx          # Symptom cards grid
    Symptoms.module.css
  HowItWorks/
    HowItWorks.tsx        # Three-step process explanation
    HowItWorks.module.css
  DidYouKnow/
    DidYouKnow.tsx        # Surprising facts grid
    DidYouKnow.module.css
  Spectrum/
    Spectrum.tsx           # "It's a Spectrum" section with visual bar
    Spectrum.module.css
  QuizCTA/
    QuizCTA.tsx            # Final call-to-action before footer
    QuizCTA.module.css
  Footer/
    Footer.tsx             # Disclaimer, sources, credits, acknowledgement
    Footer.module.css
  flags/
    flag.tsx               # Aboriginal flag component (animated)
    flag.module.css
    torresStraitFlag.tsx   # Torres Strait Islander flag component (animated)
    torresStraitFlag.module.css

data/
  quiz.ts                  # All quiz data, scoring logic, helper functions

docs/
  image-assets.md          # Image asset inventory with URLs and descriptions
  quiz-spec.md             # Quiz specification (this companion doc)
  project-spec.md          # This document
  landing-page-design.md   # Landing page design and content doc

next.config.ts             # Image remote patterns for CDN
```

---

## Pages

### Page 1: Landing Page (`/`)

The landing page is the entry point. It communicates what the site does, why it matters, and funnels visitors into the quiz. It consists of 9 sections composed as React components.

**Section order:**
1. **Hero** — Brandmark, headline ("Can I Drink Milk?"), subheadline, "Take the Quiz" CTA, animated image columns
2. **StatsStrip** — Three key statistics (68%, 5B+, 90%)
3. **Reframe** — "It's Not a Disease. It's Biology." — the key educational reframe with pull quote and supporting text
4. **Symptoms** — Grid of 7 symptom cards with a timing callout
5. **HowItWorks** — Three-step numbered process with connector line
6. **DidYouKnow** — Grid of 6 surprising fact cards
7. **Spectrum** — "It's a Spectrum, Not a Switch" with visual gradient bar
8. **QuizCTA** — Final call-to-action with image and button
9. **Footer** — Disclaimer, sources, workshop credit, Acknowledgement of Country with animated flags

See `docs/landing-page-design.md` for detailed content and layout specifications.

### Page 2: Quiz (`/quiz`)

A standalone page with the 11-question self-assessment quiz. See `docs/quiz-spec.md` for full quiz specification.

**Architecture:**
- `page.tsx` is a server component that sets metadata and renders `QuizClient`
- `QuizClient.tsx` is a `'use client'` component containing all quiz logic
- State managed with `useReducer` — tracks current step, answers, score, direction
- Questions imported from `data/quiz.ts`

**UX flow:**
1. One question at a time with progress bar
2. Select an answer, then tap "Next" (or "See My Results" on Q11)
3. Back button to revise answers (hidden on Q1)
4. Directional slide animations (forward/back)
5. Results screen with headline, detail, contextual dairy message, practical tips, disclaimer
6. "Retake Quiz" resets all state

---

## Image Assets

All images are served from `https://assets.canidrinkmilk.com/` in AVIF format.

### Root Images (Landing Page)

| File | Used In | Description |
|------|---------|-------------|
| `milkman-hero.avif` | Hero image columns | Shocked milkman surrounded by milk bottles |
| `cheers-milkshake.avif` | Hero image columns | Friends clinking milkshakes |
| `woman-feeling-sick-with-milk.avif` | Hero columns, Reframe section | Woman uncomfortable after drinking milk |
| `milk-cookie-man-unsure.avif` | Hero columns, QuizCTA | Man unsure about drinking milk |
| `milk-party-overhead-shot.avif` | Hero columns, Spectrum section | Family clinking glasses of milk |

### Cereal Series (Quiz Results)

| File | Quiz Result Band |
|------|-----------------|
| `cereal/cereal-milk-excited.avif` | Hero columns |
| `cereal/cereal-milk-shocked.avif` | Hero columns |
| `cereal/cereal-milk-unsure.avif` | Hero columns |

See `docs/image-assets.md` for the full inventory with sizes and descriptions.

### Next.js Image Configuration

```typescript
// next.config.ts
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "assets.canidrinkmilk.com",
      pathname: "/**",
    },
  ],
}
```

---

## Accessibility Requirements

- Proper semantic HTML (`<section>`, `<nav>`, `<footer>`, `<h1>`–`<h3>`)
- Keyboard navigation throughout
- Focus management: quiz question heading receives focus on step change
- `aria-pressed` on selected quiz options
- `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- `aria-hidden` on decorative elements
- `aria-label` on interactive elements
- Sufficient colour contrast (light text on dark backgrounds)
- `prefers-reduced-motion` support (Motion library's `useReducedMotion`)
- Min 48px touch targets on quiz options and buttons

---

## Important Disclaimers and Sensitivities

### Medical Disclaimer
This quiz is an educational tool only. It is not a medical diagnosis. Lactose intolerance shares symptoms with other conditions including IBS, coeliac disease, Crohn's disease, and SIBO. Only a qualified medical professional can diagnose lactose intolerance, typically through a hydrogen breath test or elimination diet.

### Cultural Sensitivity
The site avoids framing lactose intolerance as abnormal or defective. Lactase persistence (the ability to digest lactose as an adult) is a genetic adaptation found primarily in populations with a long history of dairy farming. Lactose intolerance is the ancestral human default and remains the norm for the majority of the global population. The site never frames this through a deficit lens.

### Ancestry/Ethnicity
We deliberately do NOT ask about ancestry or ethnicity in the quiz. While prevalence varies significantly by population background, asking this question in a consumer tool creates issues around racial profiling and oversimplification. The quiz focuses solely on symptoms and patterns.

---

## Data Sources and References

- Casellas F, Aparici A, Casaus M, Rodriguez P, Malagelada JR. "Development, Validation, and Applicability of a Symptoms Questionnaire for Lactose Malabsorption Screening." *Digestive Diseases and Sciences*, 2008.
- USDA FoodData Central (public domain, CC0 1.0)
- Open Food Facts (Open Database License)
- Itan Y, Jones BL, Ingram CJE, Swallow DM, Thomas MG. "A worldwide correlation of lactase persistence phenotype and genotypes." *BMC Evolutionary Biology*, 2010.
- Anguita-Ruiz A et al. "Genetics of Lactose Intolerance: An Updated Review and Online Interactive World Maps." *Nutrients*, 2020.

---

## Future Phases

### Phase 2: "Can I Eat/Drink ___?" Food Lookup Tool
A search tool that tells users the lactose content of specific foods. Potentially a separate page or section.

### Phase 3: Open Food Facts API Integration
Integration with the Open Food Facts API for real-time food data lookup.

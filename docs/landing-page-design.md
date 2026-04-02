# Landing Page — Design & Content Document

This document describes every section of the landing page in order. For each section: what it does, what it says, how it's laid out, and what component implements it. Use this as a blueprint to recreate the page from scratch.

---

## Page Composition

The landing page (`app/page.tsx`) renders 9 section components in this exact order:

```tsx
<Hero />
<StatsStrip />
<Reframe />
<Symptoms />
<HowItWorks />
<DidYouKnow />
<Spectrum />
<QuizCTA />
<Footer />
```

Each component is a self-contained section with its own CSS Module.

---

## Section 1: Hero

**Component:** `components/Hero/Hero.tsx` + `components/Hero/HeroImageColumns.tsx`
**Purpose:** Immediate hook. Establishes what the site is, sets the playful tone, and provides the primary CTA.

### Content

- **Brandmark:** SVG cow icon (`BrandMark` component) centered above the headline, with a pulsing teal radial glow behind it
- **Headline:** "Can I Drink Milk?" — uses the serif font (Platypi), fluid sizing via `clamp(2.25rem, 5vw, 4rem)`
- **Subheadline:** "Most of the world can't. Let's find out about you."
- **CTA Button:** "Take the Quiz" — links to `/quiz`, pill-shaped (full border-radius), teal background, dark text
- **Scroll indicator:** Subtle bouncing chevron-down icon (Lucide) at the bottom

### Background: Animated Image Columns

Behind the centered text content, four columns of images create a visual collage effect:

| Column | Position | Images |
|--------|----------|--------|
| Left outer | Far left | `milkman-hero.avif`, `cereal-milk-shocked.avif` |
| Left inner | Centre-left | `cheers-milkshake.avif`, `woman-feeling-sick-with-milk.avif` |
| Right inner | Centre-right | `milk-cookie-man-unsure.avif`, `cereal-milk-excited.avif` |
| Right outer | Far right | `milk-party-overhead-shot.avif`, `cereal-milk-unsure.avif` |

Each image card is absolutely positioned within its column with specific `top`, `left`, `width`, and `height` values. They animate in with Motion: fade + scale + blur on mount, with staggered delays (0.1s between each). Hover scales them up slightly. Respects `prefers-reduced-motion`.

### Layout

- Full-width section, `min-height: 60vh`, centred flex column
- Image columns are behind the content (lower z-index)
- Content sits on top with `z-index: 2`
- Everything centred both horizontally and vertically

---

## Section 2: StatsStrip

**Component:** `components/StatsStrip/StatsStrip.tsx`
**Purpose:** Social proof and intrigue. Makes the scale of lactose intolerance feel real and surprising.

### Content

Three statistics displayed side by side:

| Number | Label |
|--------|-------|
| **68%** | of the world's adults have reduced ability to digest lactose |
| **5B+** | people affected globally |
| **90%** | of East Asian adults are lactose intolerant |

### Layout

- Horizontal row of 3 stat items within a max-width container
- Each stat: large bold number + smaller descriptive label below
- Acts as a visual divider between the hero and the educational content

---

## Section 3: Reframe

**Component:** `components/Reframe/Reframe.tsx`
**Purpose:** The key educational message. Reframes lactose intolerance as the biological norm, not a disorder.

### Content

- **Heading:** "It's Not a Disease. It's Biology." (line break after "Disease.")
- **Pull quote (blockquote):** "Lactase persistence — the ability to digest milk as an adult — is actually the genetic mutation. Not the other way around."
- **Supporting paragraph:** "Most mammals lose the ability to digest lactose after weaning. Humans who can digest it into adulthood carry a mutation that became common in populations with long histories of dairy farming — primarily Northern Europeans. For most of the world's population, 'lactose intolerance' is simply the biological norm."
- **Image:** `woman-feeling-sick-with-milk.avif` — woman holding a glass of milk while clutching her stomach

### Layout

- Two-column layout: text on the left, image on the right
- Text column contains heading, pull quote, and supporting paragraph
- Image column shows the woman with milk photo, styled with rounded corners
- Stacks vertically on mobile

---

## Section 4: Symptoms

**Component:** `components/Symptoms/Symptoms.tsx`
**Purpose:** Help visitors recognise symptoms they may have been ignoring or attributing to other causes.

### Content

- **Heading:** "Sound Familiar?"
- **7 symptom cards:**

| Symptom | Description |
|---------|-------------|
| Bloating | That uncomfortable fullness after a milkshake |
| Stomach cramps | Tightness or pain that hits after dairy |
| Gas | Your body's not-so-subtle way of complaining |
| Diarrhoea | The urgent dash you'd rather not talk about |
| Nausea | That queasy feeling after a creamy coffee |
| Rumbling | When your stomach joins the conversation |
| Fatigue | Feeling wiped out, and you can't figure out why |

- **Callout box:** "The tell-tale pattern: symptoms typically appear 30 minutes to 2 hours after consuming dairy."

### Layout

- Grid of symptom cards (responsive — wraps from multi-column to single column on mobile)
- Each card has a bold symptom name and a lighter description
- Callout box sits below the grid, visually distinct

---

## Section 5: HowItWorks

**Component:** `components/HowItWorks/HowItWorks.tsx`
**Purpose:** Demystify the quiz. Show it's quick, credible, and personalised. Reduce friction before the CTA.

### Content

- **Heading:** "Find Out in 2 Minutes"
- **3 steps with numbered circles:**

| Step | Title | Description |
|------|-------|-------------|
| 1 | Answer 11 quick questions | About your body, your habits, and how dairy treats you. |
| 2 | Scored against real research | Your answers are weighted using clinically-validated screening criteria. |
| 3 | Get personalised results | Insights tailored to your answers, with practical tips you can use today. |

### Layout

- Horizontal row of 3 step items (stacks vertically on mobile)
- Each step: numbered circle (teal outline or fill) → title → description
- A connector line runs behind the circles to show progression
- The connector line is a decorative `div` with `aria-hidden="true"`

---

## Section 6: DidYouKnow

**Component:** `components/DidYouKnow/DidYouKnow.tsx`
**Purpose:** Surprising facts that make visitors think differently about lactose intolerance. Keeps people scrolling and builds trust.

### Content

- **Heading:** "Things Most People Don't Know"
- **6 fact cards:**

| Stat | Text |
|------|------|
| **90%** | of East Asian adults are lactose intolerant — the highest rate globally |
| **~0g** | Hard cheeses like cheddar and parmesan contain almost no lactose |
| **20%** | of prescription medications use lactose as a filler ingredient |
| **Any age** | You can develop lactose intolerance at any point in your life, even if dairy's been fine until now |
| **10,000 yrs** | That's roughly when the lactase persistence mutation first appeared in humans |
| **Yoghurt** | Is often well-tolerated even by lactose intolerant people — the bacteria pre-digest the lactose |

### Layout

- Responsive grid of cards
- Cards at index 0, 3, and 4 get a `wide` class (span more columns)
- Each card: large bold stat at the top, descriptive text below
- Card styling uses `--bg-card` background with rounded corners

---

## Section 7: Spectrum

**Component:** `components/Spectrum/Spectrum.tsx`
**Purpose:** Counter the binary "intolerant or not" framing. Help people understand it's a spectrum — they can still enjoy some dairy.

### Content

- **Image:** `milk-party-overhead-shot.avif` — overhead family clinking milk glasses (warm, inclusive)
- **Heading:** "It's a Spectrum, Not a Switch"
- **Paragraph:** "Lactose intolerance isn't all-or-nothing. Most people with reduced lactase can still enjoy some dairy — the question is how much, and what kinds. Hard cheese? Usually fine. A bowl of ice cream? That's where it gets interesting."
- **Visual gradient bar:**
  - Labels: "Fully tolerant" (left) ↔ "Highly sensitive" (right)
  - A gradient bar (teal to a warmer tone) with a floating indicator arrow labelled "You might be here" positioned roughly in the middle
- **Note:** "Most people fall somewhere in the middle."

### Layout

- Centred single-column layout within max-width container
- Image at top, full width with rounded corners
- Heading and text below
- Gradient bar is a styled `div` with CSS gradient
- Indicator is positioned at roughly 60% from the left

---

## Section 8: QuizCTA

**Component:** `components/QuizCTA/QuizCTA.tsx`
**Purpose:** Final push to take the quiz. By this point the visitor has been educated and is primed.

### Content

- **Image:** `milk-cookie-man-unsure.avif` — man with cookie and milk looking skeptical
- **Heading:** "Ready to Find Out?"
- **Subtext:** "11 questions. 2 minutes. No data collected. No sign-up."
- **CTA Button:** "Take the Quiz" — links to `/quiz`

### Layout

- Two-column layout: image on the left, text + CTA on the right
- Stacks vertically on mobile (image above text)
- CTA button matches the hero button style (pill-shaped, teal)

---

## Section 9: Footer

**Component:** `components/Footer/Footer.tsx`
**Purpose:** Legal, attribution, and cultural responsibility.

### Content

**Main footer:**
- **Wordmark:** `Brand` SVG component (the "Can I Drink Milk?" text wordmark)
- **Disclaimer:** "This tool is for educational purposes only. It is not a medical diagnosis. If you suspect lactose intolerance, please consult your doctor."
- **Sources:** "Based on clinical research including Casellas et al. (2008) and data from USDA FoodData Central and Open Food Facts."
- **Credit:** "Built with AI at a university workshop on prototyping."

**Acknowledgement of Country (below main footer):**
- Aboriginal flag (animated SVG component) on the left
- Acknowledgement text: "We acknowledge the Traditional Owners and Custodians of the lands on which we live and work. We pay our respects to Elders past, present and emerging, and recognise their continuing connection to land, waters and culture. Sovereignty was never ceded. This always was, and always will be, Aboriginal land."
- Torres Strait Islander flag (animated SVG component) on the right

### Layout

- Main footer: centred column with wordmark, disclaimer, sources, credit stacked vertically
- Acknowledgement section: full-width bar below the main footer, three-column layout (flag | text | flag)
- Both flag components accept `width`, `numOfColumns`, `staggeredDelay`, and `billow` props for their wave animation

---

## Shared Design Patterns

### Buttons / CTAs
- Pill-shaped (border-radius 9999px)
- Teal background (`--accent`), dark text (`#1a1a1a`)
- Hover: lighter teal (`--accent-hover`), slight translateY(-1px), glow shadow
- Font weight 700, size `--text-lg`

### Section Spacing
- Each section has generous vertical padding (typically `--space-3xl` to `--space-4xl`)
- Content constrained to `--max-width` (1100px) with `--content-padding` (1.5rem) horizontal padding

### Card Styling
- Background: `--bg-card` (#2A2A2A)
- Border radius: `--radius-md` (12px) or `--radius-lg` (16px)
- No visible borders by default
- Subtle hover state where applicable

### Responsive Approach
- Mobile-first CSS
- Single breakpoint at `768px` for most components
- Two-column layouts stack to single column on mobile
- Fluid typography via `clamp()` on major headings

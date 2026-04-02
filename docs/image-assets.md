# Image Assets — Can I Drink Milk?

Base URL: `https://assets.canidrinkmilk.com/`

All images are AVIF format. Verified accessible 2 April 2026.

---

## Root Images

| File | URL | Size | Description |
|------|-----|------|-------------|
| `cheers-milkshake.avif` | `https://assets.canidrinkmilk.com/cheers-milkshake.avif` | 47 KB | Three women in white shirts clinking milkshakes/hot chocolates topped with marshmallows. Social, celebratory mood. Shot from above-waist level. Warm tones. |
| `milk-cookie-man-unsure.avif` | `https://assets.canidrinkmilk.com/milk-cookie-man-unsure.avif` | 113 KB | Red-haired man holding a cookie in one hand and a glass of milk in the other, pulling a skeptical/unsure face. Light grey background. Studio-style portrait. Playful and relatable. |
| `milk-party-overhead-shot.avif` | `https://assets.canidrinkmilk.com/milk-party-overhead-shot.avif` | 212 KB | Overhead shot of a family (adults and children) clinking glasses of milk together around a table with food. Warm, natural lighting. Candid feel — social gathering. |
| `milkman-hero.avif` | `https://assets.canidrinkmilk.com/milkman-hero.avif` | 165 KB | Older man in a striped apron looking shocked/overwhelmed, hands on cheeks, surrounded by hands holding out milk bottles and glasses from all sides. Blue studio background. Comic, exaggerated expression — perfect for a hero or humorous callout. |
| `woman-feeling-sick-with-milk.avif` | `https://assets.canidrinkmilk.com/woman-feeling-sick-with-milk.avif` | 51 KB | Woman with curly hair holding a glass of milk while clutching her stomach in discomfort. Pained expression. Natural indoor setting. Directly communicates "dairy makes me feel bad" — ideal for the symptoms or reframe section. |

---

## Cereal Series (`cereal/`)

A themed set of studio portraits — different women in pyjamas/sleepwear holding a milk bottle and/or bowl of cereal, each expressing a different emotion. Colourful pastel backgrounds (pink, yellow, blue) with cloud props. Same visual language across the set — designed to be used as a progression or to match different quiz results/moods.

| File | URL | Size | Emotion | Description |
|------|-----|------|---------|-------------|
| `cereal/cereal-milk-excited.avif` | `https://assets.canidrinkmilk.com/cereal/cereal-milk-excited.avif` | 120 KB | Excited / thrilled | Woman in purple pyjamas and pink sleep mask, mouth wide open in excitement, holding cereal bowl and milk bottle. Bright yellow background. High energy. |
| `cereal/cereal-milk-sad.avif` | `https://assets.canidrinkmilk.com/cereal/cereal-milk-sad.avif` | 79 KB | Sad / resigned | Woman with braids in grey star pyjamas and sleep mask, looking down sadly while holding milk bottle and cereal bowl. Pink background with cloud props. Quiet, deflated mood. |
| `cereal/cereal-milk-shocked.avif` | `https://assets.canidrinkmilk.com/cereal/cereal-milk-shocked.avif` | 169 KB | Shocked / surprised | Woman with curly hair in grey star pyjamas and sleep mask, eyes wide with surprise, holding milk bottle and cereal bowl. Blue background with cloud props. |
| `cereal/cereal-milk-slightly-unhappy.avif` | `https://assets.canidrinkmilk.com/cereal/cereal-milk-slightly-unhappy.avif` | 210 KB | Slightly unhappy / annoyed | Woman with hair rollers and green eye patches, looking mildly displeased while holding milk and cereal. Pink background with clouds. "Not thrilled about this" energy. |
| `cereal/cereal-milk-unsure.avif` | `https://assets.canidrinkmilk.com/cereal/cereal-milk-unsure.avif` | 101 KB | Unsure / thoughtful | Woman in bear-ear hat and grey sweater, pursing lips and touching chin in a "hmm" thinking pose, holding a milk bottle. Pink background with clouds. Contemplative. |
| `cereal/cereal-milk-very-sad.avif` | `https://assets.canidrinkmilk.com/cereal/cereal-milk-very-sad.avif` | 204 KB | Very sad / crying | Woman with curly hair and eye patches, eyes squeezed shut, mouth open as if crying/wailing, holding milk bottle and cereal. Grey star pyjamas. Pink background. Dramatic sadness. |

---

## Suggested Uses

### Landing Page
- **Hero**: `milkman-hero.avif` — the shocked milkman surrounded by milk is eye-catching and humorous, sets the playful tone
- **Reframe / Problem section**: `woman-feeling-sick-with-milk.avif` — directly illustrates the "dairy doesn't agree with me" experience
- **Social / community feel**: `cheers-milkshake.avif` or `milk-party-overhead-shot.avif` — good for sections about how common dairy consumption is
- **Quiz CTA**: `milk-cookie-man-unsure.avif` — the "should I or shouldn't I?" expression matches the quiz prompt

### Quiz Results (cereal series maps to result bands)
- **All clear (0-5)**: `cereal-milk-excited.avif` — thrilled, dairy is fine
- **Worth watching (6-12)**: `cereal-milk-unsure.avif` — thinking, maybe keep an eye on it
- **Likely (13-20)**: `cereal-milk-slightly-unhappy.avif` — not happy about it
- **Very likely (21-28)**: `cereal-milk-sad.avif` — resigned acceptance
- **Almost certain (29-34)**: `cereal-milk-very-sad.avif` — dramatic "no more milk for me"
- **Bonus**: `cereal-milk-shocked.avif` — could work for the reveal moment before showing results

---

## Technical Notes

- All images served from `assets.canidrinkmilk.com` (likely cloud storage / CDN)
- AVIF format — excellent compression, modern browser support
- Use `<img>` with Next.js `<Image>` component or standard `<img>` tags with the full URL
- Consider adding `loading="lazy"` for below-fold images
- Sizes range from 47 KB to 212 KB — well optimised for web

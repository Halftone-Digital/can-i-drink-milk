# Lactose Intolerance Self-Assessment Quiz

## Overview

An 11-question, client-side self-assessment quiz that helps people recognise whether they may be lactose intolerant. Everything runs in the browser — no data is collected or transmitted.

**Important:** This is a consumer-friendly adaptation, NOT a clinical diagnostic tool. It helps people notice patterns in their own experience, not diagnose them.

---

## Clinical Foundation

The quiz is inspired by (but adapted from) the clinically validated **Casellas et al. (2008)** five-item symptoms questionnaire for lactose malabsorption screening. The original clinical tool measured:

1. Diarrhoea
2. Abdominal cramping
3. Vomiting
4. Audible bowel sounds (borborygmi / stomach rumbling)
5. Flatulence or gas

The clinical version used a visual analogue scale (0–10) for each item, with a total score cutoff of 6.5 achieving sensitivity of 0.75 and specificity of 0.67 against the gold-standard hydrogen breath test.

Our quiz expands beyond the five clinical items to include pattern recognition and contextual factors.

---

## Design Principles

1. **Progressive disclosure** — Start with easy, non-intimidating questions. Build toward more specific ones.
2. **Pattern recognition over diagnosis** — Help people notice patterns, not diagnose them.
3. **Inclusive language** — No medical jargon. Plain, conversational language.
4. **Honest about limitations** — Results always recommend seeing a GP if the score suggests intolerance.
5. **Not too long** — 11 questions maximum. People abandon long quizzes.
6. **No personal data collection** — Everything runs client-side. Nothing stored or transmitted.

---

## Quiz Tone

Conversational, warm, slightly cheeky. Each question sets a specific scenario to help people recall real moments rather than answering in the abstract. Language avoids clinical or embarrassing terms — we describe how things feel, not what happens.

---

## Questions

### Section 1: Core Symptoms (highest weight, 0–4 points each)

These five questions map directly to clinically validated symptom indicators.

#### Q1 — Stomach rumbling (borborygmi)

> Picture this: you've just finished a big bowl of cereal with milk. Does your stomach get noisy or rumbly afterwards?

| Answer | Points |
|--------|--------|
| Nope, quiet as a mouse | 0 |
| Every now and then | 1 |
| Yeah, it happens fairly often | 2 |
| My stomach basically starts a conversation | 3 |
| Every. Single. Time. | 4 |

#### Q2 — Bloating / abdominal distension

> You're out with friends and someone orders a cheese platter and a round of milkshakes. After tucking in, does your stomach feel bloated or puffy?

| Answer | Points |
|--------|--------|
| Not at all, I feel fine | 0 |
| Occasionally, if I really overdo it | 1 |
| It happens more often than I'd like | 2 |
| Yeah, I usually feel like a balloon | 3 |
| I already know I'll regret it | 4 |

#### Q3 — Abdominal cramping / pain

> Think about the last time you had a couple of scoops of ice cream. Did your stomach feel crampy or tight afterwards?

| Answer | Points |
|--------|--------|
| Nope, just happy | 0 |
| Maybe once or twice ever | 1 |
| It happens sometimes | 2 |
| More often than not | 3 |
| Ice cream and I are not friends | 4 |

#### Q4 — Diarrhoea / urgency

> Be honest: after a big glass of milk or a creamy pasta, have you ever needed to make an urgent dash to the bathroom?

| Answer | Points |
|--------|--------|
| Never, no issues | 0 |
| It's happened once or twice | 1 |
| It happens sometimes | 2 |
| It's a fairly regular thing | 3 |
| I already know where the nearest bathroom is | 4 |

#### Q5 — Nausea

> After a flat white or a milk shake, do you ever get a queasy or 'off' feeling in your stomach?

| Answer | Points |
|--------|--------|
| Never | 0 |
| Very rarely | 1 |
| Sometimes | 2 |
| Quite often | 3 |
| Coffee shop drinks are a gamble for me | 4 |

---

### Section 2: Pattern Recognition (moderate weight)

These questions identify patterns characteristic of lactose intolerance specifically.

#### Q6 — Symptom onset timing

> When dairy doesn't agree with you, how quickly does your body let you know?

| Answer | Points | Note |
|--------|--------|------|
| Dairy doesn't bother me | 0 | |
| Pretty much straight away, within 30 minutes | 2 | |
| It creeps up on me, usually within a couple of hours | 3 | Most characteristic window for LI |
| Much later, like the next day | 1 | |
| Honestly, I've never paid attention to the timing | 1 | |

*The 30-minute to 2-hour window is the hallmark of lactose malabsorption.*

#### Q7 — Differential tolerance

> Does a slice of cheddar treat you differently to a glass of milk? Do some dairy foods seem fine while others cause trouble?

| Answer | Points | Note |
|--------|--------|------|
| They all seem about the same to me | 0 | |
| Now that you mention it, yeah, some are definitely worse | 2 | Strong indicator |
| I avoid dairy altogether so I can't really tell | 1 | |

*Lactose intolerant people typically handle hard cheese and yoghurt better than milk and ice cream because lactose content varies dramatically.*

#### Q8 — Elimination response

> Have you ever gone dairy-free for a while, even accidentally? Did you feel better?

| Answer | Points | Note |
|--------|--------|------|
| I've never really gone without dairy | 0 | |
| Actually yes, I did feel noticeably better | 3 | Strong practical indicator |
| I tried it but didn't notice much change | 0 | |
| I'm already avoiding dairy because I know it bothers me | 2 | |

---

### Section 3: Context and Background (lower weight)

#### Q9 — Daily dairy intake (CONTEXT ONLY — scores 0)

> How much dairy would you say you have on a typical day?

| Answer | Points | Context tag |
|--------|--------|-------------|
| None, I stay away from it | 0 | `none` (avoidant) |
| Just a splash, like milk in tea or coffee | 0 | `low` |
| A fair amount, a couple of serves across the day | 0 | `moderate` |
| A lot. Cereal, coffees, cheese, yoghurt, milkshakes, the works | 0 | `high` |

**This question does NOT contribute to the total score.** It contextualises the result messaging. Someone scoring high on symptoms with very low dairy intake is likely more sensitive. Someone with high intake and mild symptoms may have partial tolerance.

#### Q10 — Onset age

> Thinking back, was there a point in your life when dairy started causing you more trouble than it used to?

| Answer | Points | Note |
|--------|--------|------|
| I've always been this way, even as a kid | 1 | |
| It started in my teens | 2 | Primary LI typically develops from teens onward |
| It crept up on me as an adult | 2 | |
| It started after I was sick, had surgery, or changed medications | 1 | May indicate secondary/acquired LI |
| Dairy has never really caused me trouble | 0 | |

#### Q11 — Family history

> Last one. Has anyone in your family ever mentioned having trouble with dairy, or been told they're lactose intolerant?

| Answer | Points |
|--------|--------|
| Yes, at least one family member | 1 |
| Yes, all of my friends and family tell me all of the time | 1 |
| Not that I know of | 0 |
| I've never really asked | 0 |

*Lactase non-persistence is genetically determined, so family patterns are relevant.*

---

## Scoring System

**Maximum possible score: 34 points**

| Score Range | Band ID | Headline | Subtext |
|-------------|---------|----------|---------|
| 0–5 | `all-clear` | "Drink up!" | "Your body and dairy seem to be getting along just fine." |
| 6–12 | `worth-watching` | "Hmm, maybe keep an eye on that." | "There are a few signs that dairy might not be your best friend." |
| 13–20 | `likely` | "Yeah... it might be the milk." | "Your answers suggest a pretty good chance that lactose is causing you grief." |
| 21–28 | `very-likely` | "Your gut is trying to tell you something." | "Your symptoms line up strongly with lactose intolerance." |
| 29–34 | `almost-certain` | "You and milk need to have a serious talk." | "Everything points toward lactose intolerance. The good news? Now you know." |

---

## Result Screen Content

Each result band includes:

### 1. Headline + Subtext
Large and clear — the first thing they see.

### 2. Detail text (tailored per band)

- **All clear:** "Your symptoms don't point to lactose intolerance. If something still feels off, it's always worth chatting to your GP — there are other things that can cause similar symptoms."
- **Worth watching:** "You might have some sensitivity. Try keeping a simple food diary for a couple of weeks. Note when you have dairy and how you feel afterwards. Patterns will start to jump out."
- **Likely:** "There's a solid chance dairy is behind your symptoms. A food diary is a great first step, and your GP can run a hydrogen breath test if you want to know for sure. It's non-invasive and takes a couple of hours."
- **Very likely / Almost certain:** "Your answers are very consistent with lactose intolerance. We'd really recommend having a chat with your GP about a hydrogen breath test. It's the gold standard, it's painless, and it'll give you a clear answer. In the meantime, you don't have to give up everything — check out the tips below."

### 3. Dairy context message (based on Q9 intake + overall score)

| Intake | Score | Message |
|--------|-------|---------|
| `high` | Low (0–12) | "You're having plenty of dairy without issues — that's a great sign." |
| `low` | High (13+) | "Even small amounts of dairy seem to cause you trouble, which suggests you may be quite sensitive." |
| `none` | High (13+) | "You're already avoiding dairy, which might be why you feel OK day to day. Your other answers suggest your instinct to avoid it is probably right." |

### 4. Practical tips (shown for ALL result bands)

- Hard and aged cheeses (cheddar, parmesan, Swiss) are naturally very low in lactose
- Yoghurt is often better tolerated because the bacteria help break down lactose
- Lactase enzyme supplements (like Lacteeze) can help if taken before dairy
- Lactose intolerance is a spectrum, not binary — most people can tolerate some amount
- You can develop it at any age, even if dairy has been fine your whole life

### 5. Medical disclaimer (always shown)

"This quiz is for educational purposes only. It is not a medical diagnosis. If you suspect lactose intolerance, please consult your doctor."

### 6. Actions

- "Retake Quiz" button
- "Back to Home" link

---

## Quiz UX Requirements

- One question at a time (card-based, not a scrolling form)
- Progress indicator (Question X of 11, with a visual progress bar)
- Back button to change previous answers (hidden on Q1)
- Directional slide animation — forward slides right-to-left, back slides left-to-right
- Result appears with a fade-in
- "Retake Quiz" resets all state
- Mobile-first (large tap targets, readable text, min 48px touch targets)
- Accessible: focus management on question change, `aria-pressed` on selected options, `role="progressbar"`, keyboard navigable
- No form submission — everything calculated client-side with React `useReducer`

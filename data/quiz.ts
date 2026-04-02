// Quiz data: questions, scoring, result bands, and helper functions

export interface QuizOption {
  label: string;
  value: string;
  points: number;
}

export interface QuizQuestion {
  id: number;
  section: string;
  question: string;
  options: QuizOption[];
}

export interface ResultBand {
  id: string;
  minScore: number;
  maxScore: number;
  headline: string;
  subtext: string;
  detail: string;
}

export interface DairyContext {
  intake: string;
  scoreRange: "low" | "high";
  message: string;
}

// ---------------------------------------------------------------------------
// Questions
// ---------------------------------------------------------------------------

export const QUESTIONS: QuizQuestion[] = [
  // Section 1: Core Symptoms (highest weight, 0-4 points each)
  {
    id: 1,
    section: "Core Symptoms",
    question:
      "Picture this: you\u2019ve just finished a big bowl of cereal with milk. Does your stomach get noisy or rumbly afterwards?",
    options: [
      { label: "Nope, quiet as a mouse", value: "never", points: 0 },
      { label: "Every now and then", value: "rarely", points: 1 },
      { label: "Yeah, it happens fairly often", value: "often", points: 2 },
      {
        label: "My stomach basically starts a conversation",
        value: "very-often",
        points: 3,
      },
      { label: "Every. Single. Time.", value: "always", points: 4 },
    ],
  },
  {
    id: 2,
    section: "Core Symptoms",
    question:
      "You\u2019re out with friends and someone orders a cheese platter and a round of milkshakes. After tucking in, does your stomach feel bloated or puffy?",
    options: [
      { label: "Not at all, I feel fine", value: "never", points: 0 },
      {
        label: "Occasionally, if I really overdo it",
        value: "rarely",
        points: 1,
      },
      {
        label: "It happens more often than I\u2019d like",
        value: "often",
        points: 2,
      },
      {
        label: "Yeah, I usually feel like a balloon",
        value: "very-often",
        points: 3,
      },
      {
        label: "I already know I\u2019ll regret it",
        value: "always",
        points: 4,
      },
    ],
  },
  {
    id: 3,
    section: "Core Symptoms",
    question:
      "Think about the last time you had a couple of scoops of ice cream. Did your stomach feel crampy or tight afterwards?",
    options: [
      { label: "Nope, just happy", value: "never", points: 0 },
      { label: "Maybe once or twice ever", value: "rarely", points: 1 },
      { label: "It happens sometimes", value: "sometimes", points: 2 },
      { label: "More often than not", value: "often", points: 3 },
      {
        label: "Ice cream and I are not friends",
        value: "always",
        points: 4,
      },
    ],
  },
  {
    id: 4,
    section: "Core Symptoms",
    question:
      "Be honest: after a big glass of milk or a creamy pasta, have you ever needed to make an urgent dash to the bathroom?",
    options: [
      { label: "Never, no issues", value: "never", points: 0 },
      {
        label: "It\u2019s happened once or twice",
        value: "rarely",
        points: 1,
      },
      { label: "It happens sometimes", value: "sometimes", points: 2 },
      {
        label: "It\u2019s a fairly regular thing",
        value: "often",
        points: 3,
      },
      {
        label: "I already know where the nearest bathroom is",
        value: "always",
        points: 4,
      },
    ],
  },
  {
    id: 5,
    section: "Core Symptoms",
    question:
      "After a flat white or a milk shake, do you ever get a queasy or \u2018off\u2019 feeling in your stomach?",
    options: [
      { label: "Never", value: "never", points: 0 },
      { label: "Very rarely", value: "rarely", points: 1 },
      { label: "Sometimes", value: "sometimes", points: 2 },
      { label: "Quite often", value: "often", points: 3 },
      {
        label: "Coffee shop drinks are a gamble for me",
        value: "always",
        points: 4,
      },
    ],
  },

  // Section 2: Pattern Recognition (moderate weight)
  {
    id: 6,
    section: "Pattern Recognition",
    question:
      "When dairy doesn\u2019t agree with you, how quickly does your body let you know?",
    options: [
      {
        label: "Dairy doesn\u2019t bother me",
        value: "no-issue",
        points: 0,
      },
      {
        label: "Pretty much straight away, within 30 minutes",
        value: "immediate",
        points: 2,
      },
      {
        label: "It creeps up on me, usually within a couple of hours",
        value: "delayed",
        points: 3,
      },
      {
        label: "Much later, like the next day",
        value: "next-day",
        points: 1,
      },
      {
        label: "Honestly, I\u2019ve never paid attention to the timing",
        value: "unsure",
        points: 1,
      },
    ],
  },
  {
    id: 7,
    section: "Pattern Recognition",
    question:
      "Does a slice of cheddar treat you differently to a glass of milk? Do some dairy foods seem fine while others cause trouble?",
    options: [
      {
        label: "They all seem about the same to me",
        value: "same",
        points: 0,
      },
      {
        label: "Now that you mention it, yeah, some are definitely worse",
        value: "varies",
        points: 2,
      },
      {
        label: "I avoid dairy altogether so I can\u2019t really tell",
        value: "avoidant",
        points: 1,
      },
    ],
  },
  {
    id: 8,
    section: "Pattern Recognition",
    question:
      "Have you ever gone dairy-free for a while, even accidentally? Did you feel better?",
    options: [
      {
        label: "I\u2019ve never really gone without dairy",
        value: "never",
        points: 0,
      },
      {
        label: "Actually yes, I did feel noticeably better",
        value: "felt-better",
        points: 3,
      },
      {
        label: "I tried it but didn\u2019t notice much change",
        value: "no-change",
        points: 0,
      },
      {
        label: "I\u2019m already avoiding dairy because I know it bothers me",
        value: "already-avoiding",
        points: 2,
      },
    ],
  },

  // Section 3: Context (lower weight)
  {
    id: 9,
    section: "Context",
    question:
      "How much dairy would you say you have on a typical day?",
    options: [
      {
        label: "None, I stay away from it",
        value: "none",
        points: 0,
      },
      {
        label: "Just a splash, like milk in tea or coffee",
        value: "low",
        points: 0,
      },
      {
        label: "A fair amount, a couple of serves across the day",
        value: "moderate",
        points: 0,
      },
      {
        label: "A lot. Cereal, coffees, cheese, yoghurt, milkshakes, the works",
        value: "high",
        points: 0,
      },
    ],
  },
  {
    id: 10,
    section: "Context",
    question:
      "Thinking back, was there a point in your life when dairy started causing you more trouble than it used to?",
    options: [
      {
        label: "I\u2019ve always been this way, even as a kid",
        value: "always",
        points: 1,
      },
      { label: "It started in my teens", value: "teens", points: 2 },
      {
        label: "It crept up on me as an adult",
        value: "adult",
        points: 2,
      },
      {
        label: "It started after I was sick, had surgery, or changed medications",
        value: "secondary",
        points: 1,
      },
      {
        label: "Dairy has never really caused me trouble",
        value: "no-trouble",
        points: 0,
      },
    ],
  },
  {
    id: 11,
    section: "Context",
    question:
      "Last one. Has anyone in your family ever mentioned having trouble with dairy, or been told they\u2019re lactose intolerant?",
    options: [
      {
        label: "Yes, at least one family member",
        value: "yes",
        points: 1,
      },
      {
        label: "Yes, all of my friends and family tell me all of the time",
        value: "yes",
        points: 1,
      },
      { label: "Not that I know of", value: "no", points: 0 },
      { label: "I\u2019ve never really asked", value: "unsure", points: 0 },
    ],
  },
];

// ---------------------------------------------------------------------------
// Result bands (max 34 points)
// ---------------------------------------------------------------------------

export const RESULT_BANDS: ResultBand[] = [
  {
    id: "all-clear",
    minScore: 0,
    maxScore: 5,
    headline: "Drink up!",
    subtext:
      "Your body and dairy seem to be getting along just fine.",
    detail:
      "Your symptoms don\u2019t point to lactose intolerance. If something still feels off, it\u2019s always worth chatting to your GP \u2014 there are other things that can cause similar symptoms.",
  },
  {
    id: "worth-watching",
    minScore: 6,
    maxScore: 12,
    headline: "Hmm, maybe keep an eye on that.",
    subtext:
      "There are a few signs that dairy might not be your best friend.",
    detail:
      "You might have some sensitivity. Try keeping a simple food diary for a couple of weeks. Note when you have dairy and how you feel afterwards. Patterns will start to jump out.",
  },
  {
    id: "likely",
    minScore: 13,
    maxScore: 20,
    headline: "Yeah\u2026 it might be the milk.",
    subtext:
      "Your answers suggest a pretty good chance that lactose is causing you grief.",
    detail:
      "There\u2019s a solid chance dairy is behind your symptoms. A food diary is a great first step, and your GP can run a hydrogen breath test if you want to know for sure. It\u2019s non-invasive and takes a couple of hours.",
  },
  {
    id: "very-likely",
    minScore: 21,
    maxScore: 28,
    headline: "Your gut is trying to tell you something.",
    subtext:
      "Your symptoms line up strongly with lactose intolerance.",
    detail:
      "Your answers are very consistent with lactose intolerance. We\u2019d really recommend having a chat with your GP about a hydrogen breath test. It\u2019s the gold standard, it\u2019s painless, and it\u2019ll give you a clear answer. In the meantime, you don\u2019t have to give up everything \u2014 check out the tips below.",
  },
  {
    id: "almost-certain",
    minScore: 29,
    maxScore: 34,
    headline: "You and milk need to have a serious talk.",
    subtext:
      "Everything points toward lactose intolerance. The good news? Now you know.",
    detail:
      "Your answers are very consistent with lactose intolerance. We\u2019d really recommend having a chat with your GP about a hydrogen breath test. It\u2019s the gold standard, it\u2019s painless, and it\u2019ll give you a clear answer. In the meantime, you don\u2019t have to give up everything \u2014 check out the tips below.",
  },
];

// ---------------------------------------------------------------------------
// Practical tips (shown on all result screens)
// ---------------------------------------------------------------------------

export const PRACTICAL_TIPS: string[] = [
  "Hard and aged cheeses (cheddar, parmesan, Swiss) are naturally very low in lactose",
  "Yoghurt is often better tolerated because the bacteria help break down lactose",
  "Lactase enzyme supplements (like Lacteeze) can help if taken before dairy",
  "Lactose intolerance is a spectrum, not binary \u2014 most people can tolerate some amount",
  "You can develop it at any age, even if dairy has been fine your whole life",
];

// ---------------------------------------------------------------------------
// Dairy-context messages (based on Q9 intake + overall score)
// ---------------------------------------------------------------------------

export const DAIRY_CONTEXT_MESSAGES: DairyContext[] = [
  {
    intake: "high",
    scoreRange: "low",
    message:
      "You\u2019re having plenty of dairy without issues \u2014 that\u2019s a great sign.",
  },
  {
    intake: "low",
    scoreRange: "high",
    message:
      "Even small amounts of dairy seem to cause you trouble, which suggests you may be quite sensitive.",
  },
  {
    intake: "none",
    scoreRange: "high",
    message:
      "You\u2019re already avoiding dairy, which might be why you feel OK day to day. Your other answers suggest your instinct to avoid it is probably right.",
  },
];

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

export function getResultBand(score: number): ResultBand {
  const band = RESULT_BANDS.find(
    (b) => score >= b.minScore && score <= b.maxScore
  );
  if (!band) {
    // Clamp to the nearest band if score is somehow out of range
    if (score < 0) return RESULT_BANDS[0];
    return RESULT_BANDS[RESULT_BANDS.length - 1];
  }
  return band;
}

export function getDairyContextMessage(
  intake: string,
  score: number
): string | null {
  const scoreRange: "low" | "high" = score <= 12 ? "low" : "high";
  const match = DAIRY_CONTEXT_MESSAGES.find(
    (ctx) => ctx.intake === intake && ctx.scoreRange === scoreRange
  );
  return match?.message ?? null;
}

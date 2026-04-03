import styles from "./DidYouKnow.module.css";

const facts = [
  {
    stat: "90%",
    text: "of East Asian adults are lactose intolerant — the highest rate globally",
  },
  {
    stat: "~0g",
    text: "Hard cheeses like cheddar and parmesan contain almost no lactose",
  },
  {
    stat: "20%",
    text: "of prescription medications use lactose as a filler ingredient",
  },
  {
    stat: "Any age",
    text: "You can develop lactose intolerance at any point in your life, even if dairy\u2019s been fine until now",
  },
  {
    stat: "10,000 yrs",
    text: "That\u2019s roughly when the lactase persistence mutation first appeared in humans",
  },
  {
    stat: "Yoghurt",
    text: "Is often well-tolerated even by lactose intolerant people — the bacteria pre-digest the lactose",
  },
];

export default function DidYouKnow() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Things Most People Don&rsquo;t Know</h2>
        <div className={styles.grid}>
          {facts.map((fact, i) => (
            <div
              key={i}
              className={`${styles.card} ${i === 0 || i === 3 || i === 4 ? styles.wide : ""}`}
            >
              <p className={styles.stat}>{fact.stat}</p>
              <p className={styles.text}>{fact.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

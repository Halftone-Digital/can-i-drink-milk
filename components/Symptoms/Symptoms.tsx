import styles from "./Symptoms.module.css";

const symptoms = [
  { name: "Bloating", desc: "That uncomfortable fullness after a milkshake" },
  { name: "Stomach cramps", desc: "Tightness or pain that hits after dairy" },
  { name: "Gas", desc: "Your body's not-so-subtle way of complaining" },
  { name: "Diarrhoea", desc: "The urgent dash you'd rather not talk about" },
  { name: "Nausea", desc: "That queasy feeling after a creamy coffee" },
  { name: "Rumbling", desc: "When your stomach joins the conversation" },
  { name: "Fatigue", desc: "Feeling wiped out, and you can't figure out why" },
];

export default function Symptoms() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Sound Familiar?</h2>
        <div className={styles.grid}>
          {symptoms.map((s) => (
            <span key={s.name} className={styles.pill}>
              {s.name}
            </span>
          ))}
        </div>
        <div className={styles.callout}>
          <span className={styles.calloutStrong}>The tell-tale pattern:</span>{" "}
          symptoms typically appear 30&nbsp;minutes to 2&nbsp;hours after
          consuming dairy.
        </div>
      </div>
    </section>
  );
}

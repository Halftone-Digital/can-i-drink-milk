import styles from "./Symptoms.module.css";

const symptoms = [
  { name: "Bloating", description: "That uncomfortable fullness after a milkshake" },
  { name: "Stomach cramps", description: "Tightness or pain that hits after dairy" },
  { name: "Gas", description: "Your body's not-so-subtle way of complaining" },
  { name: "Diarrhoea", description: "The urgent dash you'd rather not talk about" },
  { name: "Nausea", description: "That queasy feeling after a creamy coffee" },
  { name: "Rumbling", description: "When your stomach joins the conversation" },
  { name: "Fatigue", description: "Feeling wiped out, and you can't figure out why" },
];

export default function Symptoms() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Sound Familiar?</h2>
        <div className={styles.grid}>
          {symptoms.map((symptom, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.name}>{symptom.name}</h3>
              <p className={styles.description}>{symptom.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.callout}>
          <p>
            The tell-tale pattern: symptoms typically appear 30&nbsp;minutes to
            2&nbsp;hours after consuming dairy.
          </p>
        </div>
      </div>
    </section>
  );
}

import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "1",
    title: "Answer 11 quick questions",
    description: "About your body, your habits, and how dairy treats you.",
  },
  {
    number: "2",
    title: "Scored against real research",
    description: "Your answers are weighted using clinically-validated screening criteria.",
  },
  {
    number: "3",
    title: "Get personalised results",
    description: "Insights tailored to your answers, with practical tips you can use today.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Find Out in 2&nbsp;Minutes</h2>

        <div className={styles.stepsWrapper}>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <div key={i} className={styles.step}>
                <div className={styles.circle}>
                  <span>{step.number}</span>
                </div>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.description}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

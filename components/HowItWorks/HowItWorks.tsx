import styles from "./HowItWorks.module.css";

const steps = [
  {
    num: 1,
    title: "Answer 11 quick questions",
    desc: "About your body, your habits, and how dairy treats you.",
  },
  {
    num: 2,
    title: "Scored against real research",
    desc: "Your answers are weighted using clinically-validated screening criteria.",
  },
  {
    num: 3,
    title: "Get personalised results",
    desc: "Insights tailored to your answers, with practical tips you can use today.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Find Out in 2 Minutes</h2>
        <div className={styles.steps}>
          <div className={styles.connector} aria-hidden="true" />
          {steps.map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.circle}>{step.num}</div>
              <div className={styles.stepTitle}>{step.title}</div>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

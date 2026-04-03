import styles from "./StatsStrip.module.css";

const stats = [
  { number: "68%", label: "of the world's adults have reduced ability to digest lactose" },
  { number: "5B+", label: "people affected globally" },
  { number: "90%", label: "of East Asian adults are lactose intolerant" },
];

export default function StatsStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.stat}>
            <span className={styles.number}>{stat.number}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

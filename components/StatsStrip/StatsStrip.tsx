import styles from "./StatsStrip.module.css";

const stats = [
  { number: "68%", label: "of the world's adults have reduced ability to digest lactose" },
  { number: "5B+", label: "people affected globally" },
  { number: "90%", label: "of East Asian adults are lactose intolerant" },
];

export default function StatsStrip() {
  return (
    <section className={styles.strip}>
      <div className={styles.container}>
        {stats.map((stat) => (
          <div key={stat.number} className={styles.stat}>
            <div className={styles.number}>{stat.number}</div>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

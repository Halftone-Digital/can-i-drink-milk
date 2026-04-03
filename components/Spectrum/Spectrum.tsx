import Image from "next/image";
import styles from "./Spectrum.module.css";

export default function Spectrum() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="https://assets.canidrinkmilk.com/milk-party-overhead-shot.avif"
            alt="Overhead shot of a family clinking glasses of milk together around a table"
            width={800}
            height={534}
            className={styles.image}
          />
        </div>

        <h2 className={styles.heading}>
          It&rsquo;s a Spectrum, Not a Switch
        </h2>

        <p className={styles.paragraph}>
          Lactose intolerance isn&rsquo;t all-or-nothing. Most people with
          reduced lactase can still enjoy some dairy &mdash; the question is how
          much, and what kinds. Hard cheese? Usually fine. A bowl of ice cream?
          That&rsquo;s where it gets interesting.
        </p>

        <div className={styles.barWrapper}>
          <div className={styles.labels}>
            <span className={styles.label}>Fully tolerant</span>
            <span className={styles.label}>Highly sensitive</span>
          </div>
          <div className={styles.bar}>
            <div className={styles.indicator}>
              <span className={styles.indicatorLabel}>You might be here</span>
              <span className={styles.indicatorTriangle} aria-hidden="true" />
            </div>
          </div>
        </div>

        <p className={styles.note}>
          Most people fall somewhere in the middle.
        </p>
      </div>
    </section>
  );
}

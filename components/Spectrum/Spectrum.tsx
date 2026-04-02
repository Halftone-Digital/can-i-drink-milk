import Image from "next/image";
import styles from "./Spectrum.module.css";

export default function Spectrum() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Image
          className={styles.image}
          src="https://assets.canidrinkmilk.com/milk-party-overhead-shot.avif"
          alt="Family clinking glasses of milk"
          width={1100}
          height={600}
        />
        <h2 className={styles.heading}>
          It&rsquo;s a Spectrum, Not a Switch
        </h2>
        <p className={styles.body}>
          Lactose intolerance isn&rsquo;t all-or-nothing. Most people with
          reduced lactase can still enjoy some dairy &mdash; the question is how
          much, and what kinds. Hard cheese? Usually fine. A bowl of ice cream?
          That&rsquo;s where it gets interesting.
        </p>
        <div className={styles.barWrapper}>
          <div className={styles.barLabels}>
            <span>Fully tolerant</span>
            <span>Highly sensitive</span>
          </div>
          <div className={styles.bar}>
            <div className={styles.indicator} aria-hidden="true">
              <span className={styles.indicatorLabel}>You might be here</span>
              <div className={styles.indicatorArrow} />
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

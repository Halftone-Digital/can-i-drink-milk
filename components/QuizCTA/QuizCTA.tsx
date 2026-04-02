import Link from "next/link";
import Image from "next/image";
import styles from "./QuizCTA.module.css";

export default function QuizCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src="https://assets.canidrinkmilk.com/milk-cookie-man-unsure.avif"
            alt="Man unsure about drinking milk"
            width={500}
            height={600}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading}>Ready to Find Out?</h2>
          <p className={styles.subtext}>
            11 questions. 2 minutes. No data collected. No sign-up.
          </p>
          <Link href="/quiz" className={styles.cta}>
            Take the Quiz
          </Link>
        </div>
      </div>
    </section>
  );
}

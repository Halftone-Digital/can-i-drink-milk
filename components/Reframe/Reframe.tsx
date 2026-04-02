import Image from "next/image";
import styles from "./Reframe.module.css";

export default function Reframe() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.heading}>
            It&rsquo;s Not a Disease.
            <br />
            It&rsquo;s Biology.
          </h2>
          <blockquote className={styles.quote}>
            Lactase persistence &mdash; the ability to digest milk as an adult
            &mdash; is actually the genetic mutation. Not the other way around.
          </blockquote>
          <p className={styles.body}>
            Most mammals lose the ability to digest lactose after weaning. Humans
            who can digest it into adulthood carry a mutation that became common
            in populations with long histories of dairy farming &mdash; primarily
            Northern Europeans. For most of the world&rsquo;s population,
            &ldquo;lactose intolerance&rdquo; is simply the biological norm.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src="https://assets.canidrinkmilk.com/woman-feeling-sick-with-milk.avif"
            alt="Woman uncomfortable after drinking milk"
            width={500}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}

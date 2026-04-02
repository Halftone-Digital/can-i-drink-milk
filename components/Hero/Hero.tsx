import Link from "next/link";
import { ChevronDown } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import HeroImageColumns from "./HeroImageColumns";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <HeroImageColumns />
      <div className={styles.content}>
        <BrandMark className={styles.brandmark} aria-hidden="true" />
        <h1 className={styles.headline}>Can I Drink Milk?</h1>
        <p className={styles.subheadline}>
          Most of the world can&rsquo;t. Let&rsquo;s find out about you.
        </p>
        <Link href="/quiz" className={styles.cta}>
          Take the Quiz
        </Link>
      </div>
      <div className={styles.scrollIndicator} aria-hidden="true">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}

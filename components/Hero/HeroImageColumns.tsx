"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import styles from "./HeroImageColumns.module.css";

const CDN = "https://assets.canidrinkmilk.com";

const columns = [
  [
    { src: `${CDN}/milkman-hero.avif`, alt: "Shocked milkman surrounded by milk bottles" },
    { src: `${CDN}/cereal/cereal-milk-shocked.avif`, alt: "Woman shocked holding cereal and milk" },
  ],
  [
    { src: `${CDN}/cheers-milkshake.avif`, alt: "Friends clinking milkshakes" },
    { src: `${CDN}/woman-feeling-sick-with-milk.avif`, alt: "Woman uncomfortable after drinking milk" },
  ],
  [
    { src: `${CDN}/milk-cookie-man-unsure.avif`, alt: "Man unsure about drinking milk" },
    { src: `${CDN}/cereal/cereal-milk-excited.avif`, alt: "Woman excited holding cereal and milk" },
  ],
  [
    { src: `${CDN}/milk-party-overhead-shot.avif`, alt: "Family clinking glasses of milk" },
    { src: `${CDN}/cereal/cereal-milk-unsure.avif`, alt: "Woman unsure holding milk" },
  ],
];

const columnClasses = [
  styles.columnLeftOuter,
  styles.columnLeftInner,
  styles.columnRightInner,
  styles.columnRightOuter,
];

export default function HeroImageColumns() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={styles.columns} aria-hidden="true">
      {columns.map((images, colIdx) => (
        <div
          key={colIdx}
          className={`${styles.column} ${columnClasses[colIdx]}`}
        >
          {images.map((img, imgIdx) => {
            const delay = colIdx * 0.1 + imgIdx * 0.1;
            return (
              <motion.div
                key={imgIdx}
                className={styles.imageCard}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, scale: 0.9, filter: "blur(8px)" }
                }
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay, ease: "easeOut" }}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={400}
                  sizes="20vw"
                />
              </motion.div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

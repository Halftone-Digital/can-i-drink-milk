"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import styles from "./page.module.css";

interface ResourceCardProps {
  title: string;
  description: string;
  htmlContent: string;
  index?: number;
}

export default function ResourceCard({
  title,
  description,
  htmlContent,
  index = 0,
}: ResourceCardProps) {
  const [open, setOpen] = useState(false);

  // htmlContent is generated at build time from our own local markdown files
  // in /docs — it is trusted, static content, not user-supplied input.
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <button
        className={styles.cardHeader}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className={styles.cardInfo}>
          <span className={styles.cardTitle}>{title}</span>
          <span className={styles.cardDescription}>{description}</span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={styles.chevronWrap}
        >
          <ChevronDown size={20} className={styles.chevron} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                opacity: { duration: 0.25, delay: 0.1 },
                y: { duration: 0.3, delay: 0.05, ease: [0.16, 1, 0.3, 1] },
              }}
            >
              <div className={styles.cardContent}>
                <div
                  className={styles.prose}
                  // Safe: content is generated at build time from local /docs markdown
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

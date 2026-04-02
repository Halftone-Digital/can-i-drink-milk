"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./page.module.css";

interface ResourceCardProps {
  title: string;
  description: string;
  htmlContent: string;
}

export default function ResourceCard({
  title,
  description,
  htmlContent,
}: ResourceCardProps) {
  const [open, setOpen] = useState(false);

  // htmlContent is generated at build time from our own local markdown files
  // in /docs — it is trusted, static content, not user-supplied input.
  return (
    <div className={styles.card}>
      <button
        className={styles.cardHeader}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className={styles.cardInfo}>
          <span className={styles.cardTitle}>{title}</span>
          <span className={styles.cardDescription}>{description}</span>
        </div>
        <ChevronDown
          size={20}
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
        />
      </button>
      {open && (
        <div className={styles.cardContent}>
          <div
            className={styles.prose}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      )}
    </div>
  );
}

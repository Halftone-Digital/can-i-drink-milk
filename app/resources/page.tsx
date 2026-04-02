import { readFile } from "fs/promises";
import path from "path";
import { marked } from "marked";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import ResourceCard from "./ResourceCard";
import styles from "./page.module.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources — Can I Drink Milk?",
  description:
    "Workshop docs: project spec, quiz spec, landing page design, getting started guide, and image asset inventory.",
};

const docs = [
  {
    file: "getting-started.md",
    title: "Getting Started",
    description:
      "Prerequisites, project setup, dependencies, and deployment guide.",
  },
  {
    file: "project-spec.md",
    title: "Project Specification",
    description:
      "Tech stack, design system, file structure, pages, and accessibility requirements.",
  },
  {
    file: "landing-page-design.md",
    title: "Landing Page Design",
    description:
      "Section-by-section blueprint — content, layout, and component names.",
  },
  {
    file: "quiz-spec.md",
    title: "Quiz Specification",
    description:
      "All 11 questions, scoring system, result bands, and UX requirements.",
  },
  {
    file: "image-assets.md",
    title: "Image Assets",
    description: "Full image inventory with URLs, sizes, and suggested usage.",
  },
];

export default async function ResourcesPage() {
  const docsDir = path.join(process.cwd(), "docs");

  const items = await Promise.all(
    docs.map(async (doc) => {
      const raw = await readFile(path.join(docsDir, doc.file), "utf-8");
      const html = await marked(raw);
      return { ...doc, html };
    })
  );

  return (
    <>
      <main className={styles.page}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            Back to home
          </Link>
          <h1 className={styles.heading}>Workshop Resources</h1>
          <p className={styles.subheading}>
            Everything you need to build this project from scratch. Tap a doc to
            expand it.
          </p>
          <div className={styles.grid}>
            {items.map((item) => (
              <ResourceCard
                key={item.file}
                title={item.title}
                description={item.description}
                htmlContent={item.html}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

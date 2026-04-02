"use client";

import { useReducer, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  QUESTIONS,
  PRACTICAL_TIPS,
  getResultBand,
  getDairyContextMessage,
} from "@/data/quiz";
import styles from "./QuizClient.module.css";

const CDN = "https://assets.canidrinkmilk.com";

const BAND_IMAGES: Record<string, string> = {
  "all-clear": `${CDN}/cereal/cereal-milk-excited.avif`,
  "worth-watching": `${CDN}/cereal/cereal-milk-unsure.avif`,
  likely: `${CDN}/cereal/cereal-milk-slightly-unhappy.avif`,
  "very-likely": `${CDN}/cereal/cereal-milk-sad.avif`,
  "almost-certain": `${CDN}/cereal/cereal-milk-very-sad.avif`,
};

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

interface QuizState {
  step: number; // 0–10 = questions, 11 = results
  answers: (number | null)[]; // index = question index, value = selected option index
  direction: 1 | -1;
}

type QuizAction =
  | { type: "SELECT_OPTION"; optionIndex: number }
  | { type: "NEXT" }
  | { type: "BACK" }
  | { type: "RESET" };

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "SELECT_OPTION":
      const newAnswers = [...state.answers];
      newAnswers[state.step] = action.optionIndex;
      return { ...state, answers: newAnswers };
    case "NEXT":
      return { ...state, step: state.step + 1, direction: 1 };
    case "BACK":
      return { ...state, step: state.step - 1, direction: -1 };
    case "RESET":
      return initialState();
    default:
      return state;
  }
}

function initialState(): QuizState {
  return {
    step: 0,
    answers: new Array(QUESTIONS.length).fill(null),
    direction: 1,
  };
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function QuizClient() {
  const [state, dispatch] = useReducer(quizReducer, undefined, initialState);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { step, answers, direction } = state;
  const isResults = step >= QUESTIONS.length;
  const currentQuestion = !isResults ? QUESTIONS[step] : null;
  const selectedOption = !isResults ? answers[step] : null;

  // Focus heading on step change
  useEffect(() => {
    headingRef.current?.focus();
  }, [step]);

  // Calculate score and dairy intake
  const score = answers.reduce<number>((total, optIdx, qIdx) => {
    if (optIdx === null) return total;
    return total + QUESTIONS[qIdx].options[optIdx].points;
  }, 0);

  const dairyIntake =
    answers[8] !== null ? QUESTIONS[8].options[answers[8]].value : "moderate";

  const band = getResultBand(score);
  const dairyMessage = getDairyContextMessage(dairyIntake, score);

  // Animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  if (isResults) {
    return (
      <main className={styles.quiz}>
        <div className={styles.container}>
          <motion.div
            className={styles.results}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              className={styles.resultImage}
              src={BAND_IMAGES[band.id]}
              alt=""
              width={300}
              height={400}
            />
            <h1 ref={headingRef} tabIndex={-1} className={styles.resultHeadline}>
              {band.headline}
            </h1>
            <p className={styles.resultSubtext}>{band.subtext}</p>
            <p className={styles.resultDetail}>{band.detail}</p>

            {dairyMessage && (
              <div className={styles.dairyContext}>
                <p>{dairyMessage}</p>
              </div>
            )}

            <div className={styles.tipsSection}>
              <h2 className={styles.tipsHeading}>Practical tips</h2>
              <ul className={styles.tipsList}>
                {PRACTICAL_TIPS.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>

            <p className={styles.disclaimer}>
              This quiz is for educational purposes only. It is not a medical
              diagnosis. If you suspect lactose intolerance, please consult your
              doctor.
            </p>

            <div className={styles.resultActions}>
              <button
                className={styles.retakeButton}
                onClick={() => dispatch({ type: "RESET" })}
              >
                Retake Quiz
              </button>
              <Link href="/" className={styles.homeLink}>
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  const progress = ((step + 1) / QUESTIONS.length) * 100;
  const isLastQuestion = step === QUESTIONS.length - 1;

  return (
    <main className={styles.quiz}>
      <div className={styles.container}>
        {/* Progress */}
        <div className={styles.progressWrapper}>
          <span className={styles.progressLabel}>
            Question {step + 1} of {QUESTIONS.length}
          </span>
          <div
            className={styles.progressBar}
            role="progressbar"
            aria-valuenow={step + 1}
            aria-valuemin={1}
            aria-valuemax={QUESTIONS.length}
          >
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            className={styles.questionCard}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <span className={styles.sectionLabel}>
              {currentQuestion!.section}
            </span>
            <h2
              ref={headingRef}
              tabIndex={-1}
              className={styles.questionText}
            >
              {currentQuestion!.question}
            </h2>

            <div className={styles.options} role="group" aria-label="Answer options">
              {currentQuestion!.options.map((opt, idx) => (
                <button
                  key={idx}
                  className={`${styles.option} ${
                    selectedOption === idx ? styles.optionSelected : ""
                  }`}
                  aria-pressed={selectedOption === idx}
                  onClick={() =>
                    dispatch({ type: "SELECT_OPTION", optionIndex: idx })
                  }
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className={styles.nav}>
          {step > 0 ? (
            <button
              className={styles.backButton}
              onClick={() => dispatch({ type: "BACK" })}
            >
              Back
            </button>
          ) : (
            <div className={styles.navSpacer} />
          )}
          <button
            className={styles.nextButton}
            disabled={selectedOption === null}
            onClick={() => dispatch({ type: "NEXT" })}
          >
            {isLastQuestion ? "See My Results" : "Next"}
          </button>
        </div>
      </div>
    </main>
  );
}

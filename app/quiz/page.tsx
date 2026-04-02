import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "Take the Quiz — Can I Drink Milk?",
  description:
    "A quick 11-question self-assessment to help you understand whether you might be lactose intolerant. No data collected.",
};

export default function QuizPage() {
  return <QuizClient />;
}

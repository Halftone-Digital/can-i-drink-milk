import Hero from "@/components/Hero/Hero";
import StatsStrip from "@/components/StatsStrip/StatsStrip";
import Reframe from "@/components/Reframe/Reframe";
import Symptoms from "@/components/Symptoms/Symptoms";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import DidYouKnow from "@/components/DidYouKnow/DidYouKnow";
import Spectrum from "@/components/Spectrum/Spectrum";
import QuizCTA from "@/components/QuizCTA/QuizCTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Reframe />
      <Symptoms />
      <HowItWorks />
      <DidYouKnow />
      <Spectrum />
      <QuizCTA />
      <Footer />
    </>
  );
}

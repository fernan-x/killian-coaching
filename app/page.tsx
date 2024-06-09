import HeroSection from "@/components/section/1-hero-section";
import ProblemSolutionSection from "@/components/section/2-problem-solution-section";
import KeyBenefitSection from "@/components/section/3-key-benefit-section";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <ProblemSolutionSection />
      <KeyBenefitSection />
    </div>
  );
}

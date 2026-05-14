import HeroSectionV2 from "@/legacy/components/section/1-hero-section-v2";
import ProblemSolutionSection from "@/legacy/components/section/2-problem-solution-section";
import KeyBenefitSection from "@/legacy/components/section/3-key-benefit-section";
import ReviewSection from "@/legacy/components/section/5-reviews";
import PricingSection from "@/legacy/components/section/6-pricing-section";
import FAQSection from "@/legacy/components/section/7-faq-section";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <HeroSectionV2 />
      <ProblemSolutionSection />
      <KeyBenefitSection />
      <ReviewSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
}

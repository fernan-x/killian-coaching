import HeroSectionV2 from "@/components/section/1-hero-section-v2";
import ProblemSolutionSection from "@/components/section/2-problem-solution-section";
import KeyBenefitSection from "@/components/section/3-key-benefit-section";
import ReviewSection from "@/components/section/5-reviews";
import PricingSection from "@/components/section/6-pricing-section";
import FAQSection from "@/components/section/7-faq-section";

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

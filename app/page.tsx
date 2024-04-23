import HeroSection from "@/components/section/hero-section";
import KeyBenefitSection from "@/components/section/key-benefit-section";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <KeyBenefitSection />
    </div>
  );
}

import HeroPicture from "@/assets/images/hero-v2.webp";
import Image from "next/image";
import { H1, Paragraph } from "../ui/text";
import { FlipWords } from "../common/flip-words";
import CTAButton from "../ui/cta-button";

const HeroSectionV2 = () => {
  return (
    <div className="hero-section min-h-[90vh] w-full flex items-center justify-center flex-col lg:flex-row gap-10 px-6 py-24 lg:px-20">
      {/* LEFT : TEXT CONTENT */}
      <div className="flex flex-col gap-6 justify-center w-full lg:w-1/2">
        <H1 className="uppercase leading-tight">
          Atteignez vos objectifs physiques… chez vous
        </H1>

        <Paragraph className="text-xl">
          Coaching sportif à domicile sur Nantes et ses alentours, avec un coach{" "}
          <FlipWords
            duration={2500}
            words={[
              "certifié et diplômé d'État",
              "qui s'adapte à votre rythme",
              "affilié au service à la personne",
            ]}
          />
        </Paragraph>

        {/* CTA + reassurance */}
        <div className="flex flex-col gap-3">
          <CTAButton className="w-fit">
            Réserver une séance gratuite
          </CTAButton>
          <p className="text-sm text-muted-foreground">
            Séance découverte sans engagement · Bilan personnalisé de 30 minutes.
          </p>
        </div>

        {/* Social proof */}
        <div className="mt-4 flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-lg" aria-hidden="true">
              ⭐⭐⭐⭐⭐
            </span>
            <span className="text-muted-foreground">
              Recommandé par les clients accompagnés à domicile
            </span>
          </div>
          <p className="italic text-muted-foreground">
            "J’ai retrouvé de la mobilité et surtout confiance en moi."
          </p>
        </div>

        {/* Location / cible */}
        <p className="mt-2 text-sm text-muted-foreground">
          📍 Interventions à domicile sur Nantes, Carquefou et les communes
          voisines.
        </p>
      </div>

      {/* RIGHT : IMAGE */}
      <div className="relative w-full lg:w-1/2 h-[380px] lg:h-[480px]">
        <Image
          src={HeroPicture.src}
          fill
          priority
          alt="Killian, coach sportif, accompagne une cliente pendant un exercice à domicile"
          className="object-cover object-center rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default HeroSectionV2;

import HeroPicture from "@/assets/images/coach-plank-outdoor.jpeg";
import Image from 'next/image'
import { H1, Paragraph } from "../ui/text";
import MailToButton from "../ui/mail-to-button";
import { FlipWords } from "../common/flip-words";
import CTAButton from "../ui/cta-button";

const HeroSection = () => {

  return (
    <div
      className="hero-section h-[90vh] relative"
    >
      <div className="absolute h-full w-full">
        <Image
          src={HeroPicture.src}
          fill
          priority
          alt="Killian motivating a customer"
          className="object-cover md:translate-x-28"
        />
      </div>
      <div className="absolute h-full w-full bg-linear-to-r from-black md:from-10% md:to-50%"/>
      <div className="absolute flex flex-col gap-9 justify-center h-full w-full px-6 py-12 lg:w-1/2 lg:p-20">
        <H1 contrast className='uppercase'>Atteignez vos objectifs physiques</H1>
        <Paragraph contrast className='text-xl'>
          Avec un coach à domicile
          <FlipWords
            duration={2500}
            words={['certifié et diplômé d\'État', 'selon vos horaires et à votre rythme', 'affilié service à la personne']}/>
        </Paragraph>
        <CTAButton className='w-fit'>Réserver une séance d&apos;essai</CTAButton>
      </div>
    </div>
  );
};

export default HeroSection;

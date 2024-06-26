import HeroPicture from "@/assets/images/coach-plank-outdoor.jpeg";
import Image from 'next/image'
import { H1, Paragraph } from "../ui/text";
import MailToButton from "../ui/mail-to-button";
import { FlipWords } from "../common/flip-words";

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
      <div className="absolute h-full w-full bg-gradient-to-r from-black md:from-10%"/>
      <div className="absolute flex flex-col gap-9 justify-center h-full w-full md:w-1/2 p-20">
        <H1 contrast>Atteignez vos objectifs physiques</H1>
        <Paragraph contrast className='text-xl'>
          Avec un coach à domicile
          <FlipWords words={['diplomé d\'état', 'affilié service à la personne']}/>
        </Paragraph>
        <MailToButton className='w-fit'>Réserver une séance d&apos;essai</MailToButton>
      </div>
    </div>
  );
};

export default HeroSection;

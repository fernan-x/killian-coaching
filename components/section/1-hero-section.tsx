import { Button } from "../ui/button";
import HeroPicture from "@/assets/images/hero.png";
import { H1, Paragraph } from "../ui/text";

const HeroSection = () => {
  return (
    <div
      className="h-[90vh] bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: `url(${HeroPicture.src})`,
      }}
    >
      <div className="absolute h-full w-full bg-gradient-to-r from-black">

      </div>
      <div className="absolute flex flex-col gap-9 justify-center h-full w-full md:w-1/2 p-20">
        <H1 contrast>Atteignez vos objectifs physiques</H1>
        <Paragraph contrast className='text-xl'>Avec un coach diplomé d&apos;état affilié service à la personne</Paragraph>
        <Button>Réserver une séance d&apos;essai</Button>
      </div>
    </div>
  );
};

export default HeroSection;

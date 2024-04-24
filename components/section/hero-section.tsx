import { Button } from "../ui/button";
import Image from "next/image";
import Container from "../ui/container";
import HeroPicture from "@/assets/images/hero.jpg";

const HeroSection = () => {
  return (
    <Container>
      <div className="flex flex-1 flex-col gap-6 p-12 items-start justify-center">
        <h1 className="font-bold text-4xl">
          Devenez la meilleure version de vous même
        </h1>
        <h2 className="text-2xl">
          En étant accompagné d&apos;un coach diplômé d’état
        </h2>
        <Button>Réserver une séance d&apos;essai</Button>
      </div>
      {/* <div className="p-12 flex flex-1 justify-center">
        <Image
          src={HeroPicture}
          alt="Killian helping a customer to bench"
          className="object-cover rounded-lg"
          height={500}
          width={500}
        />
      </div> */}
    </Container>
  );
};

export default HeroSection;

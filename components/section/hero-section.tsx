import { Button } from "../ui/button";
import Image from "next/image";
import Container from "../ui/container";

const HeroSection = () => {
  return (
    <Container>
      <div className="flex flex-col gap-6 p-12 items-start justify-center">
        <h1 className="font-bold text-4xl">
          Devenez la meilleure version de vous même
        </h1>
        <h2 className="text-2xl">
          En étant accompagné d&apos;un coach diplômé d’état
        </h2>
        <Button>Réserver une séance d&apos;essai</Button>
      </div>
      <div className="flex p-12">
        <Image
          src="/hero.jpg"
          alt="Killian helping a customer to bench"
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>
    </Container>
  );
};

export default HeroSection;

import Container from "@/components/ui/container";
import { H2 } from "../ui/text";
import Image from "next/image";
import KillianPicture from "@/assets/images/killian-presentation.jpg";

const ProblemSolutionSection = () => {
  return <Container>
    <div className="flex flex-1 gap-12 items-center justify-center flex-col lg:flex-row">
      <div className="flex-1 flex justify-center">
        {/* <video className="max-h-[440px] w-auto rounded-lg" controls>
          <source src={`/${BASE_PATH}problem-solution.webm`} type="video/webm" />
          <track
            default
            src={`/${BASE_PATH}problem-solution.vtt`}
            kind="captions"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video> */}
        <Image src={KillianPicture} alt='Killian devant son fit truck' className='rounded-lg shadow-md object-cover' />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <H2 className='uppercase'>Pourquoi commencer demain ?</H2>
        <p className='text-xl flex flex-col gap-2'>
          <span>Vous avez du mal à rester motivé et à maintenir une routine d&apos;entraînement ?</span>
          <span>Vous vous donnez à fond, mais les résultats tardent à apparaître ?</span>
          <span>Ou peut-être que vous ne savez pas par où commencer pour structurer vos séances efficacement ?</span>
        </p>
        <span className="text-xl"><b>Vous n&apos;êtes pas seul !</b></span>
        <p className='text-lg flex flex-col gap-2'>
          <span>Avec plus de 5 ans d&apos;expérience et un large éventail de formules de coaching personnalisées, je suis là pour vous guider, vous recentrer et vous donner la motivation nécessaire pour atteindre vos objectifs.</span>
          <span>Grâce à mon fit truck, tout le matériel dont vous avez besoin vient à vous — plus d&apos;excuses pour ne pas vous entraîner !</span>
        </p>
        <p className='text-lg'>
          Ne laissez pas vos doutes vous freiner.
        </p>
        <span className="text-xl"><b>Ensemble, nous transformerons vos efforts en résultats concrets !</b></span>
      </div>
    </div>
  </Container>;
};

export default ProblemSolutionSection;

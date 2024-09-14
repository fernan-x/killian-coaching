import Image from 'next/image'
import Container from "../ui/container";
import { H3, Paragraph } from "../ui/text";
// import ProgramPicture from "@/assets/images/program.jpg";
import ProgramPicture from "@/assets/images/coach-plank-indoor.jpg";
import NoEquipmentPicture from "@/assets/images/no-equipment.jpg";
import CoachingPicture from "@/assets/images/coach-explanation.jpeg";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { twMerge } from 'tailwind-merge';
import CTAButton from '../ui/cta-button';

interface KeyBenefitSectionRowProps {
  picture: string | StaticImport;
  pictureAlt: string;
  title: string;
  content: string;
  additionalPictureClass?: string;
}

const KeyBenefitSectionRow = ({ picture, pictureAlt, title, content, additionalPictureClass }: KeyBenefitSectionRowProps) => {
  return <div className='relative rounded-lg min-h-[300px] lg:min-w-[300px] lg:h-[500px] flex justify-end'>
    <div className='flex gap-6 flex-col justify-end flex-1 z-[2] relative p-12 bg-gradient-to-t from-black from-10% rounded-lg'>
      <H3 contrast>{title}</H3>
      <Paragraph contrast>{content}</Paragraph>
    </div>
    <div className='absolute top-0 left-0 w-full h-full z-[1] rounded-lg'>
      <Image src={picture} fill alt={pictureAlt} className={twMerge('rounded-lg shadow-md object-cover', additionalPictureClass)} />
    </div>
  </div>
}

const KeyBenefitSection = () => {
  return <>
    <Container bg='dark'>
      {/* <div className="flex flex-col justify-center items-center text-center gap-3">
        <H2>Je suis là pour vous aider</H2>
        <Paragraph>Avec un coaching personnalisé et qui s&apos;adapte à vos besoins</Paragraph>
      </div> */}
      <div className='flex flex-col lg:flex-row justify-around gap-6 mt-6 mb-6 w-full'>
        <KeyBenefitSectionRow
          picture={NoEquipmentPicture}
          pictureAlt='Equipements sportifs au sol'
          title={`Pas besoin d'équipement`}
          content='Le fit truck est tout équipé! Je me déplace avec les poids, tapis, élastiques, chrono et autres.'
          additionalPictureClass='object-bottom'
        />
        <KeyBenefitSectionRow
          picture={ProgramPicture}
          pictureAlt='Calpin avec un crayon posé dessus'
          title={`Programme 100% personnalisé`}
          content={`Nous construisons le programme ensemble, à l'aide d'un questionnaire complet et d'échanges.`}
          additionalPictureClass='object-[50%_60%] lg:object-[50%_70%]'
        />
        <KeyBenefitSectionRow
          picture={CoachingPicture}
          pictureAlt='Killian motivant une personne faisant de la corde'
          title='À domicile, à distance, rien ne change'
          content='Nous communiquons en dehors des séances par messagerie, je ne donne pas juste une programme.'
          additionalPictureClass='object-[50%_40%] lg:object-[50%_50%]'
        />
      </div>
    </Container>
    <Container fitContent noPadding className='bg-primary pb-12' bg='dark'>
      <CTAButton>Séance découverte offerte</CTAButton>
    </Container>
  </>;
};

export default KeyBenefitSection;

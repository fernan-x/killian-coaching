import Image from 'next/image'
import Container from "../ui/container";
import { H2, H3, Paragraph } from "../ui/text";
import MailToButton from '../ui/mail-to-button';
import ProgramPicture from "@/assets/images/program.jpg";
import NoEquipmentPicture from "@/assets/images/no-equipment.jpg";
import CoachingPicture from "@/assets/images/coach-explanation.jpeg";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { twMerge } from 'tailwind-merge';

interface KeyBenefitSectionRowProps {
  picture: string | StaticImport;
  pictureAlt: string;
  title: string;
  content: string;
  additionalPictureClass?: string;
}

const KeyBenefitSectionRow = ({ picture, pictureAlt, title, content, additionalPictureClass }: KeyBenefitSectionRowProps) => {
  return <div className='flex flex-col w-full gap-6 items-center md:flex-row md:even:flex-row-reverse transform transition duration-500 hover:scale-105'>
    <div className='flex-1 flex min-h-60  w-full md:w-1/4 relative'>
      <Image src={picture} fill alt={pictureAlt} className={twMerge('rounded-xl object-cover', additionalPictureClass)} />
    </div>
    <div className='flex gap-6 flex-col flex-1'>
      <H3>{title}</H3>
      <Paragraph>{content}</Paragraph>
    </div>
  </div>
}

const KeyBenefitSection = () => {
  return <Container>
    <div className="flex flex-col justify-center items-center text-center gap-3">
      <H2>Je suis là pour vous aider</H2>
      <Paragraph>Avec un coaching personnalisé et qui s&apos;adapte à vos besoins</Paragraph>
    </div>
    <div className='flex flex-col gap-12'>
      <KeyBenefitSectionRow
        picture={NoEquipmentPicture}
        pictureAlt='Equipements sportifs au sol'
        title={`Pas besoin d'équipement`}
        content='Le fit truck est tout équipé! Je me déplace avec les poids, tapis, élastiques, chrono et autres.'
      />
      <KeyBenefitSectionRow
        picture={ProgramPicture}
        pictureAlt='Calpin avec un crayon posé dessus'
        title={`Programme 100% personnalisé`}
        content={`Nous construisons le programme ensemble, à l'aide d'un questionnaire complet et d'échanges. Et il évolue selon vos besoins. Programme aussi alimentaire et conseils.`}
        additionalPictureClass='object-[50%_bottom]'
      />
      <KeyBenefitSectionRow
        picture={CoachingPicture}
        pictureAlt='Killian motivant une personne faisant de la corde'
        title='A domicile, à distance, rien ne change'
        content='Nous communiquons en dehors des séances par messagerie, je fais des retours sur les vidéos des coaching a distance, je ne donne pas juste une programme.'
        additionalPictureClass='object-[50%_35%] md:object-[50%_40%]'
      />
    </div>
    <div className="flex flex-col justify-center items-center text-center">
      <MailToButton>Séance découverte offerte</MailToButton>
    </div>
  </Container>;
};

export default KeyBenefitSection;

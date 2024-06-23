import Image from 'next/image'
import Container from "../ui/container";
import { H2, H3, Paragraph } from "../ui/text";
import MailToButton from '../ui/mail-to-button';
import ProgramPicture from "@/assets/images/program.jpg";
import NoEquipmentPicture from "@/assets/images/no-equipment.jpg";
import CoachingPicture from "@/assets/images/coaching.jpg";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface KeyBenefitSectionRowProps {
  picture: string | StaticImport;
  pictureAlt: string;
  title: string;
  content: string;
}

const KeyBenefitSectionRow = ({ picture, pictureAlt, title, content }: KeyBenefitSectionRowProps) => {
  return <div className='flex p-6 flex-col w-full gap-12 items-center md:flex-row md:even:flex-row-reverse transform transition duration-500 hover:scale-105'>
    <Image src={picture} width={300} height={250} alt={pictureAlt} className='rounded-xl' />
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
    />
    <KeyBenefitSectionRow
      picture={CoachingPicture}
      pictureAlt='Killian motivant une personne faisant de la corde'
      title='A domicile, à distance, rien ne change'
      content='Nous communiquons en dehors des séances par messagerie, je fais des retours sur les vidéos des coaching a distance, je ne donne pas juste une programme.'
    />
    <div className="flex flex-col justify-center items-center text-center">
      <MailToButton>Séance découverte offerte</MailToButton>
    </div>
  </Container>;
};

export default KeyBenefitSection;

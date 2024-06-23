import Image from 'next/image'
import Container from "../ui/container";
import { H2, H3, Paragraph } from "../ui/text";
import Placeholder from '../ui/placeholder';
import MailToButton from '../ui/mailToButton';

interface KeyBenefitSectionRowProps {
  picture: any;
  title: string;
  content: string;
}

const KeyBenefitSectionRow = ({ picture, title, content }: KeyBenefitSectionRowProps) => {
  return <div className='flex w-full gap-12 even:flex-row-reverse'>
    <Placeholder />
    <div>
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
      picture={null}
      title={`Pas besoin d'équipement`}
      content='Le fit truck est tout équipé! Je me déplace avec les poids, tapis, élastiques, chrono et autres.'
    />
    <KeyBenefitSectionRow
      picture={null}
      title={`Programme 100% personnalisé`}
      content={`Nous construisons le programme ensemble, à l'aide d'un questionnaire complet et d'échanges. Et il évolue selon vos besoins. Programme aussi alimentaire et conseils.`}
    />
    <KeyBenefitSectionRow
      picture={null}
      title='A domicile, à distance, rien ne change'
      content='Nous communiquons en dehors des séances par messagerie, je fais des retours sur les vidéos des coaching a distance, je ne donne pas juste une programme.'
    />
    <div className="flex flex-col justify-center items-center text-center">
      <MailToButton>Séance découverte offerte</MailToButton>
    </div>
  </Container>;
};

export default KeyBenefitSection;

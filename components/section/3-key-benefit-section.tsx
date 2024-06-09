import Image from 'next/image'
import Container from "../ui/container";
import { H2, H3, Paragraph } from "../ui/text";
import Placeholder from '../ui/placeholder';
import { Button } from '../ui/button';

const KeyBenefitSectionRow = ({ children }: React.PropsWithChildren) => {
  return <div>{children}</div>
}

const KeyBenefitSection = () => {
  return <Container>
    <div className="flex flex-col justify-center items-center text-center gap-6 pt-6">
      <H2>Je suis là pour vous aider</H2>
      <Paragraph>Coaching personnalisé à domicile</Paragraph>
    </div>
    <div className="flex-1 flex flex-col items-center px-6 gap-12 md:grid md:grid-cols-3">
      <KeyBenefitSectionRow>
        <Placeholder />
        <H3>Pas besoin d&apos;équipements</H3>
      </KeyBenefitSectionRow>
      <KeyBenefitSectionRow>
        <Placeholder />
        <H3>Programme 100% personnalisé</H3>
      </KeyBenefitSectionRow>
      <KeyBenefitSectionRow>
        <Placeholder />
        <H3>Communication</H3>
      </KeyBenefitSectionRow>
    </div>
    <div className="flex flex-col justify-center items-center text-center gap-6 p-12">
      <Button>Réserver une séance d&apos;essai</Button>
    </div>
  </Container>;
};

export default KeyBenefitSection;

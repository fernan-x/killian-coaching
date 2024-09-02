import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import Container from "../ui/container";
import CTAButton from "../ui/cta-button";
import MailToButton from "../ui/mail-to-button";
import { H2 } from "../ui/text";

type FAQElement = {
  id: number;
  title: string;
  response: React.ReactNode;
}

const FAQElements: FAQElement[] = [
  {
    id: 1,
    title: 'Quels sont les avantages de faire appel à un coach sportif à domicile ?',
    response: <>
      <b>Personnalisation de l&apos;entraînement</b> : Péparation des programmes d&apos;entraînement personnalisés en fonction des objectifs, du niveau de forme physique, des besoins spécifiques et des éventuelles limitations de chaque individu.
      <br/><br/>
      <b>Flexibilité horaire</b> : Vous avez la possibilité de planifier les séances d&apos;entraînement selon votre emploi du temps et vos disponibilités, ce qui offre une grande flexibilité pour concilier vie professionnelle, familiale et sportive.
      <br/><br/>
      <b>Motivation et encouragement</b> : Le coach sportif joue un rôle crucial en matière de motivation en vous encourageant, en vous poussant à donner le meilleur de vous-même et en vous aidant à maintenir la discipline nécessaire pour atteindre vos objectifs.
    </>,
  },
  {
    id: 2,
    title: 'Quels équipements dois-je avoir à ma disposition pour les séances d\'entraînement à domicile ?',
    response: <>
      Pour les séances de coaching vous n&apos;avez pas besoin de matériel en particulier je me déplace directement avec tous le métériel nécessaire.
    </>
  },
  {
    id: 3,
    title: 'Y a-t-il des restrictions d\'âge ou de condition physique pour travailler avec vous ?',
    response: <>
      Non, je travaille avec des clients de tous âges et niveaux de condition physique. Mon objectif est d&apos;adapter mes programmes d&apos;entraînement à chaque individu, en prenant en compte leurs besoins spécifiques, leurs objectifs et leurs éventuelles limitations physiques. Si vous avez des préoccupations particulières concernant votre âge ou votre condition physique, n&apos;hésitez pas à me contacter pour discuter de la meilleure approche pour vous.
    </>
  },
  {
    id: 4,
    title: 'À quelle fréquence devrais-je m\'entraîner avec un coach sportif ?',
    response: <>
      La fréquence d&apos;entraînement avec un coach sportif dépend de vos objectifs, de votre niveau de forme physique et de votre disponibilité. Nous pouvons discuter ensemble de la fréquence qui vous convient le mieux lors de notre première rencontre, en prenant en compte vos besoins spécifiques et vos contraintes personnelles.
    </>
  },
  {
    id: 5,
    title: 'Est t-il possible de s\'entrainer en groupe ?',
    response: <>
      Pour celles et ceux qui préfèrent rester enpetit comité, je propose aussi une formule de coaching en groupe à domicile, en extérieur. Entraînez-vous avec vos amis(es) pour plus de fun et de plaisir !
    </>
  },
  {
    id: 6,
    title: 'Que faire en cas d\'annulation ou de report de séance ?',
    response: <>
      Si vous avez besoin d&apos;annuler ou de reporter une séance, il est préférablede me tenir informer dès que possible.
      <br/>
      Je recommande de le faire au moins 24 heures à l&apos;avance pour me permettre de réorganiser mon planning.
    </>
  },
]

const FAQSection = () => {
  return <Container noBg className="bg-[#F3F7FF]">
    <H2>FAQ</H2>
    <Accordion type="single" collapsible className="w-full md:w-3/4">
    {FAQElements.map(elem => (
      <AccordionItem key={elem.id} value={elem.id.toString()}>
        <AccordionTrigger>{elem.title}</AccordionTrigger>
        <AccordionContent>
          {elem.response}
        </AccordionContent>
      </AccordionItem>
    ))}
    </Accordion>
    <CTAButton>Réserver une séance d&apos;essai</CTAButton>
  </Container>;
};

export default FAQSection;

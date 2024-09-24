import PricingCard from "@/components/common/pricing-card/pricing-card";
import Link from "next/link";

export default function Coaching() {
  return (
    <div className="flex w-full flex-col bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="uppercase text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Atteignons vos objectifs ensemble</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Que ce soit à domicile ou à distance, vous avez tous les outils pour atteindre vos objectifs.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center mt-16">
          <Link href='#domicile' className="bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 rounded-full">
            À domicile
          </Link>
          <Link href='#distance' className="bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 rounded-full">
            À distance
          </Link>
          {/* <Link href='#groupe'>
            En groupe
          </Link> */}
          <Link href='#entreprise' className="bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 rounded-full">
            En entreprise
          </Link>
        </div>

        <PricingCard
          anchor="domicile"
          title="Coaching à domicile"
          description="Profitez d'un accompagnement personnalisé, adapté à votre emploi du temps.
          Atteignez vos objectifs physique avec l'aide d'un coach diplômé d'état directement à domicile."
          priceTitle="Après déduction d&apos;impôt"
          price="30€"
          features={[
            'Séance adaptée à votre objectif',
            'Suivi hebdomadaire de votre progression',
            'Conseils sur votre alimentation',
          ]}
          frequency='/ séance'
          subTitle=""
        />
        <PricingCard
          anchor="distance"
          title="Coaching à distance"
          description="Profitez d'un programme d'entrainement personnalisé pour atteindre vos objectifs?"
          priceTitle="À partir de"
          price="65€"
          features={[
            `Plan d'entrainements personnalisé`,
            'Plan nutritionel adapté à votre objectif',
            'Bilan hebdomadaire',
            'Disponibilité 7J/7 sur WhatsApp'
          ]}
          frequency='/ mois'
          subTitle="Prix dégressif selon engagement"
        />
        {/* <PricingCard
          anchor="groupe"
          title="Coaching en groupe"
          description="Pour celles et ceux qui préfèrent rester en petit comité, je propose aussi une formule de coaching en groupe à domicile, en extérieur.
          Entraînez-vous avec vos amis(es) pour plus de fun et de plaisir !"
          priceTitle="À partir de"
          price="10€"
          features={[
            `Séance adaptée aux pratiquants`,
            'Correction des postures lors de la séance',
            'Conseils personnalisés',
          ]}
          frequency='/ personne'
          subTitle="Prix dégressif selon le nombre de participants"
        /> */}
         <PricingCard
          anchor="entreprise"
          title="Coaching en entreprise"
          description="Vous êtes dirigeant d'une entreprise ou délégué du personnel, offrez aux salariés la possibilité de se dépenser et de se détendre au sein de l'entreprise.
          Au-delà des bénéfices évident du sport sur la santé tel que la prévention des troubles du sommeil, cardio-vasculaires ou musculo-squelettiques; le sport en entreprise offre de nombreux avantages et enjeux sociaux-économiques "
          price="Sur devis"
          features={[
            'Créer du lien social entre les collaborateurs',
            'Favoriser la cohésion, ce qui agit directement sur la compétitivité',
            'Lutter contre le stress et favorise la bonne humeur entre collaborateurs',
            'Améliorer la condition physique des employés',
            'Diminuer par conséquent le nombre d\'arrêt maladie',
            'Limiter les blessures dû à un mauvais échauffement ou une mauvaise posture',
            'Favoriser le bien-être des salariés',
          ]}
          buttonTitle="Demander un devis"
        />
      </div>
    </div>
  );
}

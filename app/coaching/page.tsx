import PricingCard from "@/components/common/pricing-card/pricing-card";
import Link from "next/link";
import React from "react";

export const LinkToBlock: React.FC<React.PropsWithChildren<{ href: string }>> = ({ href, children }) => {
  return (
    <Link href={href} className="bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 rounded-full">
      {children}
    </Link>
  );
};

export default function Coaching() {
  return (
    <div className="flex w-full flex-col bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="uppercase text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Atteignons vos objectifs ensemble</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Profitez d&apos;un entraînement personnalisé et de qualité, avec un matériel professionnel, directement chez vous. Que vous soyez débutant ou sportif confirmé, je m&apos;adapte à vos objectifs et à votre rythme.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center mt-16">
          <LinkToBlock href='#10-seances'>
            Formule 10 séances
          </LinkToBlock>
          <LinkToBlock href='#20-seances'>
            Formule 20 séances
          </LinkToBlock>
          <LinkToBlock href='#30-seances'>
            Formule 30 séances
          </LinkToBlock>
          {/* <LinkToBlock href='#distance'>
            À distance
          </LinkToBlock> */}
          <LinkToBlock href='#entreprise'>
            En entreprise
          </LinkToBlock>
        </div>

        <PricingCard
          anchor="10-seances"
          title="Formule 10 séances"
          description="Profitez d'un accompagnement personnalisé, adapté à votre emploi du temps.
          Atteignez vos objectifs physiques avec l'aide d'un coach diplômé d'état directement à domicile."
          priceTitle="Après déduction d&apos;impôt"
          price="36€"
          features={[
            'Valable 3 mois',
            'Séance adaptée à votre objectif',
            'Suivi hebdomadaire de votre progression',
            'Conseils sur votre alimentation',
          ]}
          frequency='/ séance'
          subTitle=""
        />
        <PricingCard
          anchor="20-seances"
          title="Formule 20 séances"
          description="Profitez d'un accompagnement personnalisé, adapté à votre emploi du temps.
          Atteignez vos objectifs physiques avec l'aide d'un coach diplômé d'état directement à domicile."
          priceTitle="Après déduction d&apos;impôt"
          price="33€"
          features={[
            'Valable 6 mois',
            'Séance adaptée à votre objectif',
            'Suivi hebdomadaire de votre progression',
            'Conseils sur votre alimentation',
          ]}
          frequency='/ séance'
          subTitle=""
        />
        <PricingCard
          anchor="30-seances"
          title="Formule 30 séances"
          description="Profitez d'un accompagnement personnalisé, adapté à votre emploi du temps.
          Atteignez vos objectifs physiques avec l'aide d'un coach diplômé d'état directement à domicile."
          priceTitle="Après déduction d&apos;impôt"
          price="30€"
          features={[
            'Valable 12 mois',
            'Séance adaptée à votre objectif',
            'Suivi hebdomadaire de votre progression',
            'Conseils sur votre alimentation',
          ]}
          frequency='/ séance'
          subTitle=""
        />
        {/* <PricingCard
          anchor="distance"
          title="Coaching à distance"
          description="Profitez d'un programme d'entrainement personnalisé pour atteindre vos objectifs."
          priceTitle="À partir de"
          price="85€"
          features={[
            `Plan d'entrainements personnalisé`,
            'Plan nutritionel adapté à votre objectif',
            'Bilan hebdomadaire',
            'Disponibilité 7J/7 sur WhatsApp'
          ]}
          frequency='/ mois'
          subTitle="Prix dégressif selon engagement"
        /> */}
         <PricingCard
          anchor="entreprise"
          title="Coaching en entreprise"
          description="Vous êtes dirigeant d'une entreprise ou délégué du personnel, offrez aux salariés la possibilité de se dépenser et de se détendre au sein de l'entreprise.
          Au-delà des bénéfices évident du sport sur la santé telle que la prévention des troubles du sommeil, cardio-vasculaires ou musculo-squelettiques. Le sport en entreprise offre de nombreux avantages et enjeux sociaux-économiques."
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

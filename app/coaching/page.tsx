import PricingCard from "@/components/common/pricing-card/pricing-card";

export default function Coaching() {
  return (
    <div className="flex w-full flex-col bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Atteignons vos objectifs ensemble</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Que ce soit à domicile ou à distance, vous avez tous les outils pour atteindre vos objectifs.</p>
        </div>
        <PricingCard
          title="Coaching à domicile"
          description="Profitez d'un accompagnement personnalisé, adapté à votre emploi du temps.
          Atteignez vos objectifs physique avec l'aide d'un coach diplômé d'état directement à domicile."
          priceTitle="Après déduction d&apos;impôt"
          price="36€"
          features={[
            'Séance adaptée à votre objectif',
            'Suivi hebdomadaire de votre progression',
            'Conseils sur votre alimentation',
          ]}
          frequency='/ séance'
          subTitle="Service à la personne avec avance imédiate disponible dès lors que vous êtes imposable"
        />
        <PricingCard
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
          subTitle="Prix dégressif en fonction de l'engagement"
          subTitleTooltip={
            <div>
              <b>Prix dégressif en fonction de l&apos;engagement</b>
              <ul className="mt-2">
                <li>engagement 3 mois = 85€/mois</li>
                <li>engagement 6 mois = 75€/mois</li>
                <li>engagement 12 mois = 65€/mois</li>
              </ul>
            </div>
          }
        />
        <PricingCard
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
          subTitle="Prix dégressif en fonction du nombre de participants"
          subTitleTooltip={
            <div>
              <b>Prix dégressif en fonction du nombre de participants</b>
              <ul className="mt-2">
                <li>2 personnes = 25€ par personne</li>
                <li>3 personnes = 20€ par personne</li>
                <li>4 personnes = 15€ par personne</li>
                <li>5 personnes = 12€ par personne</li>
                <li>6 personnes = 10€ par personne</li>
              </ul>
            </div>
          }
        />
         <PricingCard
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

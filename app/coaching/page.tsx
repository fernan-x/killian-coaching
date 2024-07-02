import PricingCard from "@/components/common/pricing-card/pricing-card";

export default function Coaching() {
  return (
    <div className="flex w-full flex-col bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</p>
        </div>
        <PricingCard
          title="Coaching à domicile"
          description="Profitez d'un accompagnement personnalisé, adapté à votre emploi du temps.
          Atteignez vos objectifs physique avec l'aide d'un coach diplômé d'état directement à domicile."
          price="33€"
          features={[
            'Séance adaptée à votre objectif',
            'Suivi hebdomadaire de votre progression',
            'Conseils sur votre alimentation',
          ]}
          frequency='/ séance'
        />
        <PricingCard
          title="Coaching à distance"
          description="Profitez d'un programme d'entrainement personnalisé pour atteindre vos objectifs?"
          price="85€"
          features={[
            `Plan d'entrainements personnalisé`,
            'Plan nutritionel adapté à votre objectif',
            'Bilan hebdomadaire',
            'Disponibilité 7J/7 sur WhatsApp'
          ]}
          frequency='/ mois'
        />
      </div>
    </div>
  );
}

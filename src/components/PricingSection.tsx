import { Button } from "@/components/ui/button";
import { Check, Star, Gift, ArrowRight, Building2, Users, Calendar, UserPlus } from "lucide-react";
const PricingSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const includedDomicile = ["Programme personnalisé", "Tout le matériel fourni", "Coach diplômé d'État", "Flexibilité des horaires", "Suivi de progression", "Conseils nutrition inclus"];
  const includedDuo = ["Entraînez-vous à deux", "Programme adapté au duo", "Tout le matériel fourni", "Coach diplômé d'État", "Plus motivant à deux", "Conseils nutrition inclus"];
  const includedEntreprise = ["Séances sur site", "Matériel fourni", "Cours collectifs ou individuels", "Horaires adaptés à l'entreprise", "Formules flexibles", "Bilan et suivi régulier"];
  return <section id="tarifs" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider mb-4 block text-lg">
            Tarifs transparents
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple et sans engagement
          </h2>
          <p className="text-lg text-muted-foreground">Pas d'abonnement, pas de forfait obligatoire. Vous payez uniquement les séances que vous réservez.</p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Coaching à domicile */}
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-lg z-10">
              <Star className="w-4 h-4" />
              Offre découverte
            </div>

            <div className="bg-card rounded-3xl shadow-custom-lg border border-border overflow-hidden h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-8 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Coaching à domicile
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-white">30€</span>
                  <span className="text-white/80">/ séance*</span>
                </div>
                <p className="text-white/80 mt-2 text-sm">
                  *après crédit d'impôt de 50%
                </p>
              </div>

              {/* Body */}
              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  {includedDomicile.map(item => <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>)}
                </ul>

                {/* Free Session */}
                <div className="bg-secondary rounded-2xl p-4 mb-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Première séance offerte</p>
                    <p className="text-sm text-muted-foreground">Sans engagement</p>
                  </div>
                </div>

                <Button variant="hero" size="xl" className="w-full" onClick={scrollToContact}>
                  Réserver ma séance gratuite
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Séance Duo */}
          <div className="relative">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-lg z-10">
              <UserPlus className="w-4 h-4" />
              À deux c'est mieux
            </div>

            <div className="bg-card rounded-3xl shadow-custom-lg border border-border overflow-hidden h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-8 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Séance Duo
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-white">24€</span>
                  <span className="text-white/80">/ pers / séance</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  {includedDuo.map(item => <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>)}
                </ul>

                {/* Free Session */}
                <div className="bg-secondary rounded-2xl p-4 mb-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Première séance offerte</p>
                    <p className="text-sm text-muted-foreground">Sans engagement</p>
                  </div>
                </div>

                <Button variant="hero" size="xl" className="w-full" onClick={scrollToContact}>
                  Réserver une séance duo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Coaching en entreprise */}
          <div className="relative">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-lg z-10">
              <Building2 className="w-4 h-4" />
              Entreprises
            </div>

            <div className="bg-card rounded-3xl shadow-custom-lg border border-border overflow-hidden h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-8 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Coaching en entreprise
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-white">Sur devis</span>
                </div>
                <p className="text-white/80 mt-2 text-sm">
                  Tarif adapté à vos besoins
                </p>
              </div>

              {/* Body */}
              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  {includedEntreprise.map(item => <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>)}
                </ul>

                {/* Info Box */}
                <div className="bg-secondary rounded-2xl p-4 mb-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Rendez-vous gratuit</p>
                    <p className="text-sm text-muted-foreground">Évaluation de vos besoins</p>
                  </div>
                </div>

                <Button variant="outline" size="xl" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={scrollToContact}>
                  Demander un devis
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 space-y-2">
          <p className="text-muted-foreground text-sm">
            Durée d'une séance : 1 heure
          </p>
        </div>
      </div>
    </section>;
};
export default PricingSection;
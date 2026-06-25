import { Home, Target, Users, Truck, CheckCircle, Building2, Clock, TrendingUp, Heart, Briefcase, Zap, Video, Wifi, Calendar, MapPin } from "lucide-react";
import domicileImage from "@/assets/coaching-domicile.jpg";
import visioImage from "@/assets/coaching-visio.jpg";
import entrepriseImage from "@/assets/coaching-entreprise.jpg";
import { useState } from "react";

const CoachingSection = () => {
  const [activeTab, setActiveTab] = useState<'domicile' | 'entreprise' | 'visio'>('domicile');

  const featuresHome = [{
    icon: Home,
    title: "Chez vous",
    description: "Entraînez-vous dans le confort de votre domicile, sans déplacement ni perte de temps."
  }, {
    icon: Truck,
    title: "Matériel fourni",
    description: "Je me déplace avec tout l'équipement nécessaire : haltères, élastiques, tapis, et plus."
  }, {
    icon: Target,
    title: "Sur-mesure",
    description: "Programme 100% adapté à vos objectifs, votre niveau et vos contraintes."
  }, {
    icon: Users,
    title: "Suivi personnalisé",
    description: "Un accompagnement régulier pour vous motiver et mesurer vos progrès."
  }];

  const featuresEntreprise = [{
    icon: Building2,
    title: "Sur site",
    description: "Je me déplace directement dans vos locaux pour des séances pratiques et accessibles."
  }, {
    icon: Users,
    title: "Cours collectifs",
    description: "Séances en groupe pour renforcer la cohésion d'équipe et la motivation collective."
  }, {
    icon: Clock,
    title: "Horaires flexibles",
    description: "Séances adaptées à vos plannings : pause déjeuner, avant/après le travail."
  }, {
    icon: Heart,
    title: "Bien-être au travail",
    description: "Réduisez le stress et améliorez la qualité de vie de vos collaborateurs."
  }];

  const featuresVisio = [{
    icon: Video,
    title: "En visio",
    description: "Séances en direct par visioconférence, où que vous soyez en France ou à l'étranger."
  }, {
    icon: Wifi,
    title: "Sans déplacement",
    description: "Une simple connexion internet et un peu d'espace suffisent pour vous entraîner."
  }, {
    icon: Target,
    title: "Programme adapté",
    description: "Exercices choisis en fonction du matériel dont vous disposez chez vous."
  }, {
    icon: Calendar,
    title: "Horaires flexibles",
    description: "Plus de contraintes géographiques : on cale les séances quand ça vous arrange."
  }];

  const objectivesHome = ["Remise en forme", "Perte de poids", "Renforcement musculaire", "Amélioration de la mobilité", "Préparation physique", "Bien-être et santé"];

  const objectivesEntreprise = ["Réduction du stress", "Team building sportif", "Prévention des TMS", "Boost de productivité", "Cohésion d'équipe", "Image employeur"];

  const objectivesVisio = ["Remise en forme", "Perte de poids", "Renforcement musculaire", "Mobilité & souplesse", "Suivi à distance", "Flexibilité totale"];

  const features = activeTab === 'domicile' ? featuresHome : activeTab === 'entreprise' ? featuresEntreprise : featuresVisio;
  const objectives = activeTab === 'domicile' ? objectivesHome : activeTab === 'entreprise' ? objectivesEntreprise : objectivesVisio;

  return <section id="coaching" className="section-padding bg-background">
      <div className="container-custom">
        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center bg-secondary rounded-2xl p-2 gap-2">
            <button
              onClick={() => setActiveTab('domicile')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'domicile'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Home className="w-5 h-5" />
              Coaching à domicile
            </button>
            <button
              onClick={() => setActiveTab('entreprise')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'entreprise'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              Coaching en entreprise
            </button>
            <button
              onClick={() => setActiveTab('visio')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'visio'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Video className="w-5 h-5" />
              Coaching en visio
            </button>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            {activeTab === 'domicile' ? 'Coaching à domicile' : activeTab === 'entreprise' ? 'Coaching en entreprise' : 'Coaching en visio'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {activeTab === 'domicile' ? 'Le sport vient à vous' : activeTab === 'entreprise' ? 'Boostez vos équipes' : 'Le coaching où que vous soyez'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {activeTab === 'domicile'
              ? "Fini les excuses ! Avec Fit Truck, bénéficiez d'un coaching sportif professionnel directement chez vous à Nantes et ses alentours. Une solution pratique, efficace et motivante."
              : activeTab === 'entreprise'
              ? "Investissez dans le bien-être de vos collaborateurs ! Des séances de sport sur le lieu de travail pour améliorer la santé, la cohésion et la productivité de votre équipe."
              : "Pas à Nantes ? Pas de problème ! Profitez d'un coaching sportif personnalisé en visioconférence, depuis chez vous, en voyage ou au bureau. Tout ce qu'il vous faut : une connexion internet."
            }
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => <div key={feature.title} className="bg-card rounded-2xl p-6 shadow-custom-sm hover:shadow-custom-md transition-all duration-300 card-hover group" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>)}
        </div>

        {/* How it works + Objectives */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-custom-lg">
              <img
                src={activeTab === 'visio' ? visioImage : activeTab === 'entreprise' ? entrepriseImage : domicileImage}
                alt={activeTab === 'visio' ? "Coaching sportif en visio à distance" : activeTab === 'entreprise' ? "Coaching sportif en entreprise" : "Coaching sportif à domicile"}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              {activeTab === 'domicile' ? 'Vos objectifs, ma priorité' : activeTab === 'entreprise' ? 'Les avantages pour votre entreprise' : 'Le coaching sans contrainte'}
            </h3>
            <p className="text-muted-foreground mb-8">
              {activeTab === 'domicile'
                ? "Que vous souhaitiez perdre du poids, vous remettre en forme ou améliorer vos performances, je construis un programme entièrement adapté à vos besoins et votre emploi du temps."
                : activeTab === 'entreprise'
                ? "Le sport en entreprise est un investissement rentable : réduction de l'absentéisme, amélioration du moral et de la productivité, et une image employeur renforcée."
                : "Idéal si vous habitez loin de Nantes, voyagez souvent ou souhaitez plus de souplesse. Vous bénéficiez du même suivi personnalisé qu'en présentiel, en direct avec votre coach."
              }
            </p>

            <div className="grid grid-cols-2 gap-4">
              {objectives.map(objective => <div key={objective} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{objective}</span>
                </div>)}
            </div>

            <div className="mt-8 p-6 bg-secondary rounded-2xl">
              <h4 className="font-semibold text-foreground mb-2">Comment ça marche ?</h4>
              <ol className="space-y-2 text-muted-foreground">
                {activeTab === 'domicile' ? (
                  <>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0">1</span>
                      <span>Séance découverte gratuite pour définir vos objectifs</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0">2</span>
                      <span>Programme personnalisé créé sur-mesure</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0">3</span>
                      <span>Séances à domicile avec tout le matériel fourni</span>
                    </li>
                  </>
                ) : activeTab === 'entreprise' ? (
                  <>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0">1</span>
                      <span>Rendez-vous pour évaluer les besoins de votre équipe</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0">2</span>
                      <span>Proposition de formules adaptées (hebdo, mensuel, événementiel)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0">3</span>
                      <span>Séances sur site avec tout le matériel fourni</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0">1</span>
                      <span>Premier échange visio gratuit pour définir vos objectifs</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0">2</span>
                      <span>Programme adapté au matériel disponible chez vous</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center flex-shrink-0">3</span>
                      <span>Séances en direct par visioconférence, où que vous soyez</span>
                    </li>
                  </>
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CoachingSection;
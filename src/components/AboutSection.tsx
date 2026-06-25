import { Award, GraduationCap, Heart, Target } from "lucide-react";
import coachImage from "@/assets/coach-portrait.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Résultats",
      description: "Mon objectif : que vous atteigniez les vôtres. Chaque séance vous rapproche de votre but.",
    },
    {
      icon: Heart,
      title: "Bienveillance",
      description: "Un accompagnement à votre rythme, sans jugement, dans une ambiance positive et motivante.",
    },
    {
      icon: GraduationCap,
      title: "Expertise",
      description: "Diplômé d'État et certifié, je m'appuie sur des méthodes éprouvées et adaptées à chacun.",
    },
  ];

  return (
    <section id="apropos" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-custom-lg">
              <img
                src={coachImage}
                alt="Coach sportif diplômé - Fit Truck Nantes"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 bg-card rounded-2xl p-4 shadow-custom-md flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">Diplômé d'État</p>
                <p className="text-sm text-muted-foreground">Coach certifié</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              À propos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Votre coach, votre allié
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Passionné de sport et de bien-être, j'ai créé Fit Truck pour rendre le coaching sportif
              accessible à tous, directement à domicile. Mon approche : vous accompagner avec bienveillance
              et professionnalisme vers vos objectifs.
            </p>
            <p className="text-muted-foreground mb-8">
              Diplômé d'État et certifié, j'interviens à Nantes et ses environs avec tout le matériel
              nécessaire. Que vous soyez débutant ou sportif confirmé, je m'adapte à votre niveau
              et à vos contraintes pour des séances efficaces et motivantes.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex items-start gap-4 bg-card rounded-xl p-4 shadow-custom-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

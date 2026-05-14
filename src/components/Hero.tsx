import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-coaching.jpg";
const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Coach sportif à domicile à Nantes et ses alentours" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/65" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative container-custom section-padding pt-32 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 animate-fade-in-up">
              Atteignez vos objectifs
              <br />
              <span className="text-primary">sans quitter votre domicile</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl animate-fade-in-up animation-delay-100">
              Coaching sportif 100% personnalisé, directement chez vous à Nantes et ses alentours.
              Je me déplace avec tout le matériel nécessaire pour des séances efficaces et motivantes.
            </p>

            {/* Price Badge */}
            

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <Button size="xl" onClick={scrollToContact} className="bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all">
                Séance découverte offerte
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="outline" size="xl" onClick={() => document.querySelector("#coaching")?.scrollIntoView({
              behavior: "smooth"
            })} className="border-primary text-primary hover:bg-primary/10">
                Découvrir le coaching
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 mt-12 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2 text-slate-600">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Coach diplômé d'État</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Sans abonnement</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Nantes et alentours</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        
      </div>
    </section>;
};
export default Hero;
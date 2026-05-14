import { Receipt, PiggyBank, FileCheck, HelpCircle } from "lucide-react";
const ServiceSection = () => {
  const benefits = [{
    icon: PiggyBank,
    title: "Économisez 50%",
    description: "Récupérez la moitié du coût de vos séances sous forme de crédit d'impôt."
  }, {
    icon: FileCheck,
    title: "Déclaration simplifiée",
    description: "Je vous fournis une attestation fiscale annuelle pour votre déclaration."
  }, {
    icon: Receipt,
    title: "Paiement facilité",
    description: "Possibilité de paiement par CESU (Chèque Emploi Service Universel)."
  }];
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Service à la personne</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Crédit d'impôt de 50%
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            En tant que service à la personne agréé, bénéficiez d'avantages fiscaux sur vos séances de coaching.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useHCaptcha } from "@/hooks/useHCaptcha";

const ContactSection = () => {
  const { toast } = useToast();
  const hcaptchaRef = useRef<HTMLDivElement>(null);
  const { getToken, reset: resetHCaptcha } = useHCaptcha(hcaptchaRef);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Nouvelle demande de séance — ${formData.name}`,
          from_name: "Fit Truck - Formulaire de contact",
          botcheck: false,
          "h-captcha-response": getToken(),
          ...formData,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        toast({
          title: "Message envoyé !",
          description: "Je vous recontacte très rapidement pour planifier votre séance découverte.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        resetHCaptcha();
      } else {
        throw new Error(data.message ?? "Erreur inconnue");
      }
    } catch {
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur est survenue. Contactez-moi directement par email ou téléphone.",
        variant: "destructive",
      });
      resetHCaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "07 50 40 34 99",
      href: "tel:+33750403499",
    },
    {
      icon: Mail,
      label: "Email",
      value: "killiancoaching.pro@gmail.com",
      href: "mailto:killiancoaching.pro@gmail.com",
    },
    {
      icon: MapPin,
      label: "Zone d'intervention",
      value: "Nantes et alentours (20km)",
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Réservez votre séance découverte gratuite et sans engagement.
            Je vous recontacte sous 24h pour planifier notre premier rendez-vous.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Additional Message */}
            <div className="mt-8 p-6 bg-accent/10 rounded-2xl">
              <h3 className="font-semibold text-foreground mb-2">Séance découverte offerte</h3>
              <p className="text-muted-foreground text-sm">
                Profitez d'une première séance gratuite pour découvrir ma méthode,
                définir vos objectifs et commencer votre transformation.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-3xl shadow-custom-md p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message envoyé !</h3>
                  <p className="text-muted-foreground mb-6">
                    Merci pour votre message. Je vous recontacte très rapidement
                    pour planifier votre séance découverte gratuite.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot — hidden from real users, bots fill it and get blocked */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    aria-hidden="true"
                    readOnly
                  />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nom complet *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Jean Dupont"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        minLength={2}
                        maxLength={100}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Téléphone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="06 00 00 00 00"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern="^(\+33|0)[1-9](\s?\d{2}){4}$"
                        title="Numéro de téléphone français (ex: 06 00 00 00 00)"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jean@exemple.fr"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Votre message (optionnel)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez vos objectifs, vos disponibilités..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <div ref={hcaptchaRef} />

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Réserver ma séance gratuite
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    En soumettant ce formulaire, vous acceptez d'être recontacté pour votre séance découverte.{" "}
                    Ce site est protégé par hCaptcha —{" "}
                    <a href="https://www.hcaptcha.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                      Politique de confidentialité
                    </a>{" "}
                    et{" "}
                    <a href="https://www.hcaptcha.com/terms" target="_blank" rel="noopener noreferrer" className="underline">
                      Conditions d'utilisation
                    </a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { PHONE_DISPLAY, PHONE_HREF, EMAIL_DISPLAY, EMAIL_HREF } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollTo = useScrollToSection();

  return (
    <footer className="bg-foreground text-card pt-16 pb-8">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold text-card inline-block mb-4">
              Fit<span className="text-primary-foreground">Truck</span>
            </a>
            <p className="text-card/70 mb-2 max-w-md">
              Coach sportif à domicile à Nantes et ses alentours. Des séances personnalisées et efficaces,
              directement chez vous, avec tout le matériel nécessaire.
            </p>
            <p className="text-card/70 font-medium mb-1">Nantes et ses alentours</p>
            <p className="text-card/50 text-sm mb-6 max-w-md">
              Saint-Sébastien-sur-Loire · Vertou · Rezé · Carquefou · La Chapelle-sur-Erdre · etc.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-card mb-4">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "#" },
                { label: "Coaching", href: "#coaching" },
                { label: "Avantages fiscaux", href: "#avantages" },
                { label: "Tarifs", href: "#tarifs" },
                { label: "À propos", href: "#apropos" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-card/70 hover:text-accent transition-colors text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-card/50 rounded"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-card mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 text-card/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-3 text-card/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span>{EMAIL_DISPLAY}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-card/70">
                <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>Nantes et alentours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-card/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-card/50 text-sm">
              © {currentYear} Fit Truck. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-card/50 text-sm hover:text-card transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-card/50 text-sm hover:text-card transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect, useRef } from "react";
import fitTruckLogo from "@/assets/fit-truck-logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollTo = useScrollToSection();
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => {
        setIsScrolled(window.scrollY > 20);
      }, 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  const navLinks = [
    { href: "#coaching", label: "Coaching" },
    { href: "#avantages", label: "Avantages" },
    { href: "#tarifs", label: "Tarifs" },
    { href: "#apropos", label: "À propos" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    scrollTo(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card shadow-custom-md py-0"
          : "bg-card py-0.5"
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Navigation principale">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Fit Truck — retour en haut"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={fitTruckLogo}
              alt="Fit Truck"
              className="h-28 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-2 text-sm font-medium transition-colors rounded-lg text-foreground hover:text-primary hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 transition-colors text-muted-foreground hover:text-primary"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-medium">{PHONE_DISPLAY}</span>
            </a>
            <Button variant="hero" size="default" onClick={() => scrollTo("#contact")}>
              Séance offerte
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-custom-lg border-t border-border animate-fade-in">
            <div className="container-custom px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  className="justify-start text-base"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </Button>
              ))}
              <hr className="my-2 border-border" />
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-muted-foreground py-2"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="font-medium">{PHONE_DISPLAY}</span>
              </a>
              <Button
                variant="hero"
                size="lg"
                className="mt-2"
                onClick={() => handleNavClick("#contact")}
              >
                Séance découverte offerte
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

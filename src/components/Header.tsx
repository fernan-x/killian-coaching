import { useState, useEffect } from "react";
import fitTruckLogo from "@/assets/fit-truck-logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    href: "#coaching",
    label: "Coaching"
  }, {
    href: "#avantages",
    label: "Avantages"
  }, {
    href: "#tarifs",
    label: "Tarifs"
  }, {
    href: "#apropos",
    label: "À propos"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-card/95 backdrop-blur-lg shadow-custom-md py-0" : "bg-card/95 backdrop-blur-lg py-0.5"}`}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" onClick={e => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }}>
            <img src={fitTruckLogo} alt="Fit Truck" className="h-28 w-auto object-contain" style={{ filter: "brightness(0) saturate(100%) invert(37%) sepia(93%) saturate(1352%) hue-rotate(213deg) brightness(99%) contrast(95%)" }} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => <button key={link.href} onClick={() => scrollToSection(link.href)} className="px-3 py-2 text-sm font-medium transition-colors rounded-lg text-foreground hover:text-primary hover:bg-muted">
                {link.label}
              </button>)}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+33600000000" className="flex items-center gap-2 transition-colors text-muted-foreground hover:text-primary">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">07 50 40 34 99</span>
            </a>
            <Button variant="hero" size="default" onClick={() => scrollToSection("#contact")}>
              Séance offerte
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-lg shadow-custom-lg border-t border-border animate-fade-in">
            <div className="container-custom px-4 py-6 flex flex-col gap-2">
              {navLinks.map(link => <Button key={link.href} variant="ghost" className="justify-start text-base" onClick={() => scrollToSection(link.href)}>
                  {link.label}
                </Button>)}
              <hr className="my-2 border-border" />
              <a href="tel:+33600000000" className="flex items-center gap-2 text-muted-foreground py-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">06 00 00 00 00</span>
              </a>
              <Button variant="hero" size="lg" className="mt-2" onClick={() => scrollToSection("#contact")}>
                Séance découverte offerte
              </Button>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;
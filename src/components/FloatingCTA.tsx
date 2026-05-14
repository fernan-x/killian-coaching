import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-fade-in">
      <Button
        variant="ghost"
        size="icon"
        className="w-8 h-8 rounded-full bg-card shadow-custom-sm"
        onClick={() => setIsDismissed(true)}
        aria-label="Fermer"
      >
        <X className="w-4 h-4" />
      </Button>
      <a href="tel:+33600000000">
        <Button
          variant="hero"
          size="lg"
          className="rounded-full shadow-lg gap-2"
        >
          <Phone className="w-5 h-5" />
          <span className="hidden sm:inline">Appeler maintenant</span>
        </Button>
      </a>
    </div>
  );
};

export default FloatingCTA;

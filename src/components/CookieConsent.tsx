import { useState, useEffect } from "react";
import { initGA } from "./GoogleAnalytics";

const STORAGE_KEY = "cookie_consent";

type ConsentStatus = "accepted" | "refused" | null;

export default function CookieConsent() {
  const [status, setStatus] = useState<ConsentStatus>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentStatus;
    if (stored === "accepted") {
      initGA();
      setStatus("accepted");
    } else if (stored === "refused") {
      setStatus("refused");
    } else {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setStatus("accepted");
    setVisible(false);
    initGA();
  }

  function refuse() {
    localStorage.setItem(STORAGE_KEY, "refused");
    setStatus("refused");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-white border-t border-gray-200 shadow-lg"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-gray-700">
          <p className="font-semibold text-gray-900 mb-1">🍪 Ce site utilise des cookies</p>
          <p>
            Nous utilisons Google Analytics pour mesurer l'audience de notre site et améliorer votre expérience. Ces
            cookies collectent des données de navigation de façon anonymisée. Vous pouvez accepter ou refuser leur
            utilisation.{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary hover:text-primary/80"
            >
              En savoir plus
            </a>
            .
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={refuse}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}

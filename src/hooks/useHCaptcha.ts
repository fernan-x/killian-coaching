import { useEffect, useRef, useCallback } from "react";

declare global {
  interface Window {
    hcaptcha: {
      render: (container: HTMLElement, params: object) => string;
      reset: (widgetId: string) => void;
    };
    onHCaptchaLoad: () => void;
  }
}

const SITE_KEY = import.meta.env.VITE_HCAPTCHA_SITE_KEY as string | undefined;

export function useHCaptcha(containerRef: React.RefObject<HTMLDivElement>) {
  const widgetId = useRef<string | null>(null);
  const tokenRef = useRef<string>("");

  useEffect(() => {
    if (!SITE_KEY || SITE_KEY === "YOUR_HCAPTCHA_SITE_KEY") return;

    const render = () => {
      if (!containerRef.current || widgetId.current !== null) return;
      widgetId.current = window.hcaptcha.render(containerRef.current, {
        sitekey: SITE_KEY,
        callback: (token: string) => { tokenRef.current = token; },
        "expired-callback": () => { tokenRef.current = ""; },
      });
    };

    if (window.hcaptcha) {
      render();
    } else {
      window.onHCaptchaLoad = render;
      const script = document.createElement("script");
      script.src = "https://js.hcaptcha.com/1/api.js?onload=onHCaptchaLoad&render=explicit";
      script.async = true;
      document.head.appendChild(script);
    }
  }, [containerRef]);

  const getToken = useCallback(() => tokenRef.current, []);

  const reset = useCallback(() => {
    tokenRef.current = "";
    if (widgetId.current !== null && window.hcaptcha) {
      window.hcaptcha.reset(widgetId.current);
    }
  }, []);

  return { getToken, reset };
}

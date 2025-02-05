'use client';

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { useCallback, useEffect, useState } from "react";
import Cookies from 'js-cookie';

const COOKIE_CONSENT_KEY = 'cookie-consent-state';
const COOKIE_CONSENT_VALUE = ['not-answered', 'accepted', 'rejected', 'initializing'];

const CookieConsent = () => {
    const [cookieState, setCookieState] = useState('initializing');

    useEffect(() => {
        const state = Cookies.get(COOKIE_CONSENT_KEY);
        if (state) {
            setCookieState(state);
        } else {
            setCookieState('not-answered')
        }
    }, []);

    const onHandleConsent = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      const state = event.currentTarget.getAttribute('data-value');

      if (state && COOKIE_CONSENT_VALUE.includes(state)) {
        Cookies.set(COOKIE_CONSENT_KEY, state);
        setCookieState(state);
      }
    }, []);

    if (cookieState === 'not-answered') {
        return (
            <div className="fixed bottom-0 left-0 p-6 bg-white z-50 w-full flex flex-col gap-4 sm:w-[600px] sm:m-2 sm:rounded-lg">
                <h4 className="text-xl font-bold">🍪 Des cookies, mais pas ceux que l&apos;on mange&nbsp;!</h4>
                <p className="">On les utilise pour rendre votre expérience plus croustillante&nbsp;! En restant ici, vous acceptez leur utilisation.</p>
                <div className="flex gap-4 items-center justify-end">
                    <button
                        onClick={onHandleConsent}
                        data-value='rejected'
                        className="text-primary"
                    >Refuser</button>
                    <button
                        onClick={onHandleConsent}
                        data-value='accepted'
                        className="bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 rounded-lg"
                    >
                        Accepter
                    </button>
                </div>
            </div>
        );
    }

    if (cookieState === 'accepted') {
      return (
        <>
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID ?? ''} />
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ''} />
        </>
      );
    }

    return null;
};

export default CookieConsent;
import { useCallback } from "react";

export const MAIL_TO = 'mailto:killiancoaching.pro@gmail.com';

export const useMailTo = () => {
    const onMailTo = useCallback(() => {
        window.location.href = MAIL_TO;
    }, []);

    return onMailTo;
}
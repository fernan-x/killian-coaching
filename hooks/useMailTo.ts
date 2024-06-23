import { useCallback } from "react";

export const useMailTo = () => {
    const onMailTo = useCallback(() => {
        window.location.href = 'mailto:killiancoaching.pro@gmail.com';
    }, []);

    return onMailTo;
}
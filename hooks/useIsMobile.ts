'use client';

import { useEffect, useState } from "react";

const useIsMobile = () => {
    const [width, setWidth] = useState<number>(0);

    function handleWindowSizeChange() {
        if (typeof window === 'undefined') return;
        setWidth(window?.innerWidth || 0);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return width <= 768;
}

export default useIsMobile;
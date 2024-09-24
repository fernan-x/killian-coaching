'use client'

import React from 'react';
import { useMailTo } from '@/hooks/useMailTo';
import { cn } from '@/lib/utils';

interface CTAButton extends React.PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>> {
    contrast?: boolean;
}

const CTAButton = ({children, className, contrast, ...props}: CTAButton) => {
    const onMailTo = useMailTo();
    return <button
        className={cn(
            className,
            'rounded-lg text-xl py-3 px-6 hover:opacity-90',
            contrast ? 'bg-secondary text-secondary-foreground' : 'bg-cta text-primary-foreground',
        )}
        onClick={onMailTo}
        {...props}
    >
        {children}
    </button>;
};

export default CTAButton;
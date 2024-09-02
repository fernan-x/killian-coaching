'use client'

import React from 'react';
import { useMailTo } from '@/hooks/useMailTo';
import { cn } from '@/lib/utils';

const CTAButton = ({children, className, ...props}: React.PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>>) => {
    const onMailTo = useMailTo();
    return <button
        className={cn(
            className,
            'rounded-lg text-xl bg-[#4EC2E8] text-primary-foreground py-3 px-6 hover:opacity-90',
        )}
        onClick={onMailTo}
        {...props}
    >
        {children}
    </button>;
};

export default CTAButton;
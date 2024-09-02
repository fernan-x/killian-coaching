import { cn } from '@/lib/utils';
import React from 'react';

const Badge = ({ children, ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) => {
    return <span
        {...props}
        className={cn(
            props.className,
            'rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground w-fit',
        )}
    >
        {children}
    </span>;
};

export default Badge;
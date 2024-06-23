'use client'

import React from 'react';
import { Button } from './button';
import { useMailTo } from '@/hooks/useMailTo';

const MailToButton = ({ children, ...props }: React.PropsWithChildren & { className?: string }) => {
    const onMailTo = useMailTo();

    return <Button onClick={onMailTo} {...props}>{children}</Button>;
};

export default MailToButton;
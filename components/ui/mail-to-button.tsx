'use client'

import React from 'react';
import { Button, ButtonProps } from './button';
import { useMailTo } from '@/hooks/useMailTo';

const MailToButton = ({ children, ...props }: ButtonProps) => {
    const onMailTo = useMailTo();

    return <Button onClick={onMailTo} {...props}>{children}</Button>;
};

export default MailToButton;
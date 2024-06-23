'use client'

import React from 'react';
import { Button } from './button';
import { useMailTo } from '@/hooks/useMailTo';

const MailToButton = ({ children }: React.PropsWithChildren) => {
    const onMailTo = useMailTo();

    return <Button onClick={onMailTo}>{children}</Button>;
};

export default MailToButton;
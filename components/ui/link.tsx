import React, { PropsWithChildren } from 'react';

interface LinkProps extends PropsWithChildren {
    to: string;
}

const Link = ({ children, to }: LinkProps) => {
  return <a className="text-primary hover:text-primary-hover underline" href={to} target="_blank">{children}</a>;
};

export default Link;
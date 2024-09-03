import React from 'react';

interface CommonProps extends React.PropsWithChildren {
    contrast?: boolean;
    className?: string;
}

const H1 = ({ contrast, children, className }: CommonProps) => {
    return <h1 className={`text-5xl font-bold ${contrast ? 'text-[#E7F3FF]' : 'text-[#000229]'} ${className ?? ''}`}>{children}</h1>
}

const H2 = ({ contrast, children, className }: CommonProps) => {
    return <h2 className={`text-4xl font-bold ${contrast ? 'text-[#E7F3FF]' : 'text-[#000229]'} ${className ?? ''}`}>{children}</h2>
}
const H3 = ({ contrast, children, className }: CommonProps) => {
    return <h3 className={`text-3xl font-bold ${contrast ? 'text-[#E7F3FF]' : 'text-[#000229]'} ${className ?? ''}`}>{children}</h3>
}
const H4 = ({ contrast, children, className }: CommonProps) => {
    return <h4 className={`text-2xl font-bold ${contrast ? 'text-[#E7F3FF]' : 'text-[#000229]'} ${className ?? ''}`}>{children}</h4>
}

const Paragraph = ({ contrast, children, className }: CommonProps) => {
  return <span className={`text-base ${contrast ? 'text-[#E7F3FF]' : 'text-[#000229ac]'} ${className ?? ''}`}>{children}</span>;
};

export { H1, H2, H3, H4, Paragraph };
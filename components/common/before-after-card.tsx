import React from 'react';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

type BeforeAfterCardProps = {
  picture: StaticImageData;
  content: string;
  revert?: boolean;
}

const BeforeAfterCard = ({
  picture,
  content,
  revert = false,
}: BeforeAfterCardProps) => {
  return <div className={cn(
    'relative flex gap-6 items-end justify-end p-12 min-h-[350px]',
    revert ? 'justify-start' : 'justify-end',
  )}>
    <div className={cn(
      'h-[300px] w-[300px] absolute z-[2] bg-red-500',
      revert ? 'right-0' : 'left-0',
    )}>
      <Image src={picture} width={300} height={300} alt='Placeholder' />
    </div>
    <div className={cn(
      'w-[80%] bg-primary text-primary-foreground p-12 translate-y-12 rounded-lg z-[1]',
      revert ? 'pr-40' : 'pl-40',
    )}>
      {content}
    </div>
  </div>;
};

export default BeforeAfterCard;
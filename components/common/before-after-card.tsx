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
}: BeforeAfterCardProps) => {
  return <div className={cn(
    'flex flex-row gap-12 items-center justify-center w-full',
  )}>
    <div className=''>
      {content}
    </div>
    <Image src={picture} width={300} height={300} alt='Before after picture' />
  </div>;
};

export default BeforeAfterCard;
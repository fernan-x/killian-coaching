import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { H3, Paragraph } from '../ui/text';
import Badge from '../ui/badge';

type BeforeAfterCardProps = {
  picture: StaticImageData;
  title: string;
  content: string;
  badges?: string[];
  revert?: boolean;
}

const BeforeAfterCard = ({
  picture,
  content,
  badges,
  title,
}: BeforeAfterCardProps) => {
  return <div className='flex flex-col-reverse lg:flex-row gap-6 lg:gap-20 items-center justify-center w-full lg:px-20'>
    <div className='flex flex-col gap-6'>
      <H3>{title}</H3>
      {badges && <div className='flex gap-3 items-center flex-wrap'>
          {badges.map((badge, index) => <Badge key={index}>{badge}</Badge>)}
      </div>}
      <Paragraph>{content}</Paragraph>
    </div>
    <Image src={picture} width={300} height={300} alt='Before after picture' className='rounded-lg shadow-md object-cover' />
  </div>;
};

export default BeforeAfterCard;
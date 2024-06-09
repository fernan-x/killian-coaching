import Image from 'next/image';
import React from 'react';
import PlaceholderImg from '@/assets/images/placeholder.jpg';

const Placeholder = () => {
  return <Image src={PlaceholderImg} width={400} height={300} alt='Placeholder' />;
};

export default Placeholder;
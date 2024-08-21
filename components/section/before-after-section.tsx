import React from 'react';
import BeforeAfterCard from '../common/before-after-card';
import PlaceholderImg from '@/assets/images/placeholder.jpg';

const BeforeAfterSection = () => {
  return <div className='flex flex-col gap-9 w-full'>
    <BeforeAfterCard
      picture={PlaceholderImg}
      content='Mathieu a choisi un coaching à distance qui correspond mieux à son mode de vie.
      Nous avons construit un programme complet d&apos;exercices et alimentaire ensemble.
      En moins d&apos;un an il a atteint son objectif de perte de poids
      et il se focus maintenant sur une prise de masse.'
    />
    <BeforeAfterCard
      picture={PlaceholderImg}
      content='Coline a choisi le coaching a domicile afin de se motiver et
      de s&apos;assurer un suivi de proximité pour débuter une nouvelle pratique sportive.'
      revert
    />
  </div>;
};

export default BeforeAfterSection;
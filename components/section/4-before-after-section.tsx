import React from 'react';
import { H2 } from '../ui/text';
import Container from '../ui/container';
import BeforeAfterCard from '../common/before-after-card';
import BeforeAfterColine from '@/assets/images/before-after-coline.png';
import BeforeAfterMathieu from '@/assets/images/before-after-mathieu.png';

const BeforeAfterSection = () => {
  return <Container>
    <H2>Ils me font confiance pour leur santé</H2>
    <div className='flex flex-col justify-center items-center gap-9 w-full'>
        <BeforeAfterCard
            picture={BeforeAfterMathieu}
            content='Mathieu a choisi un coaching à distance qui correspond mieux à son mode de vie.
            Nous avons construit un programme complet d&apos;exercices et alimentaire ensemble.
            En moins d&apos;un an il a atteint son objectif de perte de poids
            et il se focus maintenant sur une prise de masse.'
        />
        <BeforeAfterCard
            picture={BeforeAfterColine}
            content='Coline a choisi le coaching a domicile afin de se motiver et
            de s&apos;assurer un suivi de proximité pour débuter une nouvelle pratique sportive.'
        />
    </div>
  </Container>;
};

export default BeforeAfterSection;
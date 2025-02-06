import React from 'react';
import Container from '../ui/container';
import { H2 } from '../ui/text';
import HomePagePricingCard from '../common/homepage-pricing-card';

const PricingSection = () => {
  return <Container bg='dark'>
    <H2 contrast className='uppercase text-center lg:text-left'>Mes différentes offres</H2>
    <div className='flex flex-row gap-12 items-center justify-center flex-wrap'>
        <HomePagePricingCard
            title='Séance découverte'
            startingAtLabel='Première séance'
            price='Offerte'
        />
        <HomePagePricingCard
            title='Formule 10 séances'
            price='36€'
            frequency='/ séance'
        />
        <HomePagePricingCard
            title='Formule 20 séances'
            price='33€'
            frequency='/ séance'
        />
        <HomePagePricingCard
            title='Formule 30 séances'
            price='30€'
            frequency='/ séance'
        />
        <HomePagePricingCard
            title='Coaching en entreprise'
            price='Sur&nbsp;devis'
            fixedPrice
        />
    </div>
  </Container>;
};

export default PricingSection;
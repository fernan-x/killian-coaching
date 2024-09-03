import React from 'react';
import Container from '../ui/container';
import { H2 } from '../ui/text';
import HomePagePricingCard from '../common/homepage-pricing-card';

const PricingSection = () => {
  return <Container bg='dark'>
    <H2 contrast>Mes différentes offres</H2>
    <div className='flex flex-row gap-12 items-center justify-center flex-wrap'>
        <HomePagePricingCard
            title='Coaching à domicile'
            price='36€'
            frequency='/ séance'
            redirectUrl='/coaching#domicile'
        />
        <HomePagePricingCard
            title='Coaching à distance'
            price='65€'
            frequency='/ mois'
            redirectUrl='/coaching#distance'
        />
        <HomePagePricingCard
            title='Coaching en groupe'
            price='10€'
            frequency='/ personne'
            redirectUrl='/coaching#groupe'
        />
        <HomePagePricingCard
            title='Coaching en entreprise'
            price='Sur&nbsp;devis'
            redirectUrl='/coaching#entreprise'
            fixedPrice
        />
    </div>
  </Container>;
};

export default PricingSection;
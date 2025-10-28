import React from 'react';
import Container from '../ui/container';
import { H2 } from '../ui/text';
import HomePagePricingCard from '../common/homepage-pricing-card';
import Link from '../ui/link';

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
            title='Coaching à domicile'
            price='30€'
            startingAtLabel='À partir de*'
            frequency='/ séance'
        />
        <HomePagePricingCard
            title='Coaching en entreprise'
            price='Sur&nbsp;devis'
            fixedPrice
        />
    </div>
    <p className='text-white italic text-sm'>*Après déduction de 50% du <Link to="/service-a-la-personne" variant="secondary" target="_self">crédit d&apos;impôt avance immédiate</Link>.</p>
  </Container>;
};

export default PricingSection;
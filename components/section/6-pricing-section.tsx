import React from 'react';
import Container from '../ui/container';
import { H2, H4, Paragraph } from '../ui/text';
import { Button } from '../ui/button';

interface PricingCardProps {
    title: string;
    price: string;
}

const PricingCard = ({
    title,
    price,
}: PricingCardProps) => {
    return <div className='ring-1 ring-white p-6 rounded-lg relative flex flex-col gap-6 w-[250px] h-[300px]'>
        <H4 contrast className='text-center'>{title}</H4>
        <Paragraph contrast className='!text-3xl flex flex-1 items-center justify-center'>{price}</Paragraph>
        <Button variant='secondary'>Réserver</Button>
    </div>;
};

const PricingSection = () => {
  return <Container bg='dark'>
    <H2 contrast>Mes différentes offres</H2>
    <div className='flex flex-row gap-12 items-center justify-center flex-wrap'>
        <PricingCard
            title='Coaching à domicile'
            price='36€ / séance'
        />
        <PricingCard
            title='Coaching à distance'
            price='65€ / mois'
        />
        <PricingCard
            title='Coaching en groupe'
            price='10€ / personne'
        />
        <PricingCard
            title='Coaching en entreprise'
            price='Sur devis'
        />
    </div>
  </Container>;
};

export default PricingSection;
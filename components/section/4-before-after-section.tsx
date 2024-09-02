import React from 'react';
import { H2 } from '../ui/text';
import Container from '../ui/container';
import BeforeAfterCard from '../common/before-after-card';
import BeforeAfterColine from '@/assets/images/before-after-coline.png';
import BeforeAfterMathieu from '@/assets/images/before-after-mathieu.png';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const BeforeAfterSection = () => {
  return <Container>
    <H2>Ils me font confiance pour leur santé</H2>
    <Carousel className='w-full py-9'>
        <CarouselContent>
            <CarouselItem>
                <BeforeAfterCard
                    title='Coline'
                    picture={BeforeAfterColine}
                    badges={['3 mois', 'Taille: -4cm', 'Hanche: -4cm']}
                    content='Coline a choisi le coaching a domicile afin de se motiver et
                    de s&apos;assurer un suivi de proximité pour débuter une nouvelle pratique sportive.'
                />
            </CarouselItem>
            <CarouselItem>
                <BeforeAfterCard
                    title='Mathieu'
                    picture={BeforeAfterMathieu}
                    badges={['8 mois', 'Poid: -14kg', 'Taille: -9cm', 'Hanche: -10cm']}
                    content='Mathieu a choisi un coaching à distance qui correspond mieux à son mode de vie.
                    Nous avons construit un programme complet d&apos;exercices et alimentaire ensemble.
                    En moins d&apos;un an il a atteint son objectif de perte de poids
                    et il se focus maintenant sur une prise de masse.'
                />
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  </Container>;
};

export default BeforeAfterSection;
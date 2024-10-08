import React from 'react';
import { H2 } from '../ui/text';
import Container from '../ui/container';
import BeforeAfterCard from '../common/before-after-card';
import BeforeAfterColyne from '@/assets/images/before-after-colyne.png';
import BeforeAfterMathieu from '@/assets/images/before-after-mathieu.png';
import BeforeAfterSebastien from '@/assets/images/before-after-sebastien.png';
import BeforeAfterKylian from '@/assets/images/before-after-kylian.png';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const BeforeAfterSection = () => {
  return <Container>
    <H2 className='uppercase text-center lg:text-left'>Ils me font confiance pour leur santé</H2>
    <Carousel className='w-full'>
        <CarouselContent>
            <CarouselItem>
                <BeforeAfterCard
                    title='Colyne - 21 ans'
                    picture={BeforeAfterColyne}
                    badges={['3 mois', 'Recomposition corporelle: -1kg', 'Taille: -4cm', 'Hanche: -4cm']}
                    content='Colyne a choisi le coaching à domicile afin de se motiver et
                    de s&apos;assurer un suivi de proximité pour débuter une nouvelle pratique sportive.'
                />
            </CarouselItem>
            <CarouselItem>
                <BeforeAfterCard
                    title='Mathieu - 23 ans'
                    picture={BeforeAfterMathieu}
                    badges={['8 mois', 'Poids: -14kg', 'Taille: -9cm', 'Hanche: -10cm']}
                    content='Mathieu a choisi un coaching à distance qui correspond mieux à son mode de vie.
                    Nous avons construit un programme complet d&apos;exercices et alimentaire ensemble.
                    En moins d&apos;un an il a atteint son objectif de perte de poids
                    et il se focus maintenant sur une prise de masse.'
                />
            </CarouselItem>
            <CarouselItem>
                <BeforeAfterCard
                    title='Sébastien - 37 ans'
                    picture={BeforeAfterSebastien}
                    badges={['6 mois', 'Poids: -16kg', 'Taille: -16cm', 'Hanche: -14cm']}
                    content='Sébastien m&apos;a contacté suite à une opération du dos afin de pouvoir reprendre le travail dans de bonnes conditions.
                    Nous avons donc adapté le programme d&apos;entrainement à sa pathologie ainsi que la nutrition.
                    Il a perdu 16kg en 6 mois.'
                />
            </CarouselItem>
            <CarouselItem>
                <BeforeAfterCard
                    title='Kylian - 18 ans'
                    picture={BeforeAfterKylian}
                    badges={['3 mois', 'Poids: -11kg', 'Taille: -12cm', 'Poitrine: -6cm']}
                    content='Kylian m&apos;a contacté dans l&apos;optique d&apos;une perte de poids afin de se sentir mieux dans son corps.
                    Nous avons donc adapté l&apos;entraînement et la nutrition à son objectif objectif de perte de poids.'
                />
            </CarouselItem>
        </CarouselContent>

        <div className='relative flex justify-around mt-6 md:hidden'>
            <CarouselPrevious variant='link' noTranslate />
            <CarouselNext variant='link' noTranslate />
        </div>
        <div className='hidden md:flex'>
            <CarouselPrevious variant='link' />
            <CarouselNext variant='link' />
        </div>
    </Carousel>
  </Container>;
};

export default BeforeAfterSection;
import React from 'react';
import Container from '../ui/container';
import { H2 } from '../ui/text';
import { REVIEWS } from '@/datas/reviews';
import ReviewCard from '../common/review-card';
import Image from 'next/image';
import GoogleLogo from '@/assets/images/google-reviews-logo.png';
import Link from '../ui/link';

const ReviewSection = () => {
    return <Container>
        <H2>Ils me font confiance pour leur santé</H2>
        <div>

        </div>
        <H2>Et voici ce qu&apos;ils en pensent</H2>
        <Image src={GoogleLogo} height={100} alt='logo google' />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {REVIEWS.map((review, idx) => <ReviewCard
                key={review.id}
                comment={review.comment}
                user={review.user}
                link={''}
                picture={undefined}
                note={review.note}
                className={idx > Math.round(REVIEWS.length / 2) ? 'hidden lg:block': ''}
            />)}
        </div>
        <Link to='https://maps.app.goo.gl/HpxHoYC6uk9yPy2W7'>Voir tous les avis</Link>
    </Container>;
};

export default ReviewSection;
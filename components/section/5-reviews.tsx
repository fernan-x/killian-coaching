import React from 'react';
import Container from '../ui/container';
import { H2 } from '../ui/text';
import { REVIEWS } from '@/datas/reviews';
import ReviewCard from '../common/review-card';

const ReviewSection = () => {
    return <Container>
        <H2>Ils m&apos;ont fait confiance</H2>
        <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {REVIEWS.map(review => <ReviewCard
                key={review.id}
                comment={review.comment}
                user={review.user}
                link={''}
                picture={undefined}
                note={review.note}
            />)}
        </div>
    </Container>;
};

export default ReviewSection;
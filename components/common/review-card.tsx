import RatingBar from "../ui/rating-bar";
import { twMerge } from "tailwind-merge";

interface ReviewCardProps {
    comment: string;
    user: string;
    link: string;
    picture: any;
    note: number;
    className?: string;
}

const ReviewCard = ({ comment, user, picture, note, className }: ReviewCardProps) => {
    return <figure className={twMerge('rounded-lg shadow-md border ring-1 ring-primary p-9', className)}>
        <figcaption className='mb-6 flex flex-row gap-3 items-center'>
            <div>
                <span className="font-semibold">{user}</span>
                <RatingBar note={note} />
            </div>
        </figcaption>
        <blockquote>
            {comment}
        </blockquote>
    </figure>
}

export default ReviewCard;
import { getAvatarContent } from "@/lib/utils";
import { Avatar, AvatarFallback } from "../ui/avatar";
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
    return <figure className={twMerge('rounded-md shadow-md border border-slate-100 h-fit', className)}>
        <blockquote className='p-12'>
            <svg className="h-6 mb-3 text-primary" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
            </svg>
            <p>
                {comment}
            </p>
        </blockquote>
        <figcaption className='p-4 border-t border-slate-100 flex flex-row gap-3 items-center'>
            <Avatar>
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                <AvatarFallback>{getAvatarContent(user)}</AvatarFallback>
            </Avatar>
            <div>
                <span className="font-semibold">{user}</span>
                <RatingBar note={note} />
            </div>
        </figcaption>
    </figure>
}

export default ReviewCard;
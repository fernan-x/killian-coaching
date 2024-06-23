import { getAvatarContent } from "@/lib/utils";
import { Avatar, AvatarFallback } from "../ui/avatar";
import RatingBar from "../ui/rating-bar";

interface ReviewCardProps {
    comment: string;
    user: string;
    link: string;
    picture: any;
    note: number;
}

const ReviewCard = ({ comment, user, picture, note }: ReviewCardProps) => {
    return <figure className='rounded-xl shadow-md border border-slate-100 h-fit'>
        <blockquote className='p-12'>
            <p>
                &quot;{comment}&quot;
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
import { H4, Paragraph } from "../ui/text";
import { cn } from "@/lib/utils";
import MailToButton from "../ui/mail-to-button";

interface HomePagePricingCardProps {
    title: string;
    price: string;
    frequency?: string;
    fixedPrice?: boolean;
    startingAtLabel?: string;
}

const HomePagePricingCard = ({
    title,
    price,
    frequency,
    fixedPrice = false,
    startingAtLabel = '',
}: HomePagePricingCardProps) => {
    return <div className='ring-1 ring-white p-6 rounded-lg relative flex flex-col gap-6 w-[250px] h-[320px]'>
        <H4 contrast className='text-center'>{title}</H4>
        <hr />
        {fixedPrice ? null : <Paragraph contrast className="flex items-center justify-center gap-x-1 text-base font-semibold">
            {startingAtLabel !== '' ? startingAtLabel : 'À partir de'}
        </Paragraph>}
        <Paragraph
            contrast
            className={cn(
                "flex justify-center gap-x-2 flex-1",
                fixedPrice ? 'items-center' : 'items-baseline'
            )}
        >
            <span className="text-5xl font-bold tracking-tight">{price}</span>
            {frequency && <span className="text-sm font-semibold leading-6 tracking-wide">{frequency}</span>}
        </Paragraph>
        <MailToButton variant='secondary'>Réserver</MailToButton>
    </div>;
};

export default HomePagePricingCard;
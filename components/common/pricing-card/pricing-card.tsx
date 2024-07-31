import MailToButton from '@/components/ui/mail-to-button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import React from 'react';
import { CircleHelp } from "lucide-react";

interface PricingCardProps {
  title: string;
  description: string;
  price?: string;
  frequency?: string;
  priceTitle?: string;
  subTitle?: string;
  features: string[];
  buttonTitle?: string;
  subTitleTooltip?: React.ReactNode;
}

const PricingCard = ({ title, description, price, features, frequency, priceTitle, buttonTitle, subTitle, subTitleTooltip }: PricingCardProps) => {
  const buttonText = buttonTitle || <>Réserver une séance d&apos;essai</>;
  return (
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
        <p className="mt-6 text-base leading-7 text-gray-600">{description}</p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-primary">Inclus dans la prestation</h4>
          <div className="h-px flex-auto bg-gray-100"></div>
        </div>
        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
            {features.map((feature, index) => (
              <li key={index} className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="h-full rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            {priceTitle &&
              <div className='flex items-center justify-center gap-x-1 text-gray-600 text-base font-semibold'>
                <span>{priceTitle}</span>
                {subTitleTooltip && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger><CircleHelp className="h-4 w-4" /></TooltipTrigger>
                      <TooltipContent>
                        <p>{subTitleTooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            }
            {price &&
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">{price}</span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">{frequency}</span>
              </p>
            }
            <MailToButton className='mt-10'>{buttonText}</MailToButton>
            {subTitle &&
              <span className="mt-6 text-xs leading-5 text-gray-600">
                {subTitle}
              </span>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
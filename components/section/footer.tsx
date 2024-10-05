import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import NavLink from '../ui/nav-link';
import { MAIL_TO } from '@/hooks/useMailTo';
import fitTruckLogo from '@/assets/images/logo-fit-truck.png';
import logo from '@/assets/images/logo-white.png';

const Footer = () => {
    const year = new Date().getFullYear();
    return <footer className="flex flex-col items-center py-12 px-6 md:px-28 gap-6 bg-primary text-primary-foreground">
        <div className='flex gap-2 sm:gap-6 items-center flex-col sm:flex-row'>
            <Image src={fitTruckLogo} alt='Fit truck' height={70} />
            <div className='h-[50px] w-[1px] bg-primary-foreground hidden sm:block'></div>
            <Image src={logo} alt='Killian Coaching' height={50} />
        </div>
        <div className='flex flex-row gap-6 flex-wrap'>
            <NavLink href='/coaching'>Coaching</NavLink>
            {/* <NavLink href='/fit-truck'>Fit Truck</NavLink> */}
            <NavLink href={MAIL_TO}>Contact</NavLink>
            <NavLink href='https://www.instagram.com/killian_coaching/' target="_blank">
                <Instagram size={24} className="text-primary-foreground" />
            </NavLink>
        </div>
        <div className='text-sm'>
            © {year} Killian Coaching, Fit truck. All rights reserved.
        </div>
    </footer>;
};

export default Footer;
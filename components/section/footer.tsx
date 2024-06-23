import React from 'react';
import { H4 } from '../ui/text';

const Footer = () => {
    return <footer className="flex flex-col p-12 gap-9 bg-primary text-primary-foreground">
        <H4 contrast>Killian Coaching</H4>
        <div className='flex flex-col md:flex-row gap-9'>
            <div className='flex-1 flex flex-col gap-4'>
                <span>Coaching</span>
                <span>Ma solution Fit Truck</span>
                <span>Mention légales</span>
            </div>
            <div className='flex-1'>
                Me retrouver au quotidien sur instagram
            </div>
        </div>
    </footer>;
};

export default Footer;
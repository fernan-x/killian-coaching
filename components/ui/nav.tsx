import Image from "next/image";
import { Button } from "./button";
import Logo from "@/assets/images/logo-white.png";
import { Menu, Instagram } from "lucide-react";
import Link from "next/link";
import { MAIL_TO } from "@/hooks/useMailTo";
import React from "react";

const Nav = () => {
  // TODO : Create a mobile nav context
  // https://www.youtube.com/watch?v=EtPRSidpxSU
  return (
    <React.Fragment>
      <nav
        className={`fixed flex w-full bg-[#000229]/40 backdrop-blur p-6 items-center gap-12 z-20 top-0 start-0 h-20`}
      >
        <div className="flex-1 flex items-center gap-12">
          <Link href="/" className="ml-12">
            <Image src={Logo} alt="Killian coaching logo" height={50} />
          </Link>
          <ul className={"hidden flex-1 justify-end gap-12 md:flex text-[#E7F3FF]"}>
            {/* TODO : Hover animation */}
            <li><Link href="/coaching">Coaching</Link></li>
            <li><Link href="/fit-truck">Fit Truck</Link></li>
            <li><Link href={MAIL_TO}>Contact</Link></li>
          </ul>
        </div>
        <Link href="https://www.instagram.com/killian_coaching/" target="_blank" className="hidden md:flex">
          <Instagram size={24} className="text-[#E7F3FF]" />
        </Link>
        <Button variant="link" size="icon" className="md:hidden">
          <Menu size={24} />
        </Button>
      </nav>
    </React.Fragment>
  );
};

export default Nav;

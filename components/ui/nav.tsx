import Image from "next/image";
import Logo from "@/assets/images/logo-white.png";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { MAIL_TO } from "@/hooks/useMailTo";
import React from "react";
import MobileNav from "./mobile-nav";

type NavLinkProps = React.PropsWithChildren<React.ComponentProps<typeof Link>> & {
  href: string;
};

const NavLink = ({ children, href, ...props }: NavLinkProps) => {
  return <li className="relative group list-none">
    <Link href={href} {...props}>
      {children}
    </Link>
    <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-[#E7F3FF] group-hover:w-1/2 group-hover:transition-all"></span>
    <span className="absolute -bottom-2 right-1/2 w-0 h-0.5 bg-[#E7F3FF] group-hover:w-1/2 group-hover:transition-all"></span>
  </li>
}

const Nav = () => {
  return (
    <React.Fragment>
      <MobileNav />
      <nav
        className={`fixed hidden md:flex w-full bg-[#000229]/40 backdrop-blur p-6 items-center gap-12 z-20 top-0 start-0 h-20`}
      >
        <div className="flex-1 flex items-center gap-12">
          <Link href="/" className="ml-12">
            <Image src={Logo} alt="Killian coaching logo" height={50} />
          </Link>
          <ul className={"hidden flex-1 justify-end gap-12 md:flex text-[#E7F3FF]"}>
            <NavLink href="/coaching">Coaching</NavLink>
            {/* <NavLink href="/fit-truck">Fit Truck</NavLink> */}
            <NavLink href={MAIL_TO}>Contact</NavLink>
          </ul>
        </div>
        <NavLink href='https://www.instagram.com/killian_coaching/' target="_blank">
          <Instagram size={24} className="text-[#E7F3FF]" />
        </NavLink>
      </nav>
    </React.Fragment>
  );
};

export default Nav;

import Image from "next/image";
import { Button } from "./button";
import Logo from "@/assets/images/logo-white.png";
import { Menu, Instagram } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav
      className={`fixed flex w-full bg-[#000229]/40 backdrop-blur p-6 items-center gap-6 fixed z-20 top-0 start-0 h-20`}
    >
      <div className="flex-1 flex items-center gap-6">
        <Link href="/">
          <Image src={Logo} alt="Killian coaching logo" height={50} />
        </Link>
        <ul className="hidden flex-1 justify-end gap-6 md:flex text-[#E7F3FF]">
          {/* TODO : Hover animation */}
          <li><Link href="/coaching">Coaching</Link></li>
          <li><Link href="/fit-truck">Fit Truck</Link></li>
          {/* <li><Link href="/contact">Contact</Link></li> */}
        </ul>
      </div>
      <Link href="https://www.instagram.com/killian_coaching/" target="_blank" className="hidden md:flex">
        <Instagram size={24} className="text-[#E7F3FF]" />
      </Link>
      <Button variant="link" size="icon" className="md:hidden">
        <Menu size={24} />
      </Button>
    </nav>
  );
};

export default Nav;

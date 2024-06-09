import Image from "next/image";
import { Button } from "./button";
import Logo from "@/assets/images/logo-white.png";
import { Menu, Instagram } from "lucide-react";

const Nav = () => {
  return (
    <nav
      className={`fixed flex w-full bg-[#000229]/40 backdrop-blur p-6 items-center gap-6 fixed z-20 top-0 start-0 h-20`}
    >
      <div className="flex-1 flex items-center gap-6">
        <Image src={Logo} alt="Killian coaching logo" height={50} />
        <ul className="hidden flex-1 justify-end gap-6 md:flex text-[#E7F3FF]">
          <li>Coaching</li>
          <li>Fit Truck</li>
          <li>Contact</li>
        </ul>
      </div>
      <Button variant="link" size="icon" className="hidden md:flex">
        <Instagram size={24}/>
      </Button>
      <Button variant="link" size="icon" className="md:hidden">
        <Menu size={24} />
      </Button>
    </nav>
  );
};

export default Nav;

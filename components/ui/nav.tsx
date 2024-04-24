"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./button";
import Logo from "@/assets/images/logo-dark.jpeg";
import { Menu } from "lucide-react";

const Nav = () => {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY + 80;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  return (
    <nav
      className={`flex w-full bg-slate-50 p-6 items-center gap-6 fixed z-20 top-0 start-0 h-20 transition-opacity ease-in-out delay-150 duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex-1 flex items-center gap-6">
        <Image src={Logo} alt="Killian coaching logo" height={50} />
        <ul className="hidden flex-1 justify-center gap-6 md:flex">
          <li>Elem 1</li>
          <li>Elem 1</li>
          <li>Elem 1</li>
        </ul>
      </div>
      <Button variant="link" size="icon" className="md:hidden">
        <Menu size={24} />
      </Button>
      <Button className="hidden md:block">Réserver séance gratuite</Button>
    </nav>
  );
};

export default Nav;

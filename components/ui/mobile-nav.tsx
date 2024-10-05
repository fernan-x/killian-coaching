'use client';

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { Menu, XIcon } from "lucide-react";
import Logo from "@/assets/images/logo-fit-truck-cropped.png";
import useIsMobile from "@/hooks/useIsMobile";
import CTAButton from "./cta-button";

type MobileNavItemProps = {
    onClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
    redirectUrl: string;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

const MobileNavItem = ({
    onClick,
    redirectUrl,
    children,
    ...props
}: MobileNavItemProps) => {
    return (
        <div
            className="cursor-pointer text-2xl relative group text-primary-foreground"
            onClick={onClick}
            data-redirect={redirectUrl}
            {...props}
        >
            {children}
            <span className="absolute -bottom-2 left-1/2 w-0 h-1 bg-primary-foreground group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-2 right-1/2 w-0 h-1 bg-primary-foreground group-hover:w-1/2 group-hover:transition-all"></span>
        </div>
    );
}

const MobileNav = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const onHandleClick = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = isOpen && isMobile ? "hidden" : "auto";
    }
  }, [isOpen, isMobile]);

  const onHandleRedirect = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    const redirectUrl = e.currentTarget.getAttribute("data-redirect");
    if (redirectUrl) {
      onHandleClick();
      router.push(redirectUrl);
    }
  }, [onHandleClick, router]);

  if (!isMobile) return null;

  return <React.Fragment>
    <nav
      className={`fixed w-full ${isOpen ? 'bg-primary' : 'bg-[#000229]/40'} backdrop-blur p-6 items-center gap-12 z-20 top-0 start-0 h-20 md:hidden flex`}
    >
      <div className="flex-1 flex items-center gap-12">
        <Link href="/" className="lg:ml-12">
          <Image src={Logo} alt="Killian coaching logo" height={50} />
        </Link>
      </div>
      <Button variant="link" size="icon" className="text-primary-foreground" onClick={onHandleClick}>
          {isOpen ? <XIcon size={24} /> : <Menu size={24} />}
        </Button>
    </nav>
    {isOpen && (
      <div className="fixed w-screen h-[calc(100%-5rem)] bg-primary z-20 mt-20 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-12 items-center">
          <MobileNavItem onClick={onHandleRedirect} redirectUrl="/">Accueil</MobileNavItem>
          <MobileNavItem onClick={onHandleRedirect} redirectUrl="/coaching">Coaching</MobileNavItem>
          <CTAButton contrast>Réserver une séance d&apos;essai</CTAButton>
        </div>
      </div>
    )}
  </React.Fragment>
};

export default MobileNav;
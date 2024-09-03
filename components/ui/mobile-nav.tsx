'use client';

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "./link";
import { MAIL_TO } from "@/hooks/useMailTo";

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
        <span
            className="cursor-pointer"
            onClick={onClick}
            data-redirect={redirectUrl}
            {...props}
        >
            {children}
        </span>
    );
}

const MobileNav = () => {
    const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onHandleClick = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen]);

  const onHandleRedirect = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    const redirectUrl = e.currentTarget.getAttribute("data-redirect");
    if (redirectUrl) {
      onHandleClick();
      router.push(redirectUrl);
    }
  }, [onHandleClick, router]);

  return <div className="absolute w-screen h-screen bg-white z-20 p-9 md:hidden">
    <div className="flex w-full justify-end cursor-pointer" onClick={onHandleClick}>❌</div>
    <div className="mt-20 flex flex-col gap-12 items-center text-black">
        <MobileNavItem onClick={onHandleRedirect} redirectUrl="/">Accueil</MobileNavItem>
        <MobileNavItem onClick={onHandleRedirect} redirectUrl="/coaching">Coaching</MobileNavItem>
        <MobileNavItem onClick={onHandleRedirect} redirectUrl="/fit-truck">Fit Truck</MobileNavItem>
        <Link to={MAIL_TO}>Contact</Link>
    </div>
    </div>;
};

export default MobileNav;
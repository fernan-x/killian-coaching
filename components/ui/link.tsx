import React, { PropsWithChildren } from 'react';
import { cn } from "@/lib/utils";

interface LinkProps extends PropsWithChildren {
  to: string;
  variant?: "default" | "secondary" | "unstyled";
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const variantClasses: Record<NonNullable<LinkProps["variant"]>, string> = {
  default: "text-primary hover:text-primary-hover underline",
  secondary: "text-secondary hover:text-secondary-hover underline",
  unstyled: "",
};

const Link = ({ children, to, variant = "default", className, target = "_blank" }: LinkProps) => {
  return (
    <a
      className={cn(variantClasses[variant], className)}
      href={to}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};

export default Link;
'use client'

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

const FadeOnAppear = ({ children, ...props }: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
    const { isIntersecting, ref } = useIntersectionObserver({
        threshold: 0.1,
        freezeOnceVisible: true,
    })

  return (
    <div
        {...props}
        ref={ref}
        className={cn(
            "transition-opacity duration-500 ease-in-out",
            isIntersecting ? "opacity-100" : "opacity-0",
            props.className,
        )}
    >
      {children}
    </div>
  );
};

export default FadeOnAppear;
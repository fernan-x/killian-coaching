import { cn } from "@/lib/utils";

interface ContainerProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  fitContent?: boolean;
  noBg?: boolean;
  bg?: 'dark' | 'light' | 'white';
  noPadding?: boolean;
}

const Container = ({ children, fitContent = false, bg = 'white', noPadding = false, ...props }: ContainerProps) => {
  return (
    <div
      {...props}
      className={cn(
        "w-screen flex flex-col items-center gap-9",
        props.className,
        fitContent ? "h-fit" : "min-h-[300px]",
        bg === 'white' ? "bg-white" : (bg === 'dark' ? "bg-primary" : "bg-[#F3F7FF]"),
        noPadding ? "" : "py-12 px-6 md:px-28",
      )}
    >
      {children}
    </div>
  );
};

export default Container;

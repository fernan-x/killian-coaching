import { cn } from "@/lib/utils";

interface ContainerProps extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  fitContent?: boolean;
  noBg?: boolean;
  noPadding?: boolean;
}

const Container = ({ children, fitContent = false, noBg = false, noPadding = false, ...props }: ContainerProps) => {
  return (
    <div
      {...props}
      className={cn(
        "w-screen flex flex-col items-center gap-9",
        props.className,
        fitContent ? "h-fit" : "min-h-[300px]",
        noBg ? "" : "bg-[#F3F7FF] even:bg-white",
        noPadding ? "" : "py-12 px-28",
      )}
    >
      {children}
    </div>
  );
};

export default Container;

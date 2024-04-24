interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <div
      className="min-h-[400px] md:max-h-[650px] flex flex-col gap-6 bg-slate-100 even:bg-slate-50"
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;

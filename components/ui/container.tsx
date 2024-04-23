interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <div
      className="h-screen max-h-[650px] flex gap-6 bg-slate-100 even:bg-slate-50"
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;

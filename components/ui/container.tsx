const Container = ({ children, ...props }: React.PropsWithChildren) => {
  return (
    <div
      className="min-h-[300px] w-screen flex flex-col items-center gap-9 p-12 bg-[#F3F7FF] even:bg-white"
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;

const Container = ({ children, ...props }: React.PropsWithChildren) => {
  return (
    <div
      className="h-[700px] flex flex-col gap-6 bg-[#F3F7FF] even:bg-white"
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;

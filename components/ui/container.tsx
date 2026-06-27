type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-[min(100%-32px,1160px)] ${className}`}>
      {children}
    </div>
  );
}

import type { ReactNode } from "react";

// Component prop types
type ContainerProps = {
  children: ReactNode;
  className?: string;
};

// Basic container element for UI
function Container({ children, className }: ContainerProps) {
  // Returned JSX
  return (
    <div className={`max-w-[120rem] px-12 mx-auto ${className}`}>
      {children}
    </div>
  );
}

export default Container;

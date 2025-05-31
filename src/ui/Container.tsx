import type { ReactNode } from "react";

// Basic container element for UI
function Container({ children }: { children: ReactNode }) {
  // Returned JSX
  return <div className="max-w-[120rem] px-12 mx-auto">{children}</div>;
}

export default Container;

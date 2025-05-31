import type { ReactNode } from "react";

function Main({ children }: { children: ReactNode }) {
  // Returned JSX
  return <main className="py-20 flex flex-col gap-16">{children}</main>;
}

export default Main;

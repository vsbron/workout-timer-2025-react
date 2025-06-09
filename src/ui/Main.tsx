import type { ReactNode } from "react";

function Main({ children }: { children: ReactNode }) {
  // Returned JSX
  return <main className="py-25 flex flex-col gap-10">{children}</main>;
}

export default Main;

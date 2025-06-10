import type { ReactNode } from "react";

function Main({ children }: { children: ReactNode }) {
  // Returned JSX
  return (
    <main className="py-12 sm:py-18 md:py-25 flex flex-col gap-8 sm:gap-10">
      {children}
    </main>
  );
}

export default Main;

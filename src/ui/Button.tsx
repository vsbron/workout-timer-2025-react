import type { ReactNode } from "react";

function Button({ children }: { children: ReactNode }) {
  // Returned JSX
  return (
    <button className="bg-stone-300 text-stone-950 fill-stone-950 px-10 py-5 font-medium uppercase cursor-pointer border-stone-950 border-b-3 active:border-b-1 rounded-md">
      {children}
    </button>
  );
}

export default Button;

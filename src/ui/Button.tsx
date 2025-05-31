import type { ReactNode } from "react";

function Button({
  children,
  big = false,
}: {
  children: ReactNode;
  big?: boolean;
}) {
  // Returned JSX
  return (
    <button
      className={`bg-stone-300 text-stone-950 fill-stone-950 font-medium uppercase cursor-pointer border-stone-950 active:border-b-1 rounded-md
        ${
          big
            ? "px-10 py-5 border-b-3"
            : "px-8 py-3 border-b-2 active:pt-[.85rem] active:pb-[.65rem]"
        }`}
    >
      {children}
    </button>
  );
}

export default Button;

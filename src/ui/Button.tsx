import type { ReactNode } from "react";

type ButtonSize = "small" | "default" | "big";

// Component prop types
type ButtonProps = {
  children: ReactNode;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
};

function Button({
  children,
  size = "default",
  onClick,
  disabled,
  type,
}: ButtonProps) {
  // Returned JSX
  return (
    <button
      className={`bg-stone-300 text-stone-950 fill-stone-950 font-medium uppercase cursor-pointer border-stone-950 active:border-b-1 rounded-md
        ${
          size === "big"
            ? "px-10 py-5 border-b-3 text-[2rem]"
            : `border-b-2 ${
                size === "small"
                  ? "px-4 py-1.5 text-[1.5rem]"
                  : "px-8 py-3 active:pt-[.85rem] active:pb-[.65rem]"
              }`
        }`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

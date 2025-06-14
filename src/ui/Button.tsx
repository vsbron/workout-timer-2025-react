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
      className={`bg-stone-200 dark:bg-purple-600 text-stone-950 dark:text-stone-50 fill-purple-700 dark:fill-stone-50 font-medium uppercase cursor-pointer border-stone-950 dark:border-purple-900 active:border-b-1 rounded-md  transition-all duration-200
        ${
          size === "big"
            ? "px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 border-b-3 text-[1.6rem] sm:text-[1.8rem] md:text-[2rem]"
            : `border-b-2 ${
                size === "small"
                  ? "px-4 py-1.5 text-[1.5rem]"
                  : "px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 text-[1.6rem] sm:text-[1.8rem] active:pt-[.50rem] sm:active:pt-[.65rem] md:active:pt-[.85rem] active:pb-[.30rem] sm:active:pb-[.45rem] md:active:pb-[.65rem]"
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

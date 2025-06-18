import type { ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

// Input props type
type FormInputProps = {
  id: string;
  defaultValue: number;
  registerValue: UseFormRegisterReturn;
};

// Input component
export function FormInput({ id, defaultValue, registerValue }: FormInputProps) {
  // Returned JSX
  return (
    <input
      id={id}
      type="text"
      className="border-1 text-stone-950 dark:text-stone-50 border-stone-950 dark:border-purple-400 rounded-sm pt-1 pb-1.5 px-4 max-w-21"
      defaultValue={defaultValue}
      {...registerValue}
    />
  );
}

///////////////////////////////////////////////////////////////////

// Label for the input
export function FormLabel({
  children,
  note,
  htmlFor,
}: {
  children: ReactNode;
  note: string;
  htmlFor: string;
}) {
  // Returned JSX
  return (
    <label htmlFor={htmlFor} className="text-2xl flex flex-col gap-0.5">
      {children}
      <span className="text-[1.4rem]">{note}</span>
    </label>
  );
}

///////////////////////////////////////////////////////////////////

// Label for the input
export function FormError({ children }: { children: ReactNode }) {
  // Returned JSX
  return (
    <p className="text-purple-800 dark:text-purple-300 text-xl font-semibold">
      {children}
    </p>
  );
}

///////////////////////////////////////////////////////////////////

// Wrapper div for for group elements
export function FormGroup({ children }: { children: ReactNode }) {
  // Returned JSX
  return <div className="flex flex-col gap-1.5">{children}</div>;
}

// Wrapper div for input elements
export function InputGroup({ children }: { children: ReactNode }) {
  // Returned JSX
  return (
    <div className="flex items-center justify-between gap-1">{children}</div>
  );
}

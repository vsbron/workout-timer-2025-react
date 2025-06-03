import type { ReactNode } from "react";

// Input props type
type FormInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
};

// Input component
export function FormInput({ onChange, value }: FormInputProps) {
  // Returned JSX
  return (
    <input
      type="text"
      className="border-1 rounded-sm pt-1 pb-0.75 px-4 max-w-21"
      onChange={onChange}
      value={value}
    />
  );
}

///////////////////////////////////////////////////////////////////

// Wrapper div for input
export function FormGroup({ children }: { children: ReactNode }) {
  // Returned JSX
  return (
    <div className="flex items-center justify-between gap-1">{children}</div>
  );
}

// Label for the input
export function FormLabel({ children }: { children: ReactNode }) {
  // Returned JSX
  return <label className="text-2xl">{children}</label>;
}

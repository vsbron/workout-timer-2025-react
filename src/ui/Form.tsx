import type { Dispatch, ReactNode, SetStateAction } from "react";

// Input props type
type FormInputProps = {
  onChange: Dispatch<SetStateAction<number>>;
  limit: number;
  value: number;
};

// Input component
export function FormInput({ onChange, limit, value }: FormInputProps) {
  // Returned JSX
  return (
    <input
      inputMode="numeric"
      pattern="[0-9]*"
      type="text"
      className="border-1 text-stone-950 dark:text-stone-50 border-stone-950 dark:border-purple-400 rounded-sm pt-1 pb-1.5 px-4 max-w-21"
      onChange={(e) => {
        const val = e.target.value;
        if (/^\d*$/.test(val)) {
          const num = Number(val);
          if (num <= limit) onChange(num);
        }
      }}
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
export function FormLabel({
  children,
  note,
}: {
  children: ReactNode;
  note: string;
}) {
  // Returned JSX
  return (
    <label className="text-2xl flex flex-col gap-0.5">
      {children}
      <span className="text-[1.3rem]">{note}</span>
    </label>
  );
}

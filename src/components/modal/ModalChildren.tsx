import type { ReactNode } from "react";

import useModal from "@/components/modal/ModalContext";

// Modal window
export function Content({ children }: { children: ReactNode }) {
  // Getting the state from custom hook
  const { isOpen } = useModal();

  // Returned JSX
  return (
    isOpen && (
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 mx-auto max-w-[30rem] bg-stone-50 p-[2rem] rounded-xl z-50">
        {children}
      </div>
    )
  );
}

// Modal overlay
export function Overlay() {
  // Getting the state from custom hook
  const { isOpen, toggleModal } = useModal();

  // Returned JSX
  return (
    isOpen && (
      <div
        className="absolute top-0 left-0 w-full h-full bg-stone-950/50"
        onClick={toggleModal}
      ></div>
    )
  );
}

// Modal trigger
export function Trigger({ children }: { children: ReactNode }) {
  // Getting the state from custom hook
  const { toggleModal } = useModal();

  // Returned JSX
  return (
    <div onClick={toggleModal} className="cursor-pointer">
      {children}
    </div>
  );
}

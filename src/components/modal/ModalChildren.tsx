import type { ReactNode } from "react";

import useModal from "@/components/modal/ModalContext";
import styles from "@/components/modal/Modal.module.css";

// Modal window
export function Content({ children }: { children: ReactNode }) {
  // Getting the state from custom hook
  const { isOpen, toggleModal } = useModal();

  // Returned JSX
  return (
    isOpen && (
      <div className={styles.modalContent}>
        {children}
        <div className={styles.modalClose} onClick={toggleModal}>
          X
        </div>
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
    isOpen && <div className={styles.modalOverlay} onClick={toggleModal}></div>
  );
}

// Modal trigger
export function Trigger({ children }: { children: ReactNode }) {
  // Getting the state from custom hook
  const { toggleModal } = useModal();

  // Returned JSX
  return (
    <div onClick={toggleModal} className={styles.modalTrigger}>
      {children}
    </div>
  );
}

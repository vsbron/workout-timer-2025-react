import { ReactNode } from "react";

import useModal from "./ModalContext";

import styles from "./Modal.module.css";

// Modal window
export function Content({ children }: { children: ReactNode }) {
  // Getting the state from custom hook
  const { isOpen, closeModal } = useModal();

  // Returned JSX
  return (
    isOpen && (
      <div className={styles.modalContent}>
        {children}
        <div className={styles.modalClose} onClick={closeModal}>
          X
        </div>
      </div>
    )
  );
}

// Modal overlay
export function Overlay() {
  // Getting the state from custom hook
  const { isOpen, closeModal } = useModal();

  // Returned JSX
  return (
    isOpen && <div className={styles.modalOverlay} onClick={closeModal}></div>
  );
}

// Modal trigger
export function Trigger({ children }: { children: ReactNode }) {
  // Getting the state from custom hook
  const { openModal } = useModal();

  // Returned JSX
  return (
    <div onClick={openModal} className={styles.modalTrigger}>
      {children}
    </div>
  );
}

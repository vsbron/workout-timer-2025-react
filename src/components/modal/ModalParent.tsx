import { ReactNode, useState } from "react";

import { Content, Overlay, Trigger } from "./ModalChildren";
import { ModalContext } from "./ModalContext";

function Modal({ children }: { children: ReactNode }) {
  // Setting the stat for modal visibility
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Function to change Modal's visibility
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Returned JSX
  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      <div>{children}</div>
    </ModalContext.Provider>
  );
}

// Tieing everything together
Modal.Trigger = Trigger;
Modal.Content = Content;
Modal.Overlay = Overlay;

export default Modal;

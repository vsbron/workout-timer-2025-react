import { createContext, useContext } from "react";

// Context structure
interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

// Creating context
export const ModalContext = createContext<ModalContextType | null>(null);

// Custom hook
const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
};

export default useModal;

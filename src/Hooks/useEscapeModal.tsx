import { useEffect } from "react";

const useEscapeModal = (
  isModalOpen: boolean,
  setIsModalOpen: (b: boolean) => void,
  disabled = false,
): void => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen && !disabled) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, setIsModalOpen, disabled]);
};

export default useEscapeModal;

import { useState, useCallback } from "react";

interface UseModalResult {
  visible: boolean;
  showModal: () => void;
  hideModal: () => void;
  toggleModal: () => void;
}

/**
 * A hook to manage modal visibility state
 * @returns {UseModalResult} An object containing the modal state and functions to control it
 */
const useModal = (initialState: boolean = false): UseModalResult => {
  const [visible, setVisible] = useState<boolean>(initialState);

  const showModal = useCallback(() => {
    setVisible(true);
  }, []);

  const hideModal = useCallback(() => {
    setVisible(false);
  }, []);

  const toggleModal = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  return {
    visible,
    showModal,
    hideModal,
    toggleModal,
  };
};

export default useModal;

import { create } from "zustand";

interface SignupModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSignupModal = create<SignupModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSignupModal;

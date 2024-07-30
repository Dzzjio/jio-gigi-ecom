import create from 'zustand';

interface ModalStore {
  isModalOpen: boolean;
  modalContent: string;
  openModal: (content: string) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  modalContent: '',
  openModal: (content: string) => set({ isModalOpen: true, modalContent: content }),
  closeModal: () => set({ isModalOpen: false, modalContent: '' }),
}));

export default useModalStore;

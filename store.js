import create from 'zustand';
export const useStore = create((set) => ({
    city: '',
    state: '',
    expandedCard:'',
    setCity: (city) => set({ city }),
    setState: (state) => set({ state }),
    setExpandedCard: (cardId) => set({ expandedCard: cardId }),
  }));
import { create } from "zustand";

export const useCountStore = create((set) => ({
  count: 0,
  name: "Ranjith",
  credits: "All Rights @ Ranjit Thota",
  games: [],

  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 }),
  gamesData: (data) => set((state) => (state.games = data)),
}));

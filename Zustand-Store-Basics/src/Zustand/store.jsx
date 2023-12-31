import { create } from "zustand";

export const useCountStore = create((set) => ({
  count: 0,
  name: "Ranjit",
  credits: "All Rights @ Ranjit Thota",

  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 }),
}));

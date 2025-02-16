import { create } from "zustand";
export const useAddToBasket = create((set) => ({
  login: false,
  FilterList: (bool) => set(() => ({ login: bool })),
}));

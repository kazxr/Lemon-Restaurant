import { create } from "zustand";
export const useAddToBasket = create((set) => ({
  loginChecker: Boolean(localStorage.getItem("UserProfile")),
  setLoginChecker: (bool) => set(() => ({ loginChecker: bool })),
}));

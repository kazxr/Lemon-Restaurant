import { create } from "zustand";
export const useAddToBasket = create((set) => ({
  loginChecker: JSON.parse(localStorage.getItem("UserProfile")) || false,
  setLoginChecker: (bool) => set(() => ({ loginChecker: bool })),
  toggleDrawerBool: false,
  setToggleDrawer: (bool) => set(() => ({ toggleDrawerBool: bool })),
  addToBasket: [],
  setAddToBasket: (data) =>
    set((state) => ({
      addToBasket: [...state.addToBasket, data],
    })),
    makeNavGoDown: false,
        setMakeNavGoDown: (bool) => set(() => ({makeNavGoDown: bool })),

}));

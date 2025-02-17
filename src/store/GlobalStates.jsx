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
  setMakeNavGoDown: (bool) => set(() => ({ makeNavGoDown: bool })),
  toggleLoginMenu: false,
  setToggleLoginMenu: (bool) => set(() => ({ toggleLoginMenu: bool })),
  // drawerIsClosed: false,
  // drawerIsOpen: false,
  // setDrawerIsOpen: (bool) => set(() => ({ drawerIsOpen: bool })),
  // setDrawerIsClose: (bool) => set(() => ({ drawerIsClose: bool })),
}));

import { create } from "zustand";
import { produce } from "immer";

export const useAddToBasket = create((set) => ({
  loginChecker: JSON.parse(localStorage.getItem("UserProfile")) || false,
  setLoginChecker: (bool) => set(() => ({ loginChecker: bool })),
  toggleDrawerBool: false,
  setToggleDrawer: (bool) => set(() => ({ toggleDrawerBool: bool })),

  addToBasket: [],
  setAddToBasket: (data) =>
    set(
      produce((state) => {
        const newData = { ...data, NumberOfOrders: 1 };
        state.addToBasket = [...state.addToBasket, newData];
      })
    ),

  ProductNumberIncrease: (id) =>
    set(
      produce((state) => {
        state.addToBasket[id].NumberOfOrders += 1;
      })
    ),

  ProductNumberDecrease: (id) =>
    set(
      produce((state) => {
        if (state.addToBasket[id].NumberOfOrders > 1) {
          state.addToBasket[id].NumberOfOrders -= 1;
        }
      })
    ),
  ProductRemove: (id) =>
    set(
      produce((state) => {
        state.addToBasket.splice(id, 1);
      })
    ),

  FinalPrice: 0,
  setFinalPrice: () =>
    set(
      produce((state) => {
        const Result = state.addToBasket.reduce((prev, current) => {
          return prev + current.price * current.NumberOfOrders;
        },0);
        state.FinalPrice = Result.toFixed(2);
      })
    ),

  makeNavGoDown: false,
  setMakeNavGoDown: (bool) => set(() => ({ makeNavGoDown: bool })),
  toggleLoginMenu: false,
  setToggleLoginMenu: (bool) => set(() => ({ toggleLoginMenu: bool })),
}));

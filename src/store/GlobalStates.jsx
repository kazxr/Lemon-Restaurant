import { create } from "zustand";
import { produce } from "immer";

export const useAddToBasket = create((set) => ({
  loginChecker: JSON.parse(localStorage.getItem("UserProfile")) || false,
  setLoginChecker: (bool) => set(() => ({ loginChecker: bool })),
  toggleDrawerBool: false,
  setToggleDrawer: (bool) => set(() => ({ toggleDrawerBool: bool })),

  addToBasket: [],
  ClearBasket : ()=>set(()=>({addToBasket:[]})),
  setAddToBasket: (data, str) =>
  set(
    produce((state) => {
      let x = false;
          state.addToBasket = state.addToBasket.map((val) => {

        if (val.title === data.title) {
          x = true;
          return str
            ? { ...val, active: false }
            : { ...val, active: true };
        }
        return val; 
      });

      if (!x) {
        const newData = { ...data, NumberOfOrders: 1 };
        state.addToBasket.push(newData);
      }
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
        }, 0);
        state.FinalPrice = Result.toFixed(2);
      })
    ),

    ThisToTakeLocationLongAndAlt:"",
    setTakeLocationLongAndAlt: (Location)=>set(()=>({ThisToTakeLocationLongAndAlt:Location})),
    CheckoutCompleted : false,
    setCheckoutCompleted: (Location)=>set(()=>({CheckoutCompleted:Location})),

  makeNavGoDown: false,
  setMakeNavGoDown: (bool) => set(() => ({ makeNavGoDown: bool })),
  toggleLoginMenu: false,
  setToggleLoginMenu: (bool) => set(() => ({ toggleLoginMenu: bool })),
}));

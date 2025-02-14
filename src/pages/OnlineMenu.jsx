import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import DishType from "../components/ui/DishesTypeOnlineMenu";
import { useEffect } from "react";
function OnlineMenu() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
      <Header />
      
      <DishType />
      <Outlet />
    </>
  );
}

export default OnlineMenu;

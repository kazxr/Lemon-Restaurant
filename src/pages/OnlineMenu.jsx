import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import DishType from "../components/ui/DishesTypeOnlineMenu"
function OnlineMenu() {
  return (
    <>
      <Header />
      <DishType/>
      <Outlet />
    </>
  );
}

export default OnlineMenu;

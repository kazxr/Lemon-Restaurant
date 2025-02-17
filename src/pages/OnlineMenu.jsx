import { Outlet } from "react-router-dom";
import DishType from "../components/OnlineMenu/DishesTypeOnlineMenu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function OnlineMenu() {
  let navigate = useNavigate()
  useEffect(() => {
  window.scrollTo(0, 0);
  window.addEventListener("load",()=>{
   navigate("../OnlineMenu/")
  })

}, []);
  return (
    <>
      <DishType />
      <Outlet />
    </>
  );
}

export default OnlineMenu;

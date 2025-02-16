import Badge from "@mui/material/Badge";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useAddToBasket } from "../../store/GlobalStates";
import Drawer from "./drawerFromTheRight";
function Basket() {
  const toggleDrawerBool = useAddToBasket((state) => state.toggleDrawerBool);
  const SetToggleDrawer = useAddToBasket((state) => state.setToggleDrawer);
  let BasketClick = () => {
    SetToggleDrawer(true);
    console.log(toggleDrawerBool);
  };
  return (
    <>
     <div  onClick={BasketClick} className=" cursor-pointer hover:bg-greenPrimary/10 p-1 mr-[-8px] hover:rounded-full">
         <Badge
        badgeContent={3}
        max={99}  
        color="success"
      >
        <ShoppingBasketOutlinedIcon
          fontSize="large"
          className=" text-greenPrimary  "
        />
      </Badge>
     </div>
      <Drawer />
    </>
  );
}

export default Basket;

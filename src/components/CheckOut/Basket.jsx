import Badge from "@mui/material/Badge";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useAddToBasket } from "../../store/GlobalStates";
import Drawer from "./Drawer";
function Basket() {
  const toggleDrawerBool = useAddToBasket((state) => state.toggleDrawerBool);
  const SetToggleDrawer = useAddToBasket((state) => state.setToggleDrawer);
  let BasketClick = () => {
    SetToggleDrawer(true);
    console.log(toggleDrawerBool);
  };
  const addToBasket = useAddToBasket((state) => state.addToBasket);
  return (
    <>
     <div  onClick={BasketClick} className=" cursor-pointer hover:bg-greenPrimary/10 p-1 mr-[-8px] hover:rounded-full">
         <Badge
        badgeContent={addToBasket.length}
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

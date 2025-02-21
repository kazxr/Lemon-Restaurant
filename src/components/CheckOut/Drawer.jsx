import Drawer from "@mui/material/Drawer";
import { useState, useEffect, useRef } from "react";
import { useAddToBasket } from "../../store/GlobalStates";
import Xicon from "@mui/icons-material/Close";
import MinusIcon from "@mui/icons-material/Remove";
import PlusIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    SetToggleDrawer(false);
  };

  const toggleDrawerBool = useAddToBasket((state) => state.toggleDrawerBool);
  const SetToggleDrawer = useAddToBasket((state) => state.setToggleDrawer);
  const addToBasket = useAddToBasket((state) => state.addToBasket);
  const ProductNumberIncrease = useAddToBasket(
    (state) => state.ProductNumberIncrease
  );
  const ProductNumberDecrease = useAddToBasket(
    (state) => state.ProductNumberDecrease
  );
  const ProductRemove = useAddToBasket((state) => state.ProductRemove);
  const FinalPrice = useAddToBasket((state) => state.FinalPrice);
  const setFinalPrice = useAddToBasket((state) => state.setFinalPrice);
  useEffect(() => {
    setFinalPrice();
  }, [addToBasket]);

  //! this to hide and stop scroll of the body when drawer is true;
  //! and allow only Basket product scroll
  useEffect(() => {
    setOpen(toggleDrawerBool);

    // this will allow cards drawer container scroll
    // to the card that added twice to drawer;
    if (toggleDrawerBool) {
      setTimeout(() => {
        if (drawerRef) {
          drawerRef.current.scrollIntoView({ block: "center" });
        }
      }, 50);
    }

    // this one to make drawer has no scroll,
    // and only the card conatiner will have it;
    if (toggleDrawerBool) {
      const style = document.createElement("style");
      style.innerHTML = `
        html::-webkit-scrollbar, 
        body::-webkit-scrollbar {
          display: none;
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }
  }, [toggleDrawerBool]);

  const handleIncrease = (id) => {
    ProductNumberIncrease(id);
  };

  const handleDecrease = (id) => {
    ProductNumberDecrease(id);
  };

  const handleDelete = (id) => {
    ProductRemove(id);
  };

  const drawerRef = useRef(null);

  // this to go to checkout page
  let navigate = useNavigate();
  let gotToCheckout = () => {
    navigate("CheckOut");
    setOpen(false);
    SetToggleDrawer(false);
  };

  return (
    <div className="m-0 p-0 block ">
      <Drawer
        open={open}
        anchor="right"
        onClose={toggleDrawer(false)}
        disableScrollLock
      >
        <h1 className=" lg:text-4xl md:text-3xl sm:text-2xl w-full  bg-greenPrimary/95 text-center  text-yellowPrimary py-5 ">
          Basket
        </h1>

        <div
          id="drawerCardsParent"
          className=" lg:w-[550px] md:w-[350px] sm:w-[250px] overflow-y-scroll overflow-x-hidden flex-grow  flex items-center flex-col"
        >
          {addToBasket.length == 0 ? (
            <h1 className=" !w-[500px]  xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-gray-400 mt-[45vh] text-center items-center ">
              The basket is empty
            </h1>
          ) : (
            addToBasket.map((data, i) => {
              return (
                <div
                  key={i}
                  ref={data.active ? drawerRef : null}
                  id="drawerCards"
                  className={
                    "border-greenPrimary mx-2 my-5  rounded-md   lg:w-[500px] md:w-[300px] sm:w-[200px]  w-full  relative" +
                    " grid lg:grid-rows-[45px_45px_45px] lg:grid-cols-[1.5fr_1fr_1fr_1fr] " +
                    " md:grid-rows-[240px_1fr_50px_1fr] md:grid-cols-[1fr_1fr]  sm:grid-rows-[150px_1fr_50px_1fr] sm:grid-cols-[1fr_1fr] " +
                    (data.active ? " !ring-2 !ring-orangeSecondary" : "")
                  }
                >
                  <Xicon
                    onClick={() => handleDelete(i)}
                    alt=""
                    className=" absolute !text-[2rem] lg:text-greenPrimary/80  lg:bg-graySecondary/80 cursor-pointer sm:text-greenPrimary/100 sm:bg-white sm:rounded-full
                  rounded-tr-md lg:left-[95%] md:left-[90.5%] sm:left-[87.5%] lg: lg:translate-y-[-8px] sm:translate-y-[-5px] top-0 hover:bg-slate-200/20 hover:text-greenPrimary p-1 "
                  />

                  <img
                    src={data.image}
                    alt=""
                    className="  lg:row-[1/5] lg:col-[1/2] sm:row-[1/2] sm:col-[1/3]  h-full sm:rounded-t-md lg:rounded-l-md  object-cover"
                  />

                  <div className=" lg:row-[1/2] lg:col-[2/4] w-full sm:row-[2/3] sm:col-[1/3] lg:m-0 lg:!ml-3 sm:mx-3 sm:mt-3 md:pb-1">
                    <p className="font-karla text-drawerHeader  ">
                      {data.title}
                    </p>
                  </div>

                  <div
                    className="lg:row-[2/3] lg:col-[2/5] w-full lg:-mt-3 
                      sm:row-[3/4] sm:col-[1/3] lg:m-0  sm:mb-3"
                  >
                    <p className="text-drawerP text-greenPrimary sm:mx-3 lg:mr-3; ">
                      {data.description.slice(0, 33) + "..."}
                    </p>
                  </div>

                  <div
                    className=" text-drawerX flex   lg:row-[3/4] lg:col-[2/3]    
                      sm:row-[4/5] sm:col-[1/3]  lg:m-0 sm:mx-3 sm:mb-3  sm:self-center
                       font-karla text-orangeSecondary lg:!ml-3 lg:mb-3"
                  >
                    <p>${(data.price * data.NumberOfOrders).toFixed(2)}</p>
                  </div>

                  <div className="flex items-center text-center lg:row-[3/4] lg:col-[3/5] sm:row-[4/5] sm:col-[2/3] space-x-1 text-greenPrimary sm:justify-self-end sm:mr-2 sm:mb-3  ">
                    <MinusIcon
                      onClick={() => handleDecrease(i)}
                      className="bg-greenPrimary/20 hover:bg-greenPrimary/40 p-1  lg:!text-[1.9rem] md:!text-[1.9rem]   sm:!text-[1.85rem] !text-drawerHeader cursor-pointer rounded-md"
                    />
                    <p
                      className={
                        "text-[1.2rem] text-drawerHeader md:mb-[3px] font-semibold  w-[40px]  " +
                        (data.active ? "!text-red-600" : "")
                      }
                    >
                      {data.NumberOfOrders}
                    </p>
                    <PlusIcon
                      onClick={() => handleIncrease(i)}
                      className="bg-greenPrimary/20 hover:bg-greenPrimary/40  lg:!text-[1.9rem]  md:!text-[1.9rem]   sm:!text-[1.8rem]  p-1 cursor-pointer  rounded-md"
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
        {addToBasket.length == 0 ? null : (
          <div className="flex justify-between flex-col items-center  py-5   !bg-greenPrimary/95  ">
            <h1 className=" text-drawerHeader  text-orangeSecondary font-bold font-karla   ">
              ${FinalPrice}
            </h1>
            <Button
              onClick={gotToCheckout}
              className=" !justify-self-end hover:shadow-2xl !shadow-lg hover:!text-greenPrimary  !mt-5 text-drawerHeader !px-10 !py-2 !bg-yellowPrimary !text-black !rounded-full lg:!text-[1.1rem] !capitalize sm:!text-[0.95retext-drawerHeaderm] !px"
            >
              Checkout
            </Button>
          </div>
        )}
      </Drawer>
    </div>
  );
}

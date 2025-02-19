import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";
import { useAddToBasket } from "../../store/GlobalStates";
import Xicon from "@mui/icons-material/Close";
import MinusIcon from "@mui/icons-material/Remove";
import PlusIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
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

  return (
    <div>
      <Drawer
        open={open}
        anchor="right"
        onClose={toggleDrawer(false)}
        disableScrollLock
        sx={{
          "& .MuiDrawer-paper": {
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            margin: 0,
            padding: 0,
            maxWidth: "100%",
            overflow: "visible",
          },
        }}
      >
        <h1 className="text-3xl  text-center mt-5 text-greenPrimary ">
          Basket
        </h1>

        <div className="h-[80vh] overflow-y-scroll flex-grow">
          {addToBasket.length == 0 ? (
            <h1 className="w-[500px] text-4xl text-gray-400 mt-[35vh] text-center items-center ">
              The basket is empty
            </h1>
          ) : (
            addToBasket.map((data, i) => {
              return (
                <>
                  <div
                    key={data.id}
                    id="drawerCards"
                    className=" mx-2  rounded-md lg:max-w-[500px] w-[500px] relative bg-white   sm:max-w-[300px] 
                grid grid-cols-[1fr_150px_1fr_1fr] grid-rows-[1fr_1fr_fr_1fr] my-5 "
                  >
                    <Xicon
                      onClick={() => handleDelete(i)}
                      alt=""
                      className="absolute !text-[2rem] text-greenPrimary/50 cursor-pointer
                  rounded-tr-md left-[93.5%] hover:bg-slate-200/20 hover:text-greenPrimary p-1 "
                    />

                    <div className="col-span-1 row-span-3 col-start-1">
                      <img
                        src={data.image}
                        alt=""
                        className="lg:w-[130px] lg:h-[100px]  rounded-lg m-1"
                      />
                    </div>

                    <div className="col-start-2 col-span-1  ml-4 mt-1">
                      <p className="font-markazi lg:text-[1.3rem] ">
                        {data.title}
                      </p>
                    </div>

                    <div className="col-start-2 col-span-3 row-start-2 ml-4">
                      <p className="lg:text-[1rem] text-greenPrimary">
                        {data.description.match(/(\w{1,}|\s){4,5}/gi)[0]+"..."}
                        
                      </p>
                    </div>

                    <div className="col-start-2 row-start-3 mt-[2px] ml-4 font-karla text-orangeSecondary">
                      <p>${(data.price * data.NumberOfOrders).toFixed(2)}</p>
                    </div>

                    <div className="row-start-3 col-start-4 justify-self-end mr-2">
                      <div className="flex items-center text-center  space-x-1  ">
                        <MinusIcon
                          onClick={() => handleDecrease(i)}
                          className="bg-greenPrimary/20 hover:bg-greenPrimary/40 p-1 !text-[1.6rem] cursor-pointer rounded-md"
                        />
                        <p className="text-[1.2rem]  w-[40px]  ">
                          {data.NumberOfOrders}
                        </p>
                        <PlusIcon
                          onClick={() => handleIncrease(i)}
                          className="bg-greenPrimary/20 hover:bg-greenPrimary/40 !text-[1.6rem] p-1 cursor-pointer  rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>
        {addToBasket.length == 0 ? null : (
          <div className="flex justify-evenly items-center !justify-self-center py-5  bg-slate-200 ">
            <h1 className="lg:!text-[1.3rem] sm:!text-[0.95rem]">
              ${FinalPrice}
            </h1>
            <Button className="primary-btn lg:!text-[1.1rem] !capitalize sm:!text-[0.95rem]">
              Checkout
            </Button>
          </div>
        )}
      </Drawer>
    </div>
  );
}

import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Xicon from "@mui/icons-material/Close";
import { useState, useEffect, useReducer } from "react";
import { useAddToBasket } from "../../store/GlobalStates";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { ReduceCapacityRounded } from "@mui/icons-material";
export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    SetToggleDrawer(false);
  };

  const toggleDrawerBool = useAddToBasket((state) => state.toggleDrawerBool);
  const SetToggleDrawer = useAddToBasket((state) => state.setToggleDrawer);
  const addToBasket = useAddToBasket((state) => state.addToBasket);

  useEffect(() => {
    setOpen(toggleDrawerBool);
  }, [toggleDrawerBool]);

 
  useEffect(() => {
    addToBasket.forEach(
      (card) => {
        card.NumberOfOrders = 1;
      },
      []
    );
  },[addToBasket.lenght]);

  let handleIncrease = (id) => {
    addToBasket[id].NumberOfOrders += 1;

    console.log(addToBasket[id]);
  };

  let handleDecrease = (id) => {
    if (addToBasket[id].NumberOfOrders > 1) {
      addToBasket[id].NumberOfOrders -= 1;
    }
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
            display: "block",
            margin: 0,
            padding: 0,
            maxWidth: "100%",
            overflow: "visible",
          },
        }}
      >
        <h1 className="text-3xl  text-center mt-1 text-greenPrimary ">
          {" "}
          the Basket{" "}
        </h1>

        {addToBasket.map((data,i) => {
          return (
            <>
              <div
                key={data.id}
                className=" mx-2 rounded-md lg:max-w-[500px] w-[500px] relative bg-white ring-1 ring-greenPrimary/50  sm:max-w-[300px] 
                grid grid-cols-[1fr_150px_1fr_1fr] grid-rows-[1fr_1fr_fr_1fr] my-5 "
              >
                <Xicon
                  alt=""
                  className="absolute !text-[2rem] text-greenPrimary/50 
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
                  <p className="font-markazi lg:text-[1.3rem] ">{data.title}</p>
                </div>

                <div className="col-start-2 col-span-3 row-start-2 ml-4">
                  <p className="lg:text-[1rem] text-greenPrimary">
                    {data.description.match(/(\w{1,}\s){7,14}/gi)[0]}
                  </p>
                </div>

                <div className="col-start-2 row-start-3 mt-[2px] ml-4 font-karla text-orangeSecondary">
                  <p>${data.price * data.NumberOfOrders}</p>
                </div>

                <div className="row-start-3 col-start-4 justify-self-end mr-2">
                  <div className="flex items-center text-center  space-x-1  ">
                    <RemoveIcon
                      onClick={() => handleDecrease(data.id)}
                      className="bg-greenPrimary/20 p-1 !text-[1.6rem] cursor-pointer rounded-md"
                    />
                    <p className="text-[1.2rem]  w-[40px]  ">
                      {data.NumberOfOrders}
                    </p>
                    <AddIcon
                      onClick={() => handleIncrease(i,data.NumberOfOrders)}
                      className="bg-greenPrimary/20  !text-[1.6rem] p-1 cursor-pointer  rounded-md"
                    />
                  </div>
                </div>
              </div>
              {/* <Divider /> */}
            </>
          );
        })}
      </Drawer>
    </div>
  );
}

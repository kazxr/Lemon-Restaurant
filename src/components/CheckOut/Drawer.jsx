import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Xicon from "../../assets/Xicon.svg";
import { useState, useEffect } from "react";
import { useAddToBasket } from "../../store/GlobalStates";

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
        <h1 className="text-8xl"> hello this is </h1>

        {addToBasket.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className=" mt-1 mb-5 lg:max-w-[500px] bg-graySecondary sm:max-w-[300px]"
              >
                <img src={Xicon} alt="" className="absolute top-1 left-[90%]" />
                <div className="flex justify-between items-center">
                  <img
                    src={data.image}
                    alt=""
                    className="lg:w-28 lg:h-30 rounded-lg ml-1 mt-1"
                  />

                  <div className="ml-2 font-karla">
                    <p className="font-markazi lg:text-[1.3rem] ">
                      {data.title}
                    </p>
                    <p className="lg:text-[1rem] text-greenPrimary">
                      {data.description.match(/(\w{1,}\s){7,14}/gi)[0] + "..."}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-center space-x-1 justify-self-center ml-8 mt-[-5px]  ">
                  <p className="text-2xl bg-greenPrimary w-[35px] h-[35px] rounded-md  ">
                    +
                  </p>
                  <p className="text-2xl  w-[40px]  ">4</p>
                  <p className="text-2xl bg-greenPrimary  w-[35px] h-[35px] rounded-md  ">
                    -
                  </p>
                </div>
              </div>
              <Divider />
            </>
          );
        })}
      </Drawer>
    </div>
  );
}

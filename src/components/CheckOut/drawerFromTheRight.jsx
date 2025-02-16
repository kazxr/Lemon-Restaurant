
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { useState, useEffect } from "react";
import { useAddToBasket } from "../../store/GlobalStates";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    SetToggleDrawer(false)
  };

 
  const toggleDrawerBool = useAddToBasket((state) => state.toggleDrawerBool);
  const SetToggleDrawer = useAddToBasket((state) => state.setToggleDrawer);

  useEffect(() => {
    setOpen(toggleDrawerBool);
  }, [toggleDrawerBool]);
  return (
    <div>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)} disableScrollLock>
        <h1 className="w-[300px]"></h1>
      </Drawer>
    </div>
  );
}

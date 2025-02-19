import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { useState, useEffect } from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Alert from "@mui/material/Alert";
import { useAddToBasket } from "../../store/GlobalStates";
function UserProfile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let uploadHandler = () => {
    let bg = document.getElementById("bg-upload");
    let text = document.getElementById("text-upload");
    bg.classList.toggle("hidden");
    text.classList.toggle("!hidden");
  };
  let ReverseUploadHandler = () => {
    let bg = document.getElementById("bg-upload");
    let text = document.getElementById("text-upload");
    bg.classList.toggle("hidden");
    text.classList.toggle("!hidden");
  };
  let [AlertError, setAlertError] = useState(false);
  const onclickHandleUpload = async () => {
    try {
      if (window.showOpenFilePicker) {
        const [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        storeImageInLocalStorage(file);
      } else {
        setAlertError(true);
        setTimeout(() => {
          setAlertError(false);
        }, 2500);
        console.warn("File picker API is not supported in this browser.");
      }
    } catch (error) {
      console.error("File selection canceled or error occurred:", error);
    }
  };
  const storeImageInLocalStorage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      localStorage.setItem("image", reader.result);
      setImgSrc(localStorage.getItem("image"));
    };
  };
  let [imgLocalS, setImgLocalS] = useState(
    Boolean(localStorage.getItem("image"))
  );
  let [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    const storedImage = localStorage.getItem("image");
    if (storedImage) {
      setImgLocalS(true);
      setImgSrc(storedImage);
    }
  }, [imgSrc]);

  //: global state management;
  const setLoginChecker = useAddToBasket((state) => state.setLoginChecker);

  let handleLogout = () => {
    localStorage.setItem("UserProfile", false);
    setLoginChecker(false);
    handleClose();
  };
  return (
    <section>
      {AlertError && (
        <Alert
          severity="error"
          className="fixed top-0 left-[50%] !w-[400px] translate-x-[-50%] z-[999]"
        >
          File picker API is not supported in this browser. Try Google Chrome
        </Alert>
      )}
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }} className="!bg-greenPrimary">
            {localStorage
              .getItem("firstName")
              .match(/\w{1}/)[0]
              .toLocaleUpperCase()}
          </Avatar>
        </IconButton>
      </Tooltip>
      {/* the menu settings  */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        disableScrollLock
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="flex items-center justify-center w-[280px]">
          <div>
            <MenuItem
              onMouseEnter={uploadHandler}
              onMouseLeave={ReverseUploadHandler}
              onClick={onclickHandleUpload}
              className="hover:!bg-white justify-self-center !w-[280px] !p-5 !mt-[-8px] !rounded-t-md"
            >
              <div className="mx-auto">
                <p
                  id="bg-upload"
                  className="hidden z-40 absolute opacity-60  bg-black rounded-t-lg !w-[280px] !h-full top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]"
                ></p>

                <div
                  id="text-upload"
                  className="!hidden !z-50 !text-white !absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  "
                >
                  <CloudUploadOutlinedIcon className=" !text-white !absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  lg:!text-[3rem]  sm:text-[2rem]" />
                  <p className="mt-[60px]">5mb Max</p>
                </div>
                {!imgLocalS ? (
                  <Avatar className="!p-0 !m-0 lg:!w-32 lg:!h-32 sm:!w-24 sm:!h-24 !text-4xl ">
                    {localStorage
                      .getItem("firstName")
                      .match(/\w{1}/)[0]
                      .toLocaleUpperCase()}
                  </Avatar>
                ) : (
                  <img
                    id="imgLocalStorage"
                    src={imgSrc}
                    className=" w-20 h-20 rounded-full !object-cover "
                  ></img>
                )}
              </div>
            </MenuItem>
            <div className="flex justify-center text-center  mt-3 mb-5 text-greenPrimary font-karla   ">
              <p className="mr-2 text-black">Full Name:</p>
              {` ${localStorage.getItem("firstName")} ${localStorage.getItem(
                "lastName"
              )}  `}
            </div>

            <div className=" mb-5  w-full text-greenPrimary font-karla flex justify-center">
              <p className="mr-2 text-black">Email:</p>
              <p className="">{localStorage.getItem("email")}</p>
            </div>
            <Divider />
            <MenuItem
              onClick={handleLogout}
              className=" !w-[300px] !py-4  !mb-[-8px]  "
            >
              <div className="mx-auto flex  items-center">
                <ListItemIcon className="mr-[-3px]">
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </div>
            </MenuItem>
          </div>
        </div>
      </Menu>
    </section>
  );
}

export default UserProfile;

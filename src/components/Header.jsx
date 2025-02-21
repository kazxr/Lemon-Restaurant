import Logo from "../assets/Logo.svg";
import minilogo from "../assets/mini-logo.png";
import Snackbar from "@mui/material/Snackbar";
import HamMenu from "../assets/hambergerMenu.svg";
import hamMenuCloser from "../assets/Xicon.svg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
//dialog imports:
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import { useFormik } from "formik";
import { useAddToBasket } from "../store/GlobalStates";
import UserProfile from "./OnlineMenu/UserProfile";
import Basket from "./CheckOut/Basket";

function Header() {
  // this to trigger Login or sign Up from;
  let [login, setLogin] = useState(true);
  let loginFunhandler = () => {
    setLogin((x) => !x);
  };
  // dialog handler :
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setLogin(true);
    setToggleLoginMenu(false);
  };

  const handleClickClose = () => {
    setOpen(false);
    setToggleLoginMenu(false);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  //# nav scrolling logic, scroll into section;
  let active = useRef(null);
  //# also this to close hambergerMenu after clicking ;
  // we added the delay, bc we using routes to navigate to ="/"
  // then the delay to trigger scroll into view after being in / section
  let closer = useRef(window.innerWidth);
  let resize = () => {
    closer.current = window.innerWidth;
  };
  let scrollIntoSection = (id) => {
    setTimeout(() => {
      if (closer.current <= 829) {
        menuHandler();
      }
      let elem = document.querySelector("#" + id);
      elem.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }, 100);
  };

  // when scroll down will hide nav when up will appear;
  let header = useRef(0);
  let headerElement = useRef(null);
  let ScrollHandler = () => {
    let currentVal = window.scrollY;
    if (header.current < currentVal) {
      headerElement.current.classList.add("scrollHidden");
    } else {
      headerElement.current.classList.remove("scrollHidden");
    }
    header.current = currentVal;
  };
  useEffect(() => {
    window.addEventListener("scroll", ScrollHandler);
    window.addEventListener("resize", resize);
    return () => {
      removeEventListener("scroll", ScrollHandler);
    };
  }, []);

  // making nav responsive
  let menuHandler = (e) => {
    let navContainer = document.querySelector(".nav-container");
    let ul = document.querySelector(".nav-ul");
    if (!ul.classList.contains("activeHamMenu")) {
      e.target.setAttribute("src", hamMenuCloser);
      ul.classList.add("activeHamMenu");
      navContainer.classList.add("activeHamMenu-container", "bg-slate-50");
      //animation
      ul.style.animation = "hamMenu 0.4s ease-in-out";
    } else {
      ul.style.animation = "none";
      ul.offsetHeight;
      ul.style.animation = "hamMenu 0.4s ease-in-out reverse";
      setTimeout(() => {
        ul.classList.remove("activeHamMenu");
        navContainer.classList.remove("activeHamMenu-container", "bg-slate-50");
        active.current.setAttribute("src", HamMenu);
      }, 300);
    }
  };

  // login input validation
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(10, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    ...(login === false && {
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
    }),
  });
  let [showAlert, setAlert] = useState(false);
  let [alertError, setAlertError] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: localStorage.getItem("email") || "",
      password: localStorage.getItem("password") || "",
      ...(!login ? { lastName: "", firstName: "" } : {}),
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (
        (formik.values.firstName && formik.values.lastName) ||
        (localStorage.getItem("firstName") && localStorage.getItem("lastName"))
      ) {
        for (let val in values) {
          localStorage.setItem(val, values[val]);
        }
        setLoginChecker(true);
        localStorage.setItem("UserProfile", true);

        setTimeout(() => {
          setAlert(true);
        }, 500);
        setTimeout(() => {
          setAlert(false);
        }, 2000);
        try {
          menuHandler();
        } catch (error) {
          console.log("dont worry about this error", error);
        }

        handleClickClose();
      } else {
        setAlertError(true);
        setTimeout(() => {
          setAlertError(false);
        }, 1500);
      }
    },
  });

  useEffect(() => {
    const x = localStorage.getItem("firstName") || "";
    const y = localStorage.getItem("lastName") || "";
    if (!login) {
      formik.setFieldValue("firstName", x, false);
      formik.setFieldValue("lastName", y, false);
    }
  }, [login]);

  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputLabel-root": { color: "gray !important" },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#495e57",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": { borderColor: "black" },
              "&.Mui-focused fieldset": { borderColor: "#495e57" },
            },
          },
        },
      },
    },
  });
  const themeText = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "gray",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "black",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#495e57",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "gray",
            "&.Mui-focused": {
              color: "#495e57",
            },
          },
        },
      },
    },
  });
  //: globalState management;
  const loginChecker = useAddToBasket((state) => state.loginChecker);
  const setLoginChecker = useAddToBasket((state) => state.setLoginChecker);

  // this function will make the nave go down when adding to Basket
  const makeNavGoDown = useAddToBasket((state) => state.makeNavGoDown);
  const setMakeNavGoDown = useAddToBasket((state) => state.setMakeNavGoDown);
  const toggleLoginMenu = useAddToBasket((state) => state.toggleLoginMenu);
  const setToggleLoginMenu = useAddToBasket(
    (state) => state.setToggleLoginMenu
  );

  useEffect(() => {
    let NavDown = () => {
      if (makeNavGoDown) {
        headerElement.current.classList.remove("scrollHidden");
        setMakeNavGoDown(false);
      }
    };
    NavDown();
  }, [makeNavGoDown]);

  // this will toggle login if false when click on basket

  useEffect(() => {
    let loginPopUp = () => {
      if (toggleLoginMenu) {
        handleClickOpen();
      }
    };
    loginPopUp();
  }, [toggleLoginMenu]);

  // this to change logo in sm screens;
  const [imageSrc, setImageSrc] = useState(Logo);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 560) {
        setImageSrc(minilogo);
      } else {
        setImageSrc(Logo);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  //alert
  const CheckoutCompleted = useAddToBasket((state) => state.CheckoutCompleted);
  const setCheckoutCompleted = useAddToBasket(
    (state) => state.setCheckoutCompleted
  );
  useEffect(() => {
    if (CheckoutCompleted) {
      handleClickSnack();
      setCheckoutCompleted(false);
    }
  }, [CheckoutCompleted]);
  const [openSnack, setOpenSnack] = useState(false);

  const handleClickSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };
  return (
    <>
      <header
        ref={headerElement}
        id="header"
        className="w-full z-[100] font-markazi fixed hover:bg-slate-50 bg-white transition-all duration-300 ease-out"
      >
        <nav className="nav-container w-full max-w-[1260px] mx-auto flex-desktop nav-size">
          <div className="div-img py-6 px-3 flex-desktop lg:w-auto sm:w-full ">
            <Link to="/">
              <img
                src={imageSrc}
                className="nav-img-size cursor-pointer "
                alt=""
                onClick={() => scrollIntoSection("home")}
              />
            </Link>
            {loginChecker ? (
              <div className=" lg:hidden sm:flex  ml-auto mr-3 items-center lg:space-x-2 md:space-x-2  sm:space-x-1 ">
                <Basket />
                <UserProfile />
              </div>
            ) : null}
            <img
              ref={active}
              src={HamMenu}
              onClick={menuHandler}
              alt=""
              className="hidden-desktop cursor-pointer w-14 h-12 py-1 px-3 rounded-sm hover:bg-slate-100 duration-150 ease-in-out "
            />
          </div>
          <ul className="nav-ul hidden-phone-special lg:flex-desktop xl:space-x-6 lg:space-x-4 py-6">
            <li onClick={() => scrollIntoSection("home")}>
              <Link
                className=" lg:px-[2px] lg:py-[5px] md:px-[100px] md:py-[10px] sm:px-[90px] sm:py-[10px]"
                to="/"
              >
                Home
              </Link>
            </li>
            <li onClick={() => scrollIntoSection("menu")}>
              <Link
                className=" lg:px-[2px] lg:py-[5px] md:px-[100px] md:py-[10px] sm:px-[90px] sm:py-[10px]"
                to="/"
              >
                Menu
              </Link>
            </li>
            <li onClick={() => scrollIntoSection("reviews")}>
              <Link
                className=" lg:px-[2px] lg:py-[5px] md:px-[100px] md:py-[10px] sm:px-[90px] sm:py-[10px]"
                to="/"
              >
                Reviews
              </Link>
            </li>
            <li onClick={() => scrollIntoSection("about")}>
              <Link
                className=" lg:px-[2px] lg:py-[5px] md:px-[100px] md:py-[10px] sm:px-[90px] sm:py-[10px]"
                to="/"
              >
                About
              </Link>
            </li>

            <li onClick={() => scrollIntoSection("header")}>
              <Link
                className=" lg:px-[2px]  lg:py-[7px] md:px-[100px] md:py-[10px] sm:px-[90px] sm:py-[10px]"
                to="../OnlineMenu"
              >
                Order Online
              </Link>
            </li>
            {loginChecker ? null : (
              <li className="hidden-desktop " onClick={handleClickOpen}>
                <Link to="/">Login</Link>
              </li>
            )}
          </ul>
          <div className="py-6  lg:block  sm:hidden nav-size-btn font-karla font-bold text-greenPrimary ">
            {loginChecker ? (
              <div className="flex justify-center items-center space-x-2">
                <Basket />
                <UserProfile />
              </div>
            ) : (
              <button
                className="  py-1 px-3   hover:bg-slate-100 rounded-md transition-all duration-200 ease-in-out "
                onClick={handleClickOpen}
              >
                Login
              </button>
            )}
          </div>
        </nav>
        {showAlert ? (
          <Alert
            className="absolute max-w-fit text-2xl !z-[999]  top-[10%] left-[50%] translate-x-[-50%]  "
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
          >
            Login was successful.
          </Alert>
        ) : null}
      </header>
      <Dialog
        className="!bg-black/30"
        open={open}
        onClose={handleClickClose}
        disableScrollLock
        slotProps={{
          paper: {
            onSubmit: () => {
              formik.handleSubmit;
              handleClickClose();
            },
            sx: {
              backgroundColor: "edefee",
              maxWidth: "400px",
            },
          },
        }}
      >
        {alertError ? (
          <Alert
            className="absolute z-50  w-[310px] top-[11%] left-[50%] translate-x-[-50%] "
            severity="error"
          >
            Email or Password is not valid. you need to create a new account.
          </Alert>
        ) : null}

        <DialogTitle className="text-black !text-2xl !mb-3 !mx-auto !font-bold  !font-karla">
          {login ? "Login" : "Sign Up"}
        </DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
            <DialogContentText className="!mb-5 !text-greenPrimary !ml-[3px] text-center ">
              {login
                ? "To add items to Basket you need to Login"
                : "To add items to Basket you need to Sign Up:"}
            </DialogContentText>

            <ThemeProvider theme={theme}>
              {!login ? (
                <div className="flex space-x-5 mb-2">
                  <TextField
                    margin="dense"
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    type="string"
                    variant="outlined"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    error={
                      formik.touched.firstName && !!formik.errors.firstName
                    }
                    helperText={
                      formik.errors.firstName ? formik.errors.firstName : ""
                    }
                  />
                  <TextField
                    margin="dense"
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    type="string"
                    variant="outlined"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    error={formik.touched.lastName && !!formik.errors.lastName}
                    helperText={
                      formik.errors.lastName ? formik.errors.lastName : ""
                    }
                  />
                </div>
              ) : (
                ""
              )}
              <TextField
                margin="dense"
                id="name"
                name="email"
                label="Email Address"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && !!formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
                fullWidth
                variant="outlined"
              />
            </ThemeProvider>
            <ThemeProvider theme={themeText}>
              <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={formik.touched.password && !!formik.errors.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                {formik.touched.password && !!formik.errors.password ? (
                  <FormHelperText sx={{ color: "#d32f2f" }}>
                    {formik.errors.password}
                  </FormHelperText>
                ) : (
                  ""
                )}
                <u
                  onClick={loginFunhandler}
                  className={`!mx-auto !my-8 ${
                    alertError ? "text-red-400" : "text-black"
                  }  cursor-pointer`}
                >
                  {login
                    ? "you dont have an account?"
                    : "you already have an account?"}
                </u>
              </FormControl>
            </ThemeProvider>
            <DialogActions>
              <Button
                onClick={handleClickClose}
                sx={{
                  borderColor: "gray",
                  color: "black",
                  "&:hover": {
                    borderColor: "black",
                    backgroundColor: "lightgray",
                    color: "black",
                  },
                  "&.Mui-focused": {
                    borderColor: "#495e57",
                    backgroundColor: "lightgreen",
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                sx={{
                  borderColor: "gray",
                  borderRadius: "8px",
                  color: "black",
                  fontWeight: "550",
                  padding: "5px 10px",

                  backgroundColor: "#f4ce14",
                  "&:hover": {
                    borderColor: "black",
                    backgroundColor: "#f4ce14",
                    color: "#495e57",
                  },
                  "&.Mui-focused": {
                    borderColor: "#495e57",
                    backgroundColor: "lightgreen",
                  },
                }}
              >
                {login ? " Login" : "Sign UP"}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={openSnack}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          severity="success"
          sx={{ width: "100%" }}
        >
          Your orders will be delivered as soon as possible
        </Alert>
      </Snackbar>
    </>
  );
}

export default Header;

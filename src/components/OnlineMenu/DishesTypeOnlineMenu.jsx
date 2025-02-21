import { Link } from "react-router-dom";
import {
  TextField,
  ThemeProvider,
  createTheme,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useAddToBasket } from "../../store/GlobalStates";
function DishesTypeOnlineMenu() {
  let handler = (e) => {
    let parent = document.getElementById("parentLink-dishes");
    let arr = Array.from(parent.children);
    arr.map((ele) => {
      ele == e.target
        ? (e.target.style.cssText = `color: #ee9972; text-decoration: underline; text-decoration-color:#ee9972; text-underline-offset: 8px;`)
        : (ele.style.cssText = `color: #f4ce14; text-decoration: none;`);
    });
  };

  const setSearchInput = useAddToBasket((state) => state.setSearchInput);
  const searchInput = useAddToBasket((state) => state.searchInput);
  const ClearSearchInput = useAddToBasket((state) => state.ClearSearchInput);

  let changeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  let handleCloseTheSearch = () => {
    ClearSearchInput();
  };
  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputLabel-root": { color: "#f4ce14 !important" },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "black !important",
            },
            "& .MuiInputBase-input": { color: "#f4ce14", margin: "auto 5px" },

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#f4ce14",
                borderRadius: "150px",
              },
              "&:hover fieldset": { borderColor: "#f4ce14" },
              "&.Mui-focused fieldset": { borderColor: "#f4ce14" },
            },
          },
        },
      },
    },
  });

  return (
    <section className="pt-[100px] mb-10 ">
      <div className=" bg-greenPrimary w-full text-yellowPrimary lg:text-xl md:text-lg sm:text-sm px-10 py-10">
        <p className="text-center font-markazi lg:text-4xl md:text-3xl sm:text-2xl mb-10 text-white">
          Restaurant Menu{" "}
        </p>
        <div
          id="parentLink-dishes"
          className="max-w-[1200px]  px-[10px] mx-auto flex justify-center lg:space-x-20 md:space-x-15 sm:space-x-7 xl:text-[1.3rem] lg:text-[1.25rem] md:text-[1.2rem]  sm:text-[1.01rem] items-center "
        >
          <Link
            onClick={handler}
            to="../OnlineMenu/BreakFast"
            className="p-1 hover:opacity-80"
          >
            BreakFast
          </Link>
          <Link
            onClick={handler}
            to="../OnlineMenu"
            className="p-1 text-orangeSecondary underline-offset-[8px] underline hover:opacity-80"
          >
            Lunch
          </Link>
          <Link
            onClick={handler}
            to="../OnlineMenu/Dinner"
            className="p-1 hover:opacity-80"
          >
            Dinner
          </Link>
          <Link
            onClick={handler}
            to="../OnlineMenu/Specials"
            className="p-1 hover:opacity-80"
          >
            Specials
          </Link>
        </div>
        <div className="justify-self-center relative mt-10 lg:w-[500px] md:w-[350px] sm:w-[300px]">
          <ThemeProvider theme={theme}>
            {searchInput ? (
              <CloseIcon
                onClick={handleCloseTheSearch}
                className="absolute top-[50%] translate-y-[-50%] lg:left-[81%] md:left-[75%] sm:left-[72%]
            cursor-pointer z-20 p-1 box-content  bg-yellowPrimary/5 rounded-full hover:bg-yellowPrimary/10"
              />
            ) : null}
            <TextField
              fullWidth
              id="Search"
              value={searchInput}
              onChange={changeHandler}
              placeholder="Search..."
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="center">
                      <SearchIcon className="!text-yellowPrimary" />
                    </InputAdornment>
                  ),
                },
              }}
            ></TextField>
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
}

export default DishesTypeOnlineMenu;





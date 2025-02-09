import { Link } from "react-router-dom";
import xx from "../../assets/Xicon.svg";
// import NumberInput from "../ui/NumberInput";
import TextField from "@mui/material/TextField";
import ProgressBar from "../ui/progress";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import dayjs from "dayjs";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
function AboutPage() {
  const validationSchema = yup.object({
    number: yup
      .number()
      .typeError("Number of guests must be a valid number")
      .min(1, "min is 1")
      .max(10, "max is 10")
      .required("Please provide Number of guests  "),
    occasion: yup.string().required("Please select an ocassion"),
    time: yup.string().required("Please select a time"),
    date: yup
      .mixed()
      .test("is-dayjs", "Please select a valid date.", (value) => {
        return dayjs.isDayjs(value) && value.isValid();
      })
      .required("Please select a valid Date"),
  });

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      number: sessionStorage.getItem("number") ?? "",
      occasion:sessionStorage.getItem("occasion") ?? "",
      time: sessionStorage.getItem("time") ?? "",
      date: sessionStorage.getItem("date") != null? dayjs(sessionStorage.getItem("date")) : null ,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let obj = values;
      for (let key in obj) {
        sessionStorage.setItem(key, obj[key]);
      }

      navigate("userDetails");
    },
  });
  let errorDate = useRef(false);
  errorDate.current = formik.touched.date && !!formik.errors.date;
  const themeSelect = createTheme({
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "gray",
            "&.Mui-focused": { color: "#495e57" },
          },
        },
      },
      MuiSelect: {
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
    },
  });
  const themeDate = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputLabel-root": { color: "gray" },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#495e57",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: errorDate.current ? "#d32f2f" : "gray",
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
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputLabel-root": { color: "gray" },
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

  return (
    <main className="w-full min-h-[100vh] lg:pt-[170px] sm:pt-[120px] bg-greenPrimary">
      <section className="max-w-[400px] mx-auto flex  justify-center py-5 rounded-lg ">
        <form
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-full  relative form-style  p-10 pb-8 rounded-md bg-graySecondary "
        >
          <Link to="/">
            <img
              src={xx}
              alt=""
              className="lg:w-11  sm:w-10 absolute top-0 left-0 hover:bg-gray-200  rounded-lg p-2"
            />
          </Link>
          <div className="mb-10">
            <ProgressBar stepper={0} />
          </div>

          <FormControl sx={{ m: 1, mb: 2, minWidth: 100 }}>
            <ThemeProvider theme={themeText}>
              <TextField
                id="outlined-basic"
                label=" Number of guests"
                {...formik.getFieldProps("number")}
                error={formik.touched.number && !!formik.errors.number}
                variant="outlined"
                helperText={formik.errors.number}
              />
            </ThemeProvider>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <ThemeProvider theme={themeSelect}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Occasion
              </InputLabel>
              <Select
                {...formik.getFieldProps("occasion")}
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
                label="Occasion"
                error={formik.touched.occasion && !!formik.errors.occasion}
              >
                <MenuItem value="none">
                  <em className="w-[150px]">None</em>
                </MenuItem>
                <MenuItem value={"Birthday"}>
                  {" "}
                  <p className="w-[150px]">Birthday</p>{" "}
                </MenuItem>
                <MenuItem value={"Anniversary"}>
                  {" "}
                  <p className="w-full ">Anniversary</p>{" "}
                </MenuItem>
              </Select>
              {formik.touched.occasion && !!formik.errors.occasion ? (
                <FormHelperText sx={{ color: "#d32f2f" }}>
                  {formik.errors.occasion}
                </FormHelperText>
              ) : (
                ""
              )}
            </ThemeProvider>
          </FormControl>

          <FormControl sx={{ m: 1, my: 2, minWidth: 100 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <ThemeProvider theme={themeDate}>
                <DatePicker
                  label="Pick a date"
                  disablePast
                  format="DD/MM/YYYY"
                  value={formik.values.date}
                  onChange={(newValue) => {
                    formik.setFieldValue("date", newValue);
                  }}
                />
              </ThemeProvider>
            </LocalizationProvider>
            {formik.touched.date && !!formik.errors.date ? (
              <FormHelperText sx={{ color: "#d32f2f" }}>
                {formik.errors.date}
              </FormHelperText>
            ) : (
              ""
            )}
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <ThemeProvider theme={themeSelect}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Time
              </InputLabel>
              <Select
                {...formik.getFieldProps("time")}
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                autoWidth
                label="Time"
                error={formik.touched.time && !!formik.errors.time}
              >
              <MenuItem value={"17:00 PM"}> <p className="w-[170px]">17:00 PM</p> </MenuItem>
              <MenuItem value={"18:00 PM"}> <p className="w-[170px]">18:00 PM</p></MenuItem>
              <MenuItem value={"19:00 PM"}> <p className="w-[170px]">19:00 PM</p> </MenuItem>
              <MenuItem value={"20:00 PM"}> <p className="w-[170px]">20:00 PM</p> </MenuItem>
              <MenuItem value={"21:00 PM"}> <p className="w-[170px]">21:00 PM</p> </MenuItem>
              <MenuItem value={"22:00 PM"}> <p className="w-[170px]">22:00 PM</p> </MenuItem>
              </Select>
              {formik.touched.time && !!formik.errors.time ? (
                <FormHelperText sx={{ color: "#d32f2f" }}>
                  {formik.errors.time}
                </FormHelperText>
              ) : (
                ""
              )}
            </ThemeProvider>
          </FormControl>

          <button
            id="submit-btn"
            type="submit"
            className="text-center self-center rounded-md cursor-pointer "
          >
            Make your reservation
          </button>
        </form>
      </section>
    </main>
  );
}

export default AboutPage;

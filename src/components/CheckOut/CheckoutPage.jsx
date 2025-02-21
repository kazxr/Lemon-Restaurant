import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import * as yup from "yup";
import { useFormik } from "formik";
import Map from "./map";
import { Button, Divider, TextField } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import Tooltip from "@mui/material/Tooltip";
import Qicon from "@mui/icons-material/HelpOutline";
import IconButton from "@mui/material/IconButton";
import Cvv from "../../assets/CVV.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useState } from "react";
import { useAddToBasket } from "../../store/GlobalStates";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { useNavigate } from "react-router-dom";
function CheckoutPage() {
  let navigate = useNavigate();
  const ThisToTakeLocationLongAndAlt = useAddToBasket(
    (state) => state.ThisToTakeLocationLongAndAlt
  );
  const setCheckoutCompleted = useAddToBasket(
    (state) => state.setCheckoutCompleted
  );
  const ClearBasket = useAddToBasket((state) => state.ClearBasket);
  let [payOnline, setPayOnline] = useState(false);

  const validationSchema = yup.object({
    Location: yup.string().required("Please add your Location"),
    Payment: yup.string().required("Please select a Payment Method"),
    ...(payOnline && {
      Card: yup
        .string()
        .matches(/(\d{4}\s)(\d{4}\s)(\d{4}\s)(\d{4})/, "must be 16 digits")
        .required("Please enter your card number"),
      Date: yup
        .string()
        .matches(/(^([0][1-9]|1[0-2])\/([0-9]{2})$)/gi, "must Valid mm/yy ")
        .test("year above 25", "Card is expired", (value) => {
          if (!value) return false; 
          const [monthStr, yearStr] = value.split("/"); 
          const month = parseInt(monthStr, 10); 
          const year = parseInt(yearStr, 10);  

          const currentDate = new Date();
          const currentYear = currentDate.getFullYear().toString().slice(-2);
          const currentMonth = currentDate.getMonth() + 1;

          if (year < currentYear) {
            return false; 
          } else if (year === currentYear) {
            return month < currentMonth; 
          } else {
            return true; 
          }
        })
        .required("Required "),
      Code: yup.string().matches(/\w{3}/gi, "must be 3").required("Required"),
      Name: yup.string().required("Please enter the cardholder name"),
    }),
  });

  const formik = useFormik({
    initialValues: {
      Location: "",
      Payment: "",
      ...(payOnline && { Card: "", Date: "", Code: "", Name: "" }),
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      ClearBasket();
      setCheckoutCompleted(true);
      navigate("/");
    },
  });
  useEffect(() => {
    formik.setFieldValue("Card", "", false);
    formik.setFieldValue("Date", "", false);
    formik.setFieldValue("Code", "", false);
    formik.setFieldValue("Name", "", false);
  }, [payOnline]);

  useEffect(() => {
    if (formik.values.Payment === "onlinePayment") {
      setPayOnline(true);
    } else {
      setPayOnline(false);
    }
  }, [formik.values.Payment]);

  useEffect(() => {
    const m = formik.values.Date || false;
    if (m && m.match(/[0-9]{2}/gi)) {
      if (m.length == 2) {
        formik.values.Date = m + "/";
      }
    }
  }, [formik.values.Date]);

  useEffect(() => {
    const m = formik.values.Card || false;
    if (m && m.length == 16) {
      const x = m.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/g, "$1 $2 $3 $4");
      formik.setFieldValue("Card", x);
    }
  }, [formik.values.Card]);

  useEffect(() => {
    formik.setFieldValue("Location", ThisToTakeLocationLongAndAlt);
  }, [ThisToTakeLocationLongAndAlt]);

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

  return (
    <section className="lg:pt-[100px] sm:pt-[130px] mb-5 mx-5">
      <div className=" max-w-[500px] min-w-[300px]  bg-graySecondary mx-auto rounded-md">
        <h1 className="text-center font-bold font-karla text-greenPrimary text-2xl py-5">
          Check Out
        </h1>
        <div className="mx-5 mb-3">
          <h1 className="my-2 mx-1 text-greenPrimary font-karla">
            Choose your Location:
          </h1>
          <Map />
          {!ThisToTakeLocationLongAndAlt && formik.touched.Location ? (
            <FormHelperText className="!text-red-500 !mt-3 !text-center">
              {formik.errors.Location}
            </FormHelperText>
          ) : (
            ""
          )}
        </div>
        <Divider className="!my-5 ">And</Divider>

        <form
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className=" mx-5 pb-3"
        >
          <ThemeProvider theme={theme}>
            <TextField
              className="!mb-10 !hidden"
              fullWidth
              value={formik.values.Location}
              error={formik.errors.Location && formik.touched.Location}
              onChange={formik.handleChange}
              id="Location"
              name="Location"
              label="home Location"
              variant="outlined"
              helperText={formik.errors.Location}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AddLocationAltIcon />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </ThemeProvider>

          <FormControl>
            <FormLabel className="mb-2 !text-greenPrimary" id="Payment">
              Payment method
            </FormLabel>
            <RadioGroup
              aria-labelledby="Payment"
              name="Payment"
              value={formik.values.Payment}
              onChange={formik.handleChange}
            >
              <FormControlLabel
                value="cash"
                className="!-mb-2"
                control={
                  <Radio
                    sx={{
                      color: "#495e57",
                      "&.Mui-checked": {
                        color: "#495e57",
                      },
                    }}
                  />
                }
                label="Cash on Delevery"
              />
              <FormControlLabel
                value="onlinePayment"
                control={
                  <Radio
                    sx={{
                      color: "#495e57",
                      "&.Mui-checked": {
                        color: "#495e57",
                      },
                    }}
                  />
                }
                label="Pay now"
              />
            </RadioGroup>
            {formik.errors.Payment && formik.touched.Payment && (
              <FormHelperText className="!text-red-500 !ml-0 !mb-5">
                {formik.errors.Payment}
              </FormHelperText>
            )}
          </FormControl>
          {formik.values.Payment === "onlinePayment" && (
            <>
              <ThemeProvider theme={theme}>
                <TextField
                  className="!mt-4"
                  fullWidth
                  value={formik.values.Card}
                  error={formik.errors.Card && formik.touched.Card}
                  onChange={formik.handleChange}
                  id="Card"
                  name="Card"
                  label="Card Number"
                  variant="outlined"
                  helperText={formik.touched.Card ? formik.errors.Card : ""}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <CreditCardIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />

                <div className="flex space-x-5 my-4 ">
                  <div>
                    <TextField
                      id="Date"
                      label="MM/YY"
                      variant="outlined"
                      value={formik.values.Date}
                      error={formik.errors.Date && formik.touched.Date}
                      onChange={formik.handleChange}
                      helperText={formik.touched.Date ? formik.errors.Date : ""}
                    />
                  </div>
                  <div>
                    {" "}
                    <TextField
                      id="Code"
                      label="Security Code"
                      variant="outlined"
                      value={formik.values.Code}
                      error={formik.errors.Code && formik.touched.Code}
                      onChange={formik.handleChange}
                      helperText={formik.touched.Code ? formik.errors.Code : ""}
                    />
                  </div>

                  <Tooltip
                    arrow
                    className="!ml-0 hover:!bg-graySecondary"
                    placement="left"
                    sx={{
                      "& .": {
                        backgroundColor: "red",
                      },
                    }}
                    title={
                      <>
                        <div className="!bg-white flex flex-col items-center">
                          <h1 className="text-black font-karla">
                            3 digits on Card back
                          </h1>
                          <img
                            src={Cvv}
                            className="w-[70px] object-cover"
                            alt=""
                          />
                        </div>
                      </>
                    }
                  >
                    <IconButton>
                      <Qicon />
                    </IconButton>
                  </Tooltip>
                </div>
                <TextField
                  value={formik.values.Name}
                  error={formik.touched.Name && formik.errors.Name}
                  onChange={formik.handleChange}
                  fullWidth
                  id="Name"
                  label="Cardholder name"
                  variant="outlined"
                  helperText={formik.errors.Name ? formik.errors.Name : ""}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </ThemeProvider>
            </>
          )}
          <Button
            type="submit"
            className="!bg-yellowPrimary !text-black text-[1.2rem] !mt-5 !rounded-md !px-5 !block  !mx-auto"
          >
            submit
          </Button>
        </form>
      </div>
    </section>
  );
}

export default CheckoutPage;

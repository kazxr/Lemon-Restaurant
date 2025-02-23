import { useNavigate } from "react-router-dom";
import ProgressBar from "../ui/progress";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import xx from "../../assets/left1.png";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";

function ReserveUserDetails() {
  // this code to block access to this form if the prevForm empty;
  let arr = ["number", "date", "time", "occasion"];
  useEffect(() => {
    let checker = false;
    for (let key of arr) {
      if (!sessionStorage.getItem(key)) {
        checker = true;
        break;
      }
    }
    if (checker) {
      navigate("../Reserve");
    }
  }, []);

  const validationSchema = yup.object({
    firstName: yup.string().required("First name is Required"),
    lastName: yup.string().required("Last name is Required"),
    phone: yup
      .string()
      .matches(
        /(^[0-9]{3}-[0-9]{3}-[0-9]{4}$)|(^[0-9]{10}$)|(^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$)/,
        "Phone number must be exactly 10 digits"
      )
      .required("Please Provide your Phone number"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Please Provide your email"),
    specialRequest: yup.string().optional(),
  });

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: sessionStorage.getItem("firstName") ?? "",
      lastName: sessionStorage.getItem("lastName") ?? "",
      phone: sessionStorage.getItem("phone") ?? "",
      email: sessionStorage.getItem("email") ?? "",
      specialRequest: sessionStorage.getItem("specialRequest") ?? "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
     
      let obj = values;

      for (let key in obj) {
        sessionStorage.setItem(key, obj[key]);
      }
      navigate("../submit/");
    },
  });

  const theme = createTheme({
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

  /// this to reforme phone input to (123)-123-1234
  useEffect(() => {
    if (
      /(^[0-9]{3}-[0-9]{3}-[0-9]{4}$)|(^[0-9]{10}$)/.test(formik.values.phone)
    ) {
      let x = formik.values.phone.replace(/[-|(|)]/gi, "");
      let y = x.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      formik.setFieldValue("phone", y);
    }
  }, [formik.values.phone]);


  
  return (
    <main className="w-full min-h-[100vh] lg:pt-[170px] sm:pt-[120px] bg-greenPrimary">
      <section className="max-w-[500px] mx-auto flex  py-5 rounded-lg ">
        <form
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          action=""
          className="flex flex-col  w-full sm:mx-5 relative form-style  p-10 pb-8 rounded-md bg-graySecondary "
        >
          {" "}
          <Link to="/Reserve/">
            <img
              src={xx}
              alt=""
              className="lg:w-14  sm:w-12 absolute top-0 left-0 hover:bg-gray-200  rounded-lg p-2"
            />
          </Link>
          <ProgressBar stepper={1} />
          <div className="flex  space-x-5 max-w-[450px] mt-14">
            <ThemeProvider theme={theme}>
              <TextField
                id="firstName"
                label="First name"
                variant="outlined"
                {...formik.getFieldProps("firstName")}
                error={Boolean(
                  formik.touched.firstName && formik.errors.firstName
                )}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <TextField
                id="lastName"
                label="Last name"
                variant="outlined"
                {...formik.getFieldProps("lastName")}
                error={Boolean(
                  formik.touched.lastName && formik.errors.lastName
                )}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </ThemeProvider>
          </div>
          <ThemeProvider theme={theme}>
            <TextField
              className="!mt-5"
              id="email"
              label="Email "
              variant="outlined"
              {...formik.getFieldProps("email")}
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              className="!mt-5"
              id="phone"
              label="Phone number"
              variant="outlined"
              {...formik.getFieldProps("phone")}
              error={Boolean(formik.touched.phone && formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              className="!mt-5"
              autoComplete=""
              id="outlined-basic"
              label="Special Request (optional)"
              variant="outlined"
              {...formik.getFieldProps("specialRequest")}
              error={Boolean(
                formik.touched.specialRequest && formik.errors.specialRequest
              )}
              helperText={formik.errors.specialRequest}
            />
          </ThemeProvider>
          <button
            id="submit-btn"
            type="submit"
            className="text-center self-center rounded-md cursor-pointer "
          >
            Submit your data
          </button>
        </form>
      </section>
      
    </main>
  );
}

export default ReserveUserDetails;

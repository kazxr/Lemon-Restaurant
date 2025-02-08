import { Link } from "react-router-dom";
import x from "../assets/greenX.png";
import xx from "../assets/Xicon.svg";
import NumberInput from "../components/ui/NumberInput";
import ProgressBar from "../components/ui/progress";
import { FormControl, FormHelperText, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import dayjs from "dayjs";
import {useRef} from "react"

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
function AboutPage() {
  let [error,setError] = useState(false)

  const validationSchema = yup.object({
    number: yup
      .number()
      .required("Please type guests number"),
    selectOccasion: yup.string().required("Please select an ocassion"),
    selectTime: yup.string().required("Please select a time"),
    date: yup.mixed()
    .test(
      "is-dayjs",
      "Please select a valid date.",
      (value) => dayjs.isDayjs(value) && value.isValid()
    ).required("Please select a Date"),
  });

  const formik = useFormik({
    initialValues: {
      number: "",
      selectOccasion: "",
      selectTime: "",
      date:dayjs(""),
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // this to make calendar outline red;
  let calendarError = useRef(false)
  calendarError.current= Boolean(formik.touched.date && !!formik.errors.date );
  

  return (
    <main className="w-full min-h-[100vh] lg:pt-[170px] sm:pt-[120px] bg-greenPrimary">
      <section className="max-w-[500px] mx-auto flex  justify-center py-5 rounded-lg ">
        <form
          noValidate
          onSubmit={formik.handleSubmit}
          action=""
          className="flex flex-col relative form-style  p-10 pb-8 rounded-md bg-graySecondary "
        >
          {" "}
          <Link to="/">
            <img
              src={xx}
              alt=""
              className="lg:w-10  sm:w-10 absolute top-0 left-0 hover:bg-gray-200  rounded-lg p-2"
            />
          </Link>
          <ProgressBar stepper={0} />
          <FormControl variant="outlined" required>
            <label htmlFor="number" className="mt-8">
              Number of guests :
            </label>
            <NumberInput
              id="number"
              boolean={formik.touched.number && !!formik.errors.number}
              min={1}
              max={10}
              step={1}
              value={Number(formik.values.number)}
              onChange={(event, value) =>formik.setFieldValue("number", value)}
            />
            {formik.touched.number && !!formik.errors.number ? (
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.number}
              </FormHelperText>
            ) : (
              ""
            )}
          </FormControl>
          <FormControl required>
            <label htmlFor="select" className="mt-5">
              Select occasion :
            </label>
            <Select
              error={
                formik.touched.selectOccasion && !!formik.errors.selectOccasion
              }
              id="select"
              {...formik.getFieldProps("selectOccasion")}
              // this for placehlder
              displayEmpty
              renderValue={(selected) => {
                return selected ? (
                  selected
                ) : (
                  <p style={{ color: "gray" }}>Occasion...</p>
                );
              }}
              sx={{
                "& .css-1rju2q6-MuiButtonBase-root-MuiMenuItem-root": {
                  backgroundColor: "transparent",
                  paddingLeft: "0px",
                  fontSize: "0.9rem",
                },
                "& .css-1rju2q6-MuiButtonBase-root-MuiMenuItem-root:hover": {
                  backgroundColor: "transparent",
                  paddingLeft: "0px",
                },
                "& .MuiInputBase-root": {
                  color: "gray",
                  fontSize: "0.9rem",
                  borderRadius: "8px",
                  paddingLeft: "0px",
                },
                "& .MuiSelect-select": {
                  padding: "15px",
                  color: "gray",
                  fontSize: "0.9rem",
                  borderRadius: "10px",
                  paddingLeft: "17px",
                  backgroundColor: "white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "0px", // Customize border color
                  boxShadow: "0 0 3px #495e57",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#cbd5e0", // Customize hover border color
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "495e57",
                  border: "1px solid",
                },
              }}
              className="bg-slate-50 h-[50px]  !shadow-slate-50 !rounded-[8px]"
            >
              <MenuItem value={"None"}>None</MenuItem>
              <MenuItem value={"Birthday"}>Birthday</MenuItem>
              <MenuItem value={"Anniversary"}>Anniversary</MenuItem>
            </Select>
            {formik.touched.selectOccasion && !!formik.errors.selectOccasion ? (
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.selectOccasion}
              </FormHelperText>
            ) : (
              ""
            )}
          </FormControl>
          <FormControl required>
            <label htmlFor="time" className="mt-5">
              Choose time :
            </label>
            <Select
              id="time"
              error={formik.touched.selectTime && !!formik.errors.selectTime}
              {...formik.getFieldProps("selectTime")}
              // this for placehlder
              displayEmpty
              renderValue={(selected) => {
                return selected ? (
                  selected
                ) : (
                  <p style={{ color: "gray" }}>Time...</p>
                );
              }}
              sx={{
                "& .css-1rju2q6-MuiButtonBase-root-MuiMenuItem-root": {
                  backgroundColor: "transparent",
                  paddingLeft: "0px",
                  fontSize: "0.9rem",
                },
                "& .css-1rju2q6-MuiButtonBase-root-MuiMenuItem-root:hover": {
                  backgroundColor: "transparent",
                  paddingLeft: "0px",
                },
                "& .MuiInputBase-root": {
                  color: "gray",
                  fontSize: "0.9rem",
                  borderRadius: "8px",
                  paddingLeft: "0px",
                },
                "& .MuiSelect-select": {
                  padding: "15px",
                  color: "gray",
                  fontSize: "0.9rem",
                  borderRadius: "10px",
                  paddingLeft: "17px",
                  backgroundColor: "white",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "0px", // Customize border color
                  boxShadow: "0 0 3px #495e57",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#cbd5e0", // Customize hover border color
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "495e57",
                  border: "1px solid",
                },
              }}
              className="bg-slate-50 h-[50px]  !shadow-slate-50 !rounded-[8px]"
            >
              <MenuItem value={"17:00"}>17:00 PM</MenuItem>
              <MenuItem value={"18:00"}>18:00 PM</MenuItem>
              <MenuItem value={"19:00"}>19:00 PM</MenuItem>
              <MenuItem value={"20:00"}>20:00 PM</MenuItem>
              <MenuItem value={"21:00"}>21:00 PM</MenuItem>
              <MenuItem value={"22:00"}>22:00 PM</MenuItem>
            </Select>
            {formik.touched.selectTime && !!formik.errors.selectTime ? (
              <FormHelperText sx={{ color: "red" }}>
                {formik.errors.selectTime}
              </FormHelperText>
            ) : (
              ""
            )}
          </FormControl>

          <FormControl className="">
            <label htmlFor="date" className="mt-5 ">
              Choose date :
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                id="date"
                className="!border-none  hover:!ring-0 "
                format="DD/MM/YYYY"
                disablePast
                {...formik.getFieldProps("date")}
                value={formik.values.date}
                onChange={(value) =>{console.log(typeof(value),value); formik.setFieldValue("date", value)}}
                sx={{
                  // Input Field Styling
                  "& .MuiInputBase-root": {
                    backgroundColor: "white",
                    fontSize: "0.9rem",
                    color: "gray",
                    opacity: "1",
                    paddingLeft: "3px",
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: calendarError.current
                      ? "none"
                      : "0px 0px 2.5px #495e57",
                    height: calendarError.current ? "51px" : "50px",
                  },
                  "& .MuiInputBase-root:hover": {
                    border: "none" ,
                    boxShadow:calendarError.current
                      ? "none"
                      : "0px 0px 2.5px #495e57",
                    height: calendarError.current ? "51px" : "50px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border:calendarError.current? "1px #EF4444 solid": "none",
                    boxShadow:calendarError.current
                      ? "0 0  1px #EF4444;"
                      : "none",
                    height:calendarError.current?"56px" :"55px",
                  },
                  "& .css-jupps9-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ":
                    { 
                      
                      border: "1px black solid ",
                      boxShadow: "0px 0px 2px #495e57",
                      height: "56px",
                    },
                }}
                // this for the calendar;
                slotProps={{
                  popper: {
                    sx: {
                      color: "#1565c0",
                      borderRadius: "5px",
                      borderWidth: "1px",
                      borderColor: "#2196f3",
                      border: "1.5px solid #495e57",
                    },
                  },
                  layout: {
                    sx: {
                      borderRadius: "20px",
                      borderWidth: "0px",
                      borderColor: "#2196f3",
                      border: "0px solid red",
                      color: "#495e57",
                    },
                  },
                }}
              />
            </LocalizationProvider>
            {formik.touched.date && !!formik.errors.date ? (
              <FormHelperText id="calendar-error" sx={{ color: "red" }}>
                {formik.errors.date}
              </FormHelperText>
            ) : (
              ""
            )}
            
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

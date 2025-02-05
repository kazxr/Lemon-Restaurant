import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
      className="!border-none  hover:!ring-0 "
        format="DD/MM/YYYY"
        disablePast
        sx={{
          
          // Input Field Styling
          ".MuiInputBase-root": {
            backgroundColor: "white",
            fontSize: "0.9rem",
            color: "gray",
            paddingLeft: "3px",
            borderRadius: "8px",
            border: "none",
            boxShadow: "0px 0px 2px #495e57",
            height: "50px",
          },".MuiInputBase-root:hover":{
             border: "0px red solid",
            boxShadow: "0px 0px 1.5px #495e57",
            height: "50px",

          },"& .MuiOutlinedInput-notchedOutline":{
            border: "0px red solid",
            boxShadow: "0px 0px 2px #495e57",
            height: "55px",
          },"& .css-jupps9-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{
             border: "0.5px black solid",
            boxShadow: "0px 0px 1.5px #495e57",
            height: "55px",
          }

          
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
  );
}

// sx={{
//             // Input Field Styling
//             "& .MuiInputBase-root": {
//               backgroundColor: "#f8fafc",
//               fontSize:"0.9rem",
//               paddingLeft:"3px",
//               border: "none",
//             },
//             "& css-jupps9-MuiInputBase-root-MuiOutlinedInput-root:hover":{
//                 paddingTop:"0px",
//                 border:"red",
//                 text:"red",
//                 backgroundColor:"blue",
//             },
//           }}

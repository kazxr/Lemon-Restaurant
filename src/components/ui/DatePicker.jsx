import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {useState} from 'react'

export default function BasicDatePicker({ error,value,onchange }) {
 
  console.log(value);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        className="!border-none  hover:!ring-0 "
        format="DD/MM/YYYY"
        disablePast
        value={value}
        onChange={onchange}
        sx={{
          // Input Field Styling
          "& .MuiInputBase-root": {
            backgroundColor: "white",
            fontSize: "0.9rem",
            color: "gray",
            opacity: "1",
            paddingLeft: "3px",
            borderRadius: "8px",
            border: error ? "1px solid #EF4444" : "none",
            boxShadow: error ? "0 0  1px #EF4444;" : "0px 0px 2px #495e57",
            height: error ? "51px" : "50px",
          },
          "& .MuiInputBase-root:hover": {
            border: error ? "1px solid #DC2626" : "0px red solid",
            boxShadow: error ? "0 0  1px #EF4444;" : "0px 0px 2px #495e57",
            height: error ? "51px" : "50px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "0px red solid",
            boxShadow: "0px 0px 2px #495e57",
            height: "55px",
          },
          "& .css-jupps9-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: "0.5px black solid",
              boxShadow: "0px 0px 1.5px #495e57",
              height: "55px",
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
  );
}

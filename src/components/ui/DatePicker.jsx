import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function BasicDatePicker() {
  return (
 
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer   components={["DatePicker"]}>
          <DatePicker
            format="DD/MM/YYYY"
            disablePast // Disable future dates
            sx={{
            // Input Field Styling
            "& .MuiInputBase-root": {
              backgroundColor: "#f8fafc",
              fontSize:"0.9rem",
              borderRadius: "8px",
              paddingLeft:"3px", // Rounded corners for the input field
              border: "none", // Remove the inner border
            },
            "& css-10o2lyd-MuiStack-root":{
                paddingTop:"0px",
                border:"red",
            },
          }}
        
          />
        </DemoContainer >
      </LocalizationProvider>
  );
}

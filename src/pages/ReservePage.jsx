import { Link } from "react-router-dom";
import NumberInput from "../components/ui/NumberInput";
import DatePicker from "../components/ui/DatePicker";
import ProgressBar from "../components/ui/progress"

import {
  FormControl,
  FormHelperText,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

function AboutPage() {
  const [value, setValue] = useState();
    const [error, errorValue] = useState(true);

  

  return (
    <main className="w-full h-[100vh] pt-[170px] bg-greenPrimary">
      <section className="max-w-[500px] mx-auto flex  justify-center py-5 rounded-lg ">
        
        <form
          action=""
          className="flex flex-col form-style  p-10 pb-8 rounded-md bg-graySecondary "
        >
           
                      <ProgressBar stepper={1}  />
          

          <FormControl invalid error={true} variant="outlined" required>
            <label htmlFor="Number" className="mt-8">Number of guests :</label>
            <NumberInput
              id="number"
              min={1}
              max={10}
              step={1}
              value={value}
              onChange={(event, val) => setValue(val)}
            />
          </FormControl>

          <FormControl  required>
            <label htmlFor="select" className="mt-5">
              Ocassion :
            </label>
            <Select
              id="select"
              placeholder="None"
              defaultValue={"None"}
              sx={{
                "& .MuiInputBase-root": {
                  color: "gray",
                  fontSize: "0.9rem",
                  borderRadius: "8px",
                  paddingLeft: "17px",
                  backgroundColor: "blue",
                },
                "& .MuiSelect-select": {
                  color: "gray",
                  fontSize: "0.9rem",
                  borderRadius: "10px",
                  paddingLeft: "17px",
                  backgroundColor:"transparent"
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
          </FormControl>

          <FormControl  required>
            <label htmlFor="time" className="mt-5">
              Choose time :
            </label>
            <Select
              id="time"
              placeholder="time..."
              defaultValue={"17:00"}
              sx={{
                "& .MuiInputBase-root": {
                  color: "gray",
                  fontSize: "0.9rem",
                  borderRadius: "8px",
                  paddingLeft: "17px",
                  backgroundColor: "blue",
                },
                "& .MuiSelect-select": {
                  color: "gray",
                  fontSize: "0.9rem",
                  borderRadius: "10px",
                  paddingLeft: "17px",
                  backgroundColor:"transparent"
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
                  border: "1px solid", // Customize focus border color
                },
              }}
              className="bg-slate-50 h-[50px] !ring-slate-50 !shadow-slate-50 !rounded-[8px]"
            >
              <MenuItem value={"17:00"}>17:00 PM</MenuItem>
              <MenuItem value={"18:00"}>18:00 PM</MenuItem>
              <MenuItem value={"19:00"}>19:00 PM</MenuItem>
              <MenuItem value={"20:00"}>20:00 PM</MenuItem>
              <MenuItem value={"21:00"}>21:00 PM</MenuItem>
              <MenuItem value={"22:00"}>22:00 PM</MenuItem>
            </Select>
          </FormControl>

          <FormControl  className="">
            <label htmlFor="date" className="mt-5 ">
              Choose date :
            </label>
            <DatePicker id="date" 
            
            />
          </FormControl>
          <input
            type="submit"
            value="Make your reservation"
            id="submit-btn"
            className="text-center self-center rounded-md cursor-pointer "
          />
        </form>
      </section>
    </main>
  );
}

export default AboutPage;

import * as React from "react";
import {
  Unstable_NumberInput as BaseNumberInput,
  numberInputClasses,
} from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";

const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: "▴",
          type: "button",
        },
        decrementButton: {
          children: "▾",
          type: "button",
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

export default function NumberInputBasic({ value, onChange, min, max,step,boolean }) {
  return (
    <NumberInput
      placeholder="Type a number…"
      className="h-[50px] "
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      error={boolean}
    />
  );
}
import PropTypes from "prop-types"; 

NumberInputBasic.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.number,
  boolean: PropTypes.bool,
};

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const mainColors = {
  greenPrimary: "#495e57",
  yellowPrimary: "#f4ce14",
  orangeSecondary: "#ee9972",
  lightOrangeSecondary: "#fbdabb",
  graySecondary: "#edefee",
  blackSecondary: "#333333",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const StyledInputRoot = styled("div")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? "white" : "white"};
  border: 0px solid ${
    theme.palette.mode === "dark" ? grey[700] : mainColors["greenPrimary"]
  };
  box-shadow: 0 0px 3px ${
    theme.palette.mode === "dark" ? grey[900] : mainColors["greenPrimary"]
  };
  display: grid;
  grid-template-columns: 1fr 19px;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  column-gap: 8px;
  padding: 4px;

  &.${numberInputClasses.focused} {
    border-color: ${mainColors["greenPrimary"]};
    box-shadow: 0 0 0 1px ${
      theme.palette.mode === "dark"
        ? mainColors["yellowPrimary"]
        : mainColors["greenPrimary"]
    };
       

   
  }

  &:hover {
   

  }

  /* firefox */
  &:focus-visible {
    outline: 0;
  }
`
);

const StyledInputElement = styled("input")(
  ({ theme }) => `
  font-size: 0.875rem;
  font-size: 0.9rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  grid-column: 1/2;
  grid-row: 1/3;
  color: ${theme.palette.mode === "dark" ? grey[300] : "gray"};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;

  &::placeholder {
    color: ${theme.palette.mode === "dark" ? grey[500] : "gray"}; 
    font-size:0.9rem;
  }
`
);

const StyledButton = styled("button")(
  ({ theme }) => `
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  appearance: none;
  padding: 0;
  width: 19px;
  height: 19px;
  font-family: system-ui, sans-serif;
  font-size: 0.875rem;
  line-height: 1;
  box-sizing: border-box;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 0;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
    cursor: pointer;
  }

  &.${numberInputClasses.incrementButton} {
    grid-column: 2/3;
    grid-row: 1/2;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid;
    border-bottom: 0;

    &:hover {
      cursor: pointer;
      background: ${mainColors["yellowPrimary"]};
      color: ${mainColors["greenPrimary"]};
    }

  border-color: ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
  background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
  }

  &.${numberInputClasses.decrementButton} {
    grid-column: 2/3;
    grid-row: 2/3;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid;

    &:hover {
      cursor: pointer;
      background: ${mainColors["yellowPrimary"]};
      color: ${mainColors["greenPrimary"]};
    }

  border-color: ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
  background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
  }

  & .arrow {
    transform: translateY(-1px);
  }
`
);

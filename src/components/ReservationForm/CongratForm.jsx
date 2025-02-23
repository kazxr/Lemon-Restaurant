import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/verified.svg";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
function ReservationCongrat() {
  let [counter, setCounter] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    handleClick();

    let handler = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter - 1 === 0) {
          clearInterval(handler);
          navigate("/");
          return 0;
        }
        return prevCounter - 1;
      });
    }, 1000);
    return () => clearInterval(handler);
  }, []);

  //thisFor Alert;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <main className="w-full min-h-[100vh] lg:pt-[190px] sm:pt-[140px] bg-greenPrimary">
      <section className="max-w-[400px] mx-auto flex  justify-center py-5 rounded-lg ">
        <div className="flex flex-col w-full sm:mx-5 relative form-style items-center  p-10 pb-8 rounded-md bg-graySecondary ">
          <img src={img} className="w-[200px]" alt="" />
          <h1 className="text-center text-3xl my-5">You’re all set!</h1>
          <button
            id="submit-btn"
            type="submit"
            className="text-center self-center rounded-md cursor-pointer "
          >
            <Link to="/">Return to HomePage</Link>
          </button>
          <p className="text-center font-karla mt-3 text-sm text-gray-500">
            go back to the home page in{" "}
            <span className="text-black">{counter}</span>s
          </p>
        </div>
      </section>
      <Snackbar
        open={open}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Data has been submited
        </Alert>
      </Snackbar>
    </main>
  );
}

export default ReservationCongrat;

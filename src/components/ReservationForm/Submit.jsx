import ProgressBar from "../ui/progress";
import { useNavigate } from "react-router-dom";
import xx from "../../assets/left1.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ReserveSubmit() {
  const navigate = useNavigate();

  let arr = ["firstName", "lastName", "phone", "email"];
  useEffect(() => {
    let checker = false;
    for (let key of arr) {
      if (!sessionStorage.getItem(key)) {
        checker = true;
        break;
      }
    }
    if (checker) {
      navigate("../userDetails");
    }
  }, []);
let handleSubmit =()=>{
  sessionStorage.clear()
}
  return (
    <main className="w-full min-h-[100vh] lg:pt-[170px] sm:pt-[120px] bg-greenPrimary">
      <section className="max-w-[400px] mx-auto flex  justify-center py-5 rounded-lg ">
        <div className="flex flex-col w-full relative form-style  p-10 pb-8 rounded-md bg-graySecondary ">
          <Link to="/Reserve/userDetails">
            <img
              src={xx}
              alt=""
              className="lg:w-14  sm:w-12 absolute top-0 left-0 hover:bg-gray-200  rounded-lg p-2"
            />
          </Link>
          <ProgressBar stepper={2} />

          <div className="mt-5 w-full">
            <div
              id="submit-page"
              className="flex  flex-col items-center my-5 justify-center text-gray-900"
            >
              <hr className="border-t-2 mt-5  border-gray-300 w-full" />
              <div className="flex mt-3  justify-center space-x-2 items-center">
                <p>FullName:</p>
                {sessionStorage.getItem("firstName") +
                  " " +
                  sessionStorage.getItem("lastName")}
              </div>
              <hr className="border-t-2 mt-3 border-gray-300 w-full" />
              <div className="mt-3 flex  justify-center space-x-1 items-center">
                <p>Email:</p> {sessionStorage.getItem("email")}
              </div>
              <hr className="border-t-2 mt-3 border-gray-300 w-full" />
              <div className=" w-full mt-3 flex justify-center  items-center">
                <p>Phone Number:</p>
                {sessionStorage.getItem("phone")}
              </div>
              <hr className="border-t-2 mt-3 border-gray-300 w-full" />
              <div className=" mt-3 flex justify-center space-x-1 items-center">
                <p>Date:</p>
                {sessionStorage
                  .getItem("date")
                  .match(/\b([A-Z]{3}), (\d{1,2}) ([A-Za-z]{3}) (\d{4})\b/gi)}
              </div>
              <hr className="border-t-2 mt-3 border-gray-300 w-full" />
              <div className="mt-3 flex justify-center space-x-1 items-center">
                <p>Time:</p>
                {sessionStorage.getItem("time")}
              </div>
              <hr className="border-t-2 mt-3 border-gray-300 w-full" />
              <div className="mt-3 flex justify-center space-x-1 items-center">
                <p>Occasion:</p>
                {sessionStorage.getItem("occasion")}
              </div>
              <hr className="border-t-2 mt-3 border-gray-300 w-full" />
              {sessionStorage.getItem("specialRequest") ? (
                <>
                  <div className="mt-3 flex justify-center space-x-1 items-center">
                    <p>Special Request:</p>
                    {sessionStorage.getItem("specialRequest")}
                  </div>
                  <hr className="border-t-2 mt-3 border-gray-300 w-full" />
                </>
              ) : null}
            </div>
          </div>

          <Link
            id="submit-btn"
            className="text-center   mb-[-15px] !bg-gray-300 self-center rounded-md cursor-pointer "
            to="../"
          >
            <button>Edit data</button>
          </Link>

          <Link
            id="submit-btn"
            onClick={handleSubmit}
            className="text-center self-center rounded-md cursor-pointer "
            to="../congrat"
          >
            <button>Submit</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ReserveSubmit;

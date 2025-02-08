import ProgressBar from "./ui/progress";
import { useNavigate } from "react-router-dom";
import xx from "../assets/left1.png";
import { Link } from "react-router-dom";

function ReserveSubmit() {
  let y = ["user 12", "20:00 Pm", "16/2/2025", "hk@gmail.com", "123-456-7684"];
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

          <div className="mt-10">
            {y.map((val, i) => {
              return (
                <div
                  key="0"
                  className="flex flex-col  items-center my-5 justify-center text-gray-900"
                >
                  {" "}
                  {i == 0 ? (
                    <hr className="border-t-2 mt-5 mb-5 border-gray-300 w-full" />
                  ) : (
                    ""
                  )}
                  {val}
                  <hr className="border-t-2 mt-5 border-gray-300 w-full" />
                </div>
              );
            })}
          </div>

          <button
            id="submit-btn"
            type="submit"
            className="text-center mb-[-15px] !bg-gray-300 self-center rounded-md cursor-pointer "
          >
            <Link to="/Reserve/">Edit data</Link>
          </button>
          <button
            id="submit-btn"
            type="submit"
            className="text-center self-center rounded-md cursor-pointer "
          >
            Submit
          </button>
        </div>
      </section>
    </main>
  );
}

export default ReserveSubmit;

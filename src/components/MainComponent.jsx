import heroImg0 from "../assets/heroPictureLite.webp";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
function Main() {
  return (
    <section id="home" className="pt-[150px] pb-14 w-full bg-greenPrimary">
      <div className="w-full max-w-[1240px] mx-auto flex-desktop xl:px-1 px-5">
        <div className="font-karla text-white ">
          <h1 className="size-hero-title font-markazi leading-7 text-yellowPrimary">
            Little Lemon
            <p className="size-hero-text  text-white mt-1">Chicago</p>
          </h1>
          <p className="text-width-hero size-hero-base lg:leading-relaxed">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <NavLink to="/Reserve">
            <Button className="primary-btn xl:!text-[1.15rem] ">
              Reserve Now
            </Button>
          </NavLink>
        </div>
        <div className="relative overflow-hidden cursor-none  " id="parentIBKJV">
          <img src={heroImg0} alt="" className="img-width-hero" />
        </div>
      </div>
      <div className="text-center  "></div>
    </section>
  );
}

export default Main;

import pic1 from "../assets/about1.png";
import pic2 from "../assets/about-bg.png";
import { useRef } from "react";

function About() {
  let timer = useRef(false);
  let blocker = useRef(false);
  let handlerEnter = () => {
    if (blocker) {
      let container = document.querySelector(".pic-switching");
      let child0 = container.children[0];
      let child1 = container.children[1];
      setTimeout(() => {
        child0.setAttribute("src", pic2);
        child1.setAttribute("src", pic1);
      }, 300);
      child0.style.animation = "none";
      child0.offsetWidth;
      child0.style.animation = "imgSwitcher 0.6s ease-in-out";
      setTimeout(() => {
        blocker.current = true;
      }, 600);
    }
  };
  let handlerLeave = () => {
    if (blocker.current) {
      let container = document.querySelector(".pic-switching");
      let child0 = container.children[0];
      let child1 = container.children[1];
      setTimeout(() => {
        child0.setAttribute("src", pic1);
        child1.setAttribute("src", pic2);
      }, 300);
      child0.style.animation = "none";
      child0.offsetWidth;
      child0.style.animation = "imgSwitcher 0.6s ease-in-out";
       setTimeout(() => {
        blocker.current = false;
      }, 600);
    }
  };
  let phoneHandler = () => {
    if (window.innerWidth < 830) {
      if (timer.current === false) {
        handlerEnter();
        timer.current = true;
      } else {
        handlerLeave();
        timer.current = false;
      }
    }
  };

  return (
    <section id="about" className="w-full my-20 font-karla">
      <div
        id="main-div-about"
        className="max-w-[1240px] mx-auto flex flex-col lg:px-28 md:px-16 sm:px-0 "
      >
        <div className="self-center section-title mb-[100px]">
          About Little Lemon
        </div>
        <div className="flex justify-between items-center smScreens-about">
          <div className="text-about-div">
            <p
              id="about-text"
              className="w-[400px] about-text text-center  text-greenPrimary"
            >
              Little Lemon is a vibrant culinary destination blending modern
              flavors with cozy ambiance. Founded by food enthusiasts, we
              prioritize fresh, locally-sourced ingredients to craft
              unforgettable dishes. Our team of chefs brings global inspiration
              to every plate, ensuring a unique dining experience. Whether
              you're here for a casual meal or a special celebration, Little
              Lemon promises warmth, creativity, and a touch of zest in every
              bite.
            </p>
          </div>
          <div
            className="relative flex justify-center cursor-none order-2   pic-switching"
            onMouseEnter={handlerEnter}
            onMouseLeave={handlerLeave}
            onClick={phoneHandler}
          >
            <img
              src={pic1}
              alt=""
              className=" shadow-lg rounded-md absolute pic0 about-pic "
            />
            <img
              src={pic2}
              alt=""
              className=" shadow-lg rounded-md about-pic"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

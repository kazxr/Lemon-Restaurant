import Logo from "../assets/Logo.svg";
import HamMenu from "../assets/hambergerMenu.svg";
import hamMenuCloser from "../assets/Xicon.svg";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
function Header() {
  let active = useRef(null);

  //# nav scrolling logic, scroll into section;
  //# also this to close hambergerMenu after clicking ;
  // we added the delay, bc we using routes to navigate to ="/"
  // then the delay to trigger scroll into view after being in / section
  let closer = useRef(window.innerWidth) ;
let resize = ()=>{
closer.current= window.innerWidth
}
  let scrollIntoSection = (id) => {
    setTimeout(() => {
      if (closer.current <= 829) {
        menuHandler();
      }
      console.log(closer);
      let elem = document.querySelector("#" + id);
      elem.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }, 100);
  };

  // when scroll down will hide nav when up will appear;
  let header = useRef(0);
  let headerElement = useRef(null);
  let ScrollHandler = () => {
    let currentVal = window.scrollY;
    if (header.current < currentVal) {
      headerElement.current.classList.add("scrollHidden");
    } else {
      headerElement.current.classList.remove("scrollHidden");
    }
    header.current = currentVal;
  };
  useEffect(() => {
    window.addEventListener("scroll", ScrollHandler);
        window.addEventListener("resize", resize);
    return () => {
      removeEventListener("scroll", ScrollHandler);
    };
  }, []);

  // making nav responsive
  let menuHandler = (e) => {
    let navContainer = document.querySelector(".nav-container");
    let ul = document.querySelector(".nav-ul");
    if (!ul.classList.contains("activeHamMenu")) {
      e.target.setAttribute("src", hamMenuCloser);
      ul.classList.add("activeHamMenu");
      navContainer.classList.add("activeHamMenu-container", "bg-slate-50");
      //animation
      ul.style.animation = "hamMenu 0.4s ease-in-out";
    } else {
      ul.style.animation = "none";
      ul.offsetHeight;
      ul.style.animation = "hamMenu 0.4s ease-in-out reverse";
      setTimeout(() => {
        ul.classList.remove("activeHamMenu");
        navContainer.classList.remove("activeHamMenu-container", "bg-slate-50");
        active.current.setAttribute("src", HamMenu);
      }, 300);
    }
  };

  return (
    <>
      <header
        ref={headerElement}
        className="w-full z-[100] font-markazi fixed hover:bg-slate-50 bg-white transition-all duration-300 ease-out"
      >
        <nav className="nav-container w-full max-w-[1240px] mx-auto flex-desktop nav-size">
          <div className="div-img py-6 px-3 flex-desktop lg:w-auto sm:w-full ">
            <Link to="/">
              <img
                src={Logo}
                className="nav-img-size cursor-pointer"
                alt=""
                onClick={() => scrollIntoSection("home")}
              />
            </Link>
            <img
              ref={active}
              src={HamMenu}
              onClick={menuHandler}
              alt=""
              className="hidden-desktop w-14 h-12 py-1 px-3 rounded-sm hover:bg-slate-100 duration-150 ease-in-out "
            />
          </div>
          <ul className="nav-ul hidden-phone-special lg:flex-desktop xl:space-x-6 lg:space-x-4 py-6">
            <li onClick={() => scrollIntoSection("home")}>
              <Link
                className=" lg:px-[2px] lg:py-[5px] md:px-[100px] md:py-[10px] sm:px-[90px] sm:py-[10px]"
                to="/"
              >
                Home
              </Link>
            </li>
            <li onClick={() => scrollIntoSection("menu")}>
              <Link
                className=" lg:px-[2px] lg:py-[5px] md:px-[100px] md:py-[10px] sm:px-[90px] sm:py-[10px]"
                to="/"
              >
                Menu
              </Link>
            </li>
            <li onClick={() => scrollIntoSection("reviews")}>
              <Link
                className=" lg:px-[2px] lg:py-[5px] md:px-[100px] md:py-[10px] sm:px-[90px] sm:py-[10px]"
                to="/"
              >
                Reviews
              </Link>
            </li>
            <li onClick={() => scrollIntoSection("about")}>
              <Link
                className=" lg:px-[2px] lg:py-[5px] md:px-[100px] md:py-[10px] sm:px-[90px] sm:py-[10px]"
                to="/"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className=" lg:px-[2px] lg:py-[5px] md:px-[100px] md:py-[10px] sm:px-[90px] sm:py-[10px]"
                to="OnlineMenu"
              >
                Order Online
              </Link>
            </li>
            <li className="hidden-desktop">
              <Link to="/">Login</Link>
            </li>
          </ul>
          <div className="py-6 hidden-phone   lg:block sm:hidden nav-size-btn font-karla font-bold text-greenPrimary ">
            <button className="  py-1 px-3 hover:bg-slate-100 rounded-md transition-all duration-200 ease-in-out ">
              Login
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

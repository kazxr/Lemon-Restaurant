import Logo from "../assets/Logo.svg";
import HamMenu from "../assets/hambergerMenu.svg";
import hamMenuCloser from "../assets/Xicon.svg";
import { useEffect, useRef } from "react";
function Header() {
  // nav scrolling logic
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
      navContainer.classList.add("activeHamMenu-container","bg-slate-50");
      //animation
      ul.style.animation= "hamMenu 0.4s ease-in-out"

    } else {
      ul.style.animation="none";
      ul.offsetHeight;
      ul.style.animation= "hamMenu 0.4s ease-in-out reverse"
      setTimeout(()=>{
        ul.classList.remove("activeHamMenu");
      navContainer.classList.remove("activeHamMenu-container","bg-slate-50");
      e.target.setAttribute("src", HamMenu);
      },300)
    
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
            <img src={Logo} className="nav-img-size cursor-pointer" alt="" />
            <img
              src={HamMenu}
              onClick={menuHandler}
              alt=""
              className="hidden-desktop w-16 h-12 py-1 px-3 rounded-sm hover:bg-slate-100 duration-150 ease-in-out "
            />
          </div>
          <ul className="nav-ul hidden-phone-special lg:flex-desktop xl:space-x-6 lg:space-x-4 py-6">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li className="hidden-desktop">Login</li>
          </ul>
          <div className="py-6 hidden-phone lg:block sm:hidden nav-size-btn font-karla font-bold text-greenPrimary ">
            <button className=" py-1 px-3 hover:bg-slate-100 rounded-md transition-all duration-200 ease-in-out ">
              Login
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

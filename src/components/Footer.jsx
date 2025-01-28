import logo from "../assets/Logo.svg";
import minilogo from "../assets/mini-logo.png";

import insta from "../assets/insta-0.svg";
import fb from "../assets/fb-0.svg";
import x from "../assets/x-0.png";

function Footer() {
  return (
    <section className="w-full font-karla py-10 mt-[150px] bg-graySecondary footer-text text-gray-800">
      <div className="mx-auto max-w-[1240px] flex  items-center justify-between xl:px-0 lg:px-6 sm:px-6">
        <img src={logo} alt="" className="xl:w-44 lg:w-40 sm:hidden lg:block " />
        <img src={minilogo} alt="" className="lg:hidden md:w-14 sm:w-8 sm:block " />

        <div className="flex flex-col items-center  ">
          <h1 className="footer-title  ">Navigation</h1>
          <ul className="flex flex-col items-center  footer-ul ">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Reservations</a>
            </li>
            <li>
              <a href="">Order Online</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col leading-relaxed items-center  ">
          <h1 className="footer-title">Contact</h1>
          <p>123 Citrus Avenue, New York</p>
          <p>+1 (555) 123-4567</p>
          <p>reservations@littlelemon.com</p>

          <div className="sm:flex sm:flex-col sm:items-center lg:hidden lg:mt-0 sm:mt-4">
            <h1 className="footer-title mb-1">Social Media Links</h1>
            <div className="flex space-x-3 items-center">
              <a href="">
                <img
                  src={insta}
                  alt=""
                  className="xl:w-9 lg:w-9 md:w-8 sm:w-7 xl:h-9 lg:h-9 md:h-8 sm:h-7"
                />
              </a>
              <a href="">
                <img
                  src={fb}
                  alt=""
                  className="xl:w-9 lg:w-9 md:w-8 sm:w-7 xl:h-9 lg:h-9 md:h-8 sm:h-7"
                />
              </a>
              <a href="">
                <img
                  src={x}
                  alt=""
                  className="xl:w-9 lg:w-9 md:w-8 sm:w-7 xl:h-9 lg:h-9 md:h-8 sm:h-7"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:flex flex-col items-center sm:hidden ">
          <h1 className="footer-title mb-1">Social Media Links</h1>
          <div className="flex space-x-3 items-center">
            <a href="">
              <img
                src={insta}
                alt=""
                className="xl:w-9 lg:w-9 md:w-8 sm:w-7 xl:h-9 lg:h-9 md:h-8 sm:h-7"
              />
            </a>
            <a href="">
              <img
                src={fb}
                alt=""
                className="xl:w-9 lg:w-9 md:w-8 sm:w-7 xl:h-9 lg:h-9 md:h-8 sm:h-7"
              />
            </a>
            <a href="">
              {" "}
              <img
                src={x}
                alt=""
                className="xl:w-9 lg:w-9 md:w-8 sm:w-7 xl:h-9 lg:h-9 md:h-8 sm:h-7"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

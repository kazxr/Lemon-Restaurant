import logo from "../assets/Logo.svg";
import minilogo from "../assets/mini-logo.png";

import insta from "../assets/insta-0.svg";
import linkdin from "../assets/linkedin.png";
import x from "../assets/x-0.png";

function Footer() {
   // nav scrolling logic, scroll into section;
   // you can add <a> tag istead of this function
  let scrollIntoSection=(id)=>{
    let elem= document.querySelector("#"+id)
    elem.scrollIntoView({
      block: "center",
      behavior: "smooth"
    })

  }
  return (
    <section id="footer" className="w-full font-karla py-10 mt-[150px] bg-graySecondary footer-text text-gray-800">
      <div className="mx-auto max-w-[1240px] flex  items-center justify-between xl:px-0 lg:px-6 sm:px-6">
        <img src={logo} alt="" className="xl:w-44 lg:w-40 sm:hidden lg:block " />
        <img src={minilogo} alt="" className="lg:hidden md:w-12 sm:w-8 sm:block " />

        <div className="flex flex-col items-center  ">
          <h1 className="footer-title  ">Navigation</h1>
          <ul className="flex flex-col items-center  footer-ul ">
            <li onClick={()=>scrollIntoSection("home")}>Home</li>
            <li onClick={()=>scrollIntoSection("menu")}>Menu</li>
            <li onClick={()=>scrollIntoSection("about")}>About</li>
            <li onClick={()=>scrollIntoSection("reviews")}>Reviews</li>
            <li >Order Online</li>
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
              <a href="https://www.instagram.com/kazx.r/" target="_blank">
                <img
                  src={insta}
                  alt=""
                  className="xl:w-9 lg:w-9 md:w-8 sm:w-7 xl:h-9 lg:h-9 md:h-8 sm:h-7"
                />
              </a>
              <a href="https://www.linkedin.com/in/youssef-el-kaouani-5896012b0/" target="_blank">
                <img
                  src={linkdin}
                  alt=""
                  className="xl:w-9 lg:w-9 md:w-8 sm:w-7 xl:h-9 lg:h-9 md:h-8 sm:h-7"
                />
              </a>
              <a href="#footer">
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
            <a href="https://www.instagram.com/kazx.r/" target="_blank">
              <img
                src={insta}
                alt=""
                className="xl:w-9 lg:w-9 md:w-8 sm:w-7 xl:h-9 lg:h-9 md:h-8 sm:h-7"
              />
            </a>
            <a href="https://www.linkedin.com/in/youssef-el-kaouani-5896012b0/" target="_blank">
              <img
                src={linkdin}
                alt=""
                className="xl:w-9 lg:w-9 md:w-8 sm:w-7 xl:h-9 lg:h-9 md:h-8 sm:h-7"
              />
            </a>
            <a href="#footer">
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

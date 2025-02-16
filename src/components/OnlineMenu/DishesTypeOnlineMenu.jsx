import { Link } from "react-router-dom";
import { useRef } from "react";
function DishesTypeOnlineMenu() {
  let handler = (e) => {
    let parent = document.getElementById("parentLink-dishes");
    let arr = Array.from(parent.children);
    arr.map((ele) => {
      ele == e.target
        ? (e.target.style.cssText = `color: #ee9972; text-decoration: underline; text-decoration-color:#ee9972; text-underline-offset: 8px;`)
        : (ele.style.cssText = `color: #f4ce14; text-decoration: none;`);
    });
  };

  return (
    <section className="pt-[100px] mb-10 ">
      <div className=" bg-greenPrimary text-yellowPrimary lg:text-xl md:text-lg sm:text-sm px-10 py-10">
        <p className="text-center font-markazi lg:text-4xl md:text-3xl sm:text-2xl mb-10 text-white">
          Restaurant Menu{" "}
        </p>
        <div
          id="parentLink-dishes"
          className="max-w-[1200px] px-[10px] mx-auto flex justify-center lg:space-x-20 sm:space-x-10 items-center "
        >
          <Link onClick={handler} to="../OnlineMenu/BreakFast" className="p-1 hover:opacity-80">
            BreakFast
          </Link>
          <Link
            onClick={handler}
            to="../OnlineMenu"
            className="p-1 text-orangeSecondary underline-offset-[8px] underline hover:opacity-80"
          >
            Lunch
          </Link>
          <Link onClick={handler} to="../OnlineMenu/Dinner" className="p-1 hover:opacity-80">
            Dinner
          </Link>
          <Link onClick={handler} to="../OnlineMenu/Specials" className="p-1 hover:opacity-80">
            Specials
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DishesTypeOnlineMenu;

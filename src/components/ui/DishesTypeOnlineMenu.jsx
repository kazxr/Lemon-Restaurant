import { Link } from "react-router-dom";
function DishesTypeOnlineMenu() {
  let handler = (e) => {
    let parent = document.getElementById("parentLink-dishes");
    let arr = Array.from(parent.children);
    arr.map((ele) => {
      ele == e.target
        ? (e.target.style.color = "red")
        : (ele.style.color = "#495e57");
    });
  };
  return (
    <section className="lg:pt-[150px] sm:pt-[140px]   ">
      <div className=" bg-graySecondary py-[20px]  text-greenPrimary lg:text-xl md:text-lg sm:text-sm ">
        <div
          id="parentLink-dishes"
          className="max-w-[1200px] px-[10px] mx-auto flex justify-between items-center "
        >
          <Link onClick={handler} to="../OnlineMenu/BreakFast" className="p-1">
            BreakFast
          </Link>
          <Link onClick={handler} to="../OnlineMenu" className="p-1 text-red-500">
            Lunch
          </Link>
          <Link onClick={handler} to="../OnlineMenu/Dinner" className="p-1">
            Dinner
          </Link>
          <Link onClick={handler} to="../OnlineMenu" className="p-1">
            Specials
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DishesTypeOnlineMenu;

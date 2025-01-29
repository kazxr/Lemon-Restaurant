import data from "../data/reviewsData.json";
import right from "../assets/right1.png";
import left from "../assets/left1.png";

function Reviews() {
  let handlerRight = () => {
    let container = document.querySelector(".scrollContainer");
    let imgLeft = document.getElementById("card-Left");
    let imgRight = document.getElementById("card-Right");
    imgLeft.classList.remove("opacity-30");
    let card = container.children[0];
    // this to calculate card width + margin-LR
    let cardStyle = getComputedStyle(card);
    let calc =
      card.offsetWidth +
      parseInt(cardStyle.marginLeft) +
      parseInt(cardStyle.marginRight);
    // this to scroll with different values depend on screen size
    let size = window.innerWidth;
    size > 1300
      ? (calc = 1200)
      : size < 1200 && size > 830
      ? (calc = 2 * calc)
      : calc;
    container.scrollBy({
      left: calc,
      behavior: "smooth",
    });
    // this to disable the right btn;
    container.scrollLeft == container.scrollWidth - container.clientWidth
      ? imgRight.classList.add("opacity-30")
      : imgRight.classList.remove("opacity-30");
  };

  let handlerLeft = () => {
    let container = document.querySelector(".scrollContainer");
    let imgLeft = document.getElementById("card-Left");
    let imgRight = document.getElementById("card-Right");
    imgRight.classList.remove("opacity-30");
    let card = container.children[0];
    let cardStyle = getComputedStyle(card);
    let calc =
      card.offsetWidth +
      parseInt(cardStyle.marginLeft) +
      parseInt(cardStyle.marginRight);
    let size = window.innerWidth;
    size > 1300
      ? (calc = 2000)
      : size < 1200 && size > 830
      ? (calc = 2 * calc)
      : calc;
    container.scrollBy({
      left: -calc,
      behavior: "smooth",
    });
    container.scrollLeft == 0
      ? imgLeft.classList.add("opacity-30")
      : imgLeft.classList.remove("opacity-30");
  };

  return (
    <section id="reviews" className="bg-graySecondary w-full md:mt-[80px] sm:mt-[50px]">
      <div className="max-w-[1240px]  mx-auto  flex flex-col">
        <div className="section-title self-center mt-[50px] mb-[-20px]"><h1>Reviews</h1></div>
       <div className="flex items-center justify-between">
         <div
          id="card-Left"
          onClick={handlerLeft}
          className=" flex items-center w-[150px] h-[300px] cursor-pointer  hover:bg-gray-200/30 rounded-sm  img-R-L-hover"
        >
          <img src={left} alt="" className="w-32 sm:min-w-12 " />
        </div>
        <div className=" py-20 px-4   flex  overflow-x-scroll scrollContainer ">
          {data.map((d, i) => {
            return (
              <div
                key={i}
                className="flex flex-col mx-[30px] justify-center items-center py-5 px-2  ring-2  font-karla review-card-width"
              >
                <h1 className="review-stars text-greenPrimary  review-stars">
                  {d.rating}
                </h1>
                <div className="flex justify-center items-center my-10">
                  <img src={d.image} className="mr-4 review-card-img" alt="" />
                  <h1 className="review-name font-markazi">{d.name}</h1>
                </div>
                <p className="text-center review-text"> {d.review}</p>
              </div>
            );
          })}
        </div>
        <div
          id="card-Right"
          onClick={handlerRight}
          className=" flex items-center w-[150px] h-[300px] cursor-pointer  hover:bg-gray-200/30 rounded-sm img-R-L-hover"
        >
          <img src={right} alt="" className="w-32 sm:min-w-12" />
        </div>
       </div>
      </div>
    </section>
  );
}

export default Reviews;

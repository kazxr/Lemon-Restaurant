import data from "../data/cardsData.json";
import Card from "./card";
import right from "../assets/right1.png";
import left from "../assets/left1.png";
import { useEffect } from "react";

function Cards() {
  useEffect(() => {}, []);

  let handlerRight = (e) => {
    const cards = [
      document.querySelector("#card1"),
      document.querySelector("#card2"),
      document.querySelector("#card3"),
    ];
    const leftImg = document.querySelector("#left-img");
    leftImg.style.opacity = "1";

    for (let i = 0; i < cards.length - 1; i++) {
      let current = cards[i];
      let next = cards[i + 1];
      if (i + 1 == 2) {
        e.target.style.opacity = "0.5";
      }
      if (current.classList.contains("z-50")) {
        current.style.animation = "none";
        current.offsetHeight;
        current.style.animation = "cardMotion 0.4s  ease-in-out";
        setTimeout(() => {
          current.classList.remove("z-50");
          next.classList.add("z-50");

        }, 200);
        break;
      }
    }
  };

  let handlerLeft = (e) => {
    const cards = [
      document.querySelector("#card1"),
      document.querySelector("#card2"),
      document.querySelector("#card3"),
    ];
    const rightImg = document.querySelector("#right-img");
    rightImg.style.opacity = "1";
    for (let i = 1; i < cards.length; i++) {
      let current = cards[i];
      let prev = cards[i - 1];
      if (prev.classList.contains("z-50")) {
        e.target.style.opacity = "0.5";
      }
      if (current.classList.contains("z-50")) {
        if (i - 1 == 0) {
          e.target.style.opacity = "0.5";
        }
        current.style.animation = "none";
        current.offsetHeight;
        current.style.animation = "cardMotionReverse 0.4s 0.15s  ease-in-out";
        setTimeout(() => {
          current.classList.remove("z-50");
          prev.classList.add("z-50");
        }, 200);
        break;
      }
    }
  };
  return (
    <section className="py-10 w-full font-karla ">
      <div className="mx-auto max-w-[1240px] xl:px-1 px-5">
        <div className="flex justify-between items-center mt-5 mb-16">
          <h1 className="size-hero-title font-markazi">This weeks specials!</h1>
          <button className="primary-btn">Online Menu</button>
        </div>
        <div className="flex justify-between cards-container ">
          <img
            src={left}
            onClick={handlerLeft}
            id="left-img"
            alt=""
            className="  hidden active"
          />
          {data.map((data) => {
            return (
              <Card
                key={data.id}
                id={data.id}
                title={data.title}
                img={data.img}
                price={data.price}
                short-details={data["short-details"]}
              />
            );
          })}
          <img
            src={right}
            onClick={handlerRight}
            id="right-img"
            alt=""
            className="hidden active  "
          />
        </div>
      </div>
    </section>
  );
}

export default Cards;

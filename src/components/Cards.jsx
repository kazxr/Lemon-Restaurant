import data from "../data/cardsData.json";
import Card from "./card";
import right from "../assets/right1.png";
import left from "../assets/left1.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Cards() {
  let handlerRight = (e) => {
    const cards = [
      document.querySelector("#card1"),
      document.querySelector("#card2"),
      document.querySelector("#card3"),
    ];
    //#when clicking left will make right opacity=1;
    const leftImg = document.querySelector("#left-img");
    leftImg.style.opacity = "1";

    for (let i = 0; i < cards.length - 1; i++) {
      let current = cards[i];
      let next = cards[i + 1];
      let arr = ["sm:z-50", "sm:z-40", "sm:z-30"];
      //# this will make an effect of cards going form top to buttom;
      if (i == 1) {
        for (let j = 0; j <= 2; j++) {
          setTimeout(() => {
            cards[j].classList.remove(arr[j]);
          }, 600);
        }
      }
      //# this will hide right arrow when we reach last card;
      if (i == 1) {
        e.target.style.opacity = "0.5";
      }
      //# this toggle animation, and hide cards in the front so the one in the back
      //# will be visible; when animation accur;
      if (current.classList.contains("sm:block")) {
        current.classList.remove("active-animation-card-reverse");
        current.classList.add("active-animation-card");

        next.classList.remove("sm:hidden");
        next.classList.add("sm:block");
        setTimeout(() => {
          current.classList.add("sm:hidden");
          current.classList.remove("sm:block");
          current.classList.remove("active-animation-card");
        }, 500);
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

    //#when clicking right will make left opacity=1;
    const rightImg = document.querySelector("#right-img");
    rightImg.style.opacity = "1";

    for (let i = 1; i < cards.length; i++) {
      let current = cards[i];
      let prev = cards[i - 1];
      //# this when first time clicking on left arrow will hide it
      if (prev.classList.contains("sm:block")) {
        e.target.style.opacity = "0.5";
      }

      //# this when we reach first card will make arrow invisible;
      if (current.classList.contains("sm:block")) {
        //# this to make a cool effect of cards going from top to back;
        let arr = ["sm:z-50", "sm:z-40", "sm:z-30"];
        if (i == 1) {
          for (let j = 0; j <= 1; j++) {
            setTimeout(() => {
              cards[j].classList.add(arr[j]);
            }, 1600);
          }
        }

        if (i - 1 == 0) {
          e.target.style.opacity = "0.5";
        }
        //# this make reverse animation, and toggle visiblity of cards in the back
        current.classList.remove("active-animation-card");
        current.classList.add("active-animation-card-reverse");
        prev.classList.remove("sm:hidden");
        prev.classList.add("sm:block");
        setTimeout(() => {
          current.classList.add("sm:hidden");
          current.classList.remove("sm:block");
          current.classList.remove("active-animation-card-reverse");
        }, 500);
        break;
      }
    }
  };
  return (
    <section id="menu" className="py-10 w-full font-karla ">
      <div className="mx-auto max-w-[1240px] xl:px-1 px-5">
        <div className="flex justify-between items-center mt-5 mb-16">
          <h1 className="size-hero-title font-markazi">This weeks specials!</h1>
          <Link  to="OnlineMenu">
            <Button className="primary-btn ">Online Menu</Button>
          </Link>
        </div>
        <div className="flex justify-between cards-container ">
          <img
            src={left}
            onClick={handlerLeft}
            id="left-img"
            alt=""
            className="  hidden active sm:ml-[-15px] md:ml-[0px] "
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
            className="hidden active sm:mr-[-15px] md:mr-[0px]  "
          />
        </div>
      </div>
    </section>
  );
}

export default Cards;

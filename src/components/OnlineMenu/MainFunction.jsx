import data from "../../API/dishes.json";
import { useAddToBasket } from "../../store/GlobalStates.jsx";
import Card from "./Dishes-Cards.jsx";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect, useRef } from "react";

function MainOnlineMenuFunc({ Type, x0, y0 }) {
  let [x, setX] = useState(x0);
  let [y, setY] = useState(y0);
  let memorizeLastNum = useRef(1);
  let [val, setVal] = useState(1);
  let handler = (e) => {
    // i used this condition instead of e.parentNode.lastElementChild or first
    // cause there is no parentNode in this comp.
    if (
      e.target.dataset.testid == "NavigateNextIcon" ||
      e.target.ariaLabel === "Go to next page"
    ) {
      if (memorizeLastNum.current < count) {
        setVal(memorizeLastNum.current + 1);
        memorizeLastNum.current += 1;
      }
    } else if (
      e.target.dataset.testid == "NavigateBeforeIcon" ||
      e.target.ariaLabel === "Go to previous page"
    ) {
      if (memorizeLastNum.current > 1) {
        setVal(memorizeLastNum.current - 1);
        memorizeLastNum.current -= 1;
      }
    } else {
      setVal(Number(e.target.innerText));
      memorizeLastNum.current = Number(e.target.innerText);
    }

    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  };
  useEffect(() => {
    if (val == 1) {
      setX(x0);
      setY(y0);
    } else {
      setY(() => {
        let newVal = y0 * val;
        setX(newVal - y0);
        return newVal;
      });
    }
  }, [val]);

  let pagination = useRef(null);
  let lunchData = data[Type] || [];
  let [newData, setNewData] = useState(lunchData);
  const searchInput = useAddToBasket((state) => state.searchInput);
  let [count, SetCount] = useState(Math.ceil(newData.length / y0));
  useEffect(() => {
    if (searchInput) {
      pagination.current.children[0].children[1].children[0].click();
      const arr = lunchData.filter((obj) => {
        let regex = new RegExp(searchInput, "ig");
        return regex.test(obj.title);
      });
      setNewData(arr);
      SetCount(Math.ceil(arr.length / y0));
    } else {
      setNewData(() => {
        SetCount(Math.ceil(lunchData.length / y0));
        return lunchData;
      });
    }
  }, [searchInput]);
 
  return (
    <main className="  py-3">
      <section className="max-w-[1300px]  mx-auto">
        <div className="flex flex-wrap mx-5 justify-evenly items-center">
          {newData.slice(x,y).map((values, i) => {
            return <Card key={i} data={values} />;
          })}
        </div>
        <div className="mb-10 mt-0 justify-self-center">
          <Pagination
            count={count}
            size="large"
            onChange={handler}
            value={val}
            ref={pagination}
          />
        </div>
      </section>
    </main>
  );
}

export default MainOnlineMenuFunc;


import data from "../../API/dishes.json";
import Card from "./Dishes-Cards.jsx";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";


function MainOnlineMenuFunc({Type}) {
    
  let [x, setX] = useState(0);
  let [y, setY] = useState(6);

  let [val, setVal] = useState(1);
  let handler = (e) => {
    setVal(Number(e.target.innerText));
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top:0,

    })
  };

  useEffect(() => {
    if (val == 1) {
      setX(0);
      setY(6);
    } else {
      setY(() => {
        let newVal = 6 * val; 
        setX(newVal - 6); 
        return newVal; 
      });
    }
  }, [val]);

  let lunchData = data[Type];
  let count = Math.ceil(lunchData.length / 6);
  return (
    <main className="  py-3">
      <section className="max-w-[1300px]  mx-auto">
        <div className="flex flex-wrap mx-5 justify-evenly items-center">
          {lunchData.slice(x, y).map((values) => {
            return <Card key={values.id} data={values} />;
          })}
        </div>
        <div className="mb-10 mt-0 justify-self-center">
          <Pagination
            count={count}
            size="large"
            onChange={handler}
            value={val}
          />
        </div>
      </section>
    </main>
  );
}

export default MainOnlineMenuFunc;

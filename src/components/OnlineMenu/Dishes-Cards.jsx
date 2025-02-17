import basket from "../../assets/Basket.svg";
import { useAddToBasket } from "../../store/GlobalStates";
function Card({ data }) {
  const setAddToBasket = useAddToBasket((state) => state.setAddToBasket);
  const addToBasket = useAddToBasket((state) => state.addToBasket);
  const setToggleDrawer = useAddToBasket((state) => state.setToggleDrawer);
  const setMakeNavGoDown = useAddToBasket((state) => state.setMakeNavGoDown);

  const AddToBasketHandler = () => {
    // let id = e.target.closest(".Card").id
    //  console.log(data);
    setMakeNavGoDown(true);
    console.log(data.title);
    let x = false;
    addToBasket.forEach((val) => {
      if (val.title === data.title) {
        x = true;
        setToggleDrawer(true);
      }
    });
    if (!x) {
      setAddToBasket(data);
    }
  };
  return (
    <>
      <div
        id={"card" + data.id}
        className="Card xl:w-[300px] lg:w-[300px]  md:w-[290px]   sm:w-[230px] 
        
            mb-20 mt-5 mx-2 pb-4 rounded-md bg-graySecondary  hover:ring-2 hover:ring-orangeSecondary  "
      >
        <img
          src={data.image}
          loading="lazy"
          alt=""
          className="w-full rounded-t-md xl:h-[220px] lg:h-[200px] md:h-[180px] sm:h-[150px] object-fill  "
        />
        <div className="flex justify-between items-end mt-3 px-3  ">
          <h1 className="font-markazi card-title">{data.title}</h1>
          <h1 className="text-orangeSecondary card-price ">
            {"$" + data.price}
          </h1>
        </div>
        <p className="text-greenPrimary px-3 my-6 card-text h-[60px]">
          {data.description}
        </p>
        <div className="flex  px-3 card-footer justify-between items-center ">
          <div className="flex justify-center items-center p-1">
            <h1 className="mr-2 text-yellow-500 text-2xl">{data.rating}</h1>
          </div>
          <div
            onClick={AddToBasketHandler}
            className=" text-center hover:bg-yellowPrimary  p-1 px-2 rounded-lg cursor-pointer
          lg:text-[1rem] sm:text-[0.8rem]
          "
          >
            <img src={basket} alt="" className="lg:w-10 sm:w-10 text-center" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

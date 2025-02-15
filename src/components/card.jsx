import { useNavigate } from "react-router-dom";
import motor from "../assets/motor.svg";
function Card(data) {
  const navigate = useNavigate();
  let handler = () => {
    navigate("/OnlineMenu");
  };
  let style =
    "  card-phone-size card-size pb-4 rounded-md bg-graySecondary cursor-pointer hover:ring-2 hover:ring-orangeSecondary bg-graySecondary cursor-pointer ";
  let x =
    data.id == 1
      ? "sm:block sm:z-50 lg:block" + style + data.id
      : data.id == 2
      ? "sm:hidden sm:z-40 lg:block" + style + data.id
      : "sm:hidden sm:z-30 lg:block" + style + data.id;
  return (
    <>
      <div onClick={handler} id={"card" + data.id} className={x}>
        <img
        loading="lazy"
          src={data.img}
          alt=""
          className="w-full card-img-size object-fill "
        />
        <div className="flex justify-between items-end mt-3 px-3  ">
          <h1 className="font-markazi card-title">{data.title}</h1>
          <h1 className="text-orangeSecondary card-price ">{data.price}</h1>
        </div>
        <p className="text-greenPrimary px-3 my-6 card-text">
          {data["short-details"]}
        </p>
        <div className="flex px-3 card-footer">
          <h1 className="mr-2">Order a delivery</h1>
          <img src={motor} alt="" className="w-5 " />
          {}
        </div>
      </div>
    </>
  );
}

export default Card;

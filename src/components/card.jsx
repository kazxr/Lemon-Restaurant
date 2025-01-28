import motor from "../assets/motor.svg";
function Card(data) {
  let style = " card-phone-size card-size pb-4 rounded-md bg-graySecondary cursor-pointer hover:ring-2 hover:ring-orangeSecondary ";
  let x = data.id == 1 ? "z-50" + style + data.id :data.id==2?"z-40" + style + data.id: "z-30" + style + data.id;
  return (
    <>
      <div
       id={"card"+data.id}
        className={
          x
        }
      >
        <img
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
        </div>
      </div>
    </>
  );
}

export default Card;

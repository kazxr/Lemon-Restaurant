import heroImg from "../assets/heroPicture.jpg";
function Main() {
  return (
    <section className="pt-[150px] pb-14 w-full bg-greenPrimary">
      <div className="w-full max-w-[1240px] mx-auto flex-desktop px-5">
      <div className="font-karla text-white " >
        <h1 className="size-hero-title font-markazi leading-7 text-yellowPrimary">
          Little Lemon
          <p className="size-hero-text  text-white">Chicago</p>
        </h1>
        <p className="text-width-hero size-hero-base lg:leading-relaxed">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="primary-btn">Reserve a Table</button>
      </div>
      <div className="">
        <img src={heroImg} alt=""  className="img-width-hero"/>
      </div>
      </div>
    </section>
  );
}

export default Main;

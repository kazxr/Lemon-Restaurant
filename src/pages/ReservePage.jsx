import { Link } from "react-router-dom";
import NumberInput from "../components/ui/NumberInput";
import { useState } from "react";

function AboutPage() {
  const [value, setValue] = useState();
  return (
    <main className="w-full h-[100vh] pt-[250px] bg-greenPrimary">
      <section className="max-w-[500px] mx-auto flex justify-center py-5 rounded-lg ">
        <div>
          <a href="" className="rounded-full w-2 bg-white"></a>
          <a href="" className="rounded-full w-2 bg-black"></a>
        </div>
        <form
          action=""
          className="flex flex-col form-style p-10 rounded-md bg-graySecondary "
        >
          <NumberInput
            className="focus:ring-black focus:ring-2 focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md"
            min={1}
            max={10}
            step={1}
            value={value}
          />
          <label htmlFor="date">Choose date</label>
          <input type="date" id="date" />
          <label htmlFor="time">Choose time</label>
          <select name="" id="time">
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" id="guests" placeholder="2" min="1" max="10" />
          <label htmlFor="occasion">Occasion</label>
          <select name="" id="occasion">
            <option value="none">none</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <input
            type="submit"
            value="Make your reservation"
            id="submit-btn"
            className="text-center self-center "
          />
        </form>
      </section>
    </main>
  );
}

export default AboutPage;

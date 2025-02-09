import TimeCom from "../components/ReservationForm/ReservationForm";
import { useEffect } from "react";
function Api() {
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/courseraap/capstone/main/api.js")
      .then((res) => {
        if (!res.ok) {
          throw new Error("failed to get reponse");
        }
        return res.json();
      })
      .then((res) => res)
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>Api</div>;
}

export default Api;

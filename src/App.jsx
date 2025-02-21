// import Header from "./components/Header";
import Main from "./components/Main";
import Cards from "./components/Cards";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import About from "./components/About"; // Assuming this is the correct one
import ReservePage from "./pages/ReservePage"; // If you still need this, adjust accordingly
import UserDetailsForm from "./components/ReservationForm/UserDetailsForm";
import SubmitForm from "./components/ReservationForm/Submit";
import CongratForm from "./components/ReservationForm/CongratForm";
import ReservationForm from "./components/ReservationForm/ReservationForm";
import OnlineMenuRoot from "./pages/OnlineMenu";
import Lunch from "./components/OnlineMenu/Lunch";
import Dinner from "./components/OnlineMenu/Dinner";
import BreakFast from "./components/OnlineMenu/BreakFast";
import Specials from "./components/OnlineMenu/Specials";
import MainLayout from "./pages/RootLayoutPage";
import CheckOut from "./components/CheckOut/CheckoutPage";
import CheckOutRoot from './pages/CheckoutPage'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
function App() {
  const reserveTableRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <>
              <Main />
              <Cards />
              <Reviews />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="Reserve" element={<ReservePage />}>
          <Route index element={<ReservationForm />} />
          <Route path="userDetails" element={<UserDetailsForm />} />
          <Route path="submit" element={<SubmitForm />} />
          <Route path="congrat" element={<CongratForm />} />
        </Route>
        <Route path="OnlineMenu" element={<OnlineMenuRoot />}>
          <Route index element={<Lunch />} />
          <Route path="BreakFast" element={<BreakFast />} />
          <Route path="Dinner" element={<Dinner />} />
          <Route path="Specials" element={<Specials />} />
        </Route>
        <Route path="CheckOut" element={<CheckOutRoot/>}>
          <Route index element={<CheckOut />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={reserveTableRoute} />;
}

export default App;

import Header from "./components/Header";
import Main from "./components/Main";
import Cards from "./components/Cards";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import About from "./components/About"; // Assuming this is the correct one
import ReservePage from "./pages/ReservePage"; // If you still need this, adjust accordingly
import RootPage from "./pages/RootPage";
import ReserveUserDetails from "./components/ReserveUserDetails";
import Submit from "./components/ReserveSubmit"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Form1 from "./components/ReservationDetails";
function App() {
  const reserveTableRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootPage />}>
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
          <Route index element={<Form1 />} />
          <Route path="userDetails" element={<ReserveUserDetails />} />
          <Route path="submit" element={<Submit />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={reserveTableRoute} />;
}

export default App;

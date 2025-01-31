// import Header from "./components/Header"
// import Main from "./components/Main"
// import Cards from "./components/Cards"
// import Reviews from "./components/Reviews"
// import Footer from "./components/Footer"
// import About from "./components/About"
// import Ab from "./pages/aboutPage"
// import RootPage from "./pages/homePage"

// import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom"
// function App() {

//   const reserveTableRoute= createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<RootPage/>}>
//         <Route path="Reserve" element ={<Ab/>} />
//       </Route>
//     )
//   )
//   return (
//     <>
//     <RouterProvider router={reserveTableRoute}/>
//       <Header />
//       <Main />
//       <Cards />
//       <Reviews />
//       <About/>
//       <Footer />
    
//     </>
//   );
// }

// export default App;


import Header from "./components/Header";
import Main from "./components/Main";
import Cards from "./components/Cards";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import About from "./components/About"; // Assuming this is the correct one
import ReservePage from "./pages/ReservePage"; // If you still need this, adjust accordingly
import RootPage from "./pages/RootPage";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

function App() {
  const reserveTableRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootPage />}>
        <Route index element={
          <>
            <Main />
            <Cards />
            <Reviews />
            <About />
            <Footer />
          </>
        } />
        <Route path="Reserve" element={<ReservePage />} >
        </Route>
      </Route>
    )
  );

  return (
    <RouterProvider router={reserveTableRoute} />
  );
}

export default App;
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Home/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Flights from "./Components/Flights/Flights.jsx";
import CarRentals from "./Components/CarRentals/CarRentals.jsx";
import Contact from "./Components/Contact/Contact.jsx";
// import Login from "./Components/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/flights",
        element: <Flights></Flights>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

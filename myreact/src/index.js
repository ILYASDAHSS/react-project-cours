import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HeadProvider, Title, Meta } from 'react-head';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HTML from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";
import App from "./App";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1 style={{ backgroundColor: "red", textAlign: "center", fontSize: "24px" , color: "white" , padding: "20px", marginTop: "20px"}}>
  SORRY.........
</h1>

  },

  {
    path: "/html",
    element: <HTML />,
  },

  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);


serviceWorkerRegistration.register();
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register.jsx";
import ProtectedRoute from "./component/ProtectedRoute.jsx";

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "",
      element: <ProtectedRoute comp={<App/>}></ProtectedRoute>,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ],
}]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>

  </RouterProvider>
);

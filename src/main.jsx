import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AuthLayout from "../src/components/AuthLayout";
import UserLayout from "../src/components/UserLayout";
import Home from "../src/pages/Home";
import Users from "../src/pages/Users";
import Login from "../src/pages/login";
import Register from "../src/pages/register";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster position="top-right" reverseOrder={false} />
    <RouterProvider router={router} />
  </>
);

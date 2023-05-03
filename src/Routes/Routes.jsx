import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
const ChefDetails = lazy(() => import("../Pages/ChefDetails/ChefDetails"));
import Blog from "../Pages/Blog/Blog";
import LazyLoading from "../components/LazyLoading/LazyLoading";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://assignment-10-server-souravofficialweb-gmailcom.vercel.app/chefinfo"),
      },
      {
        path: "/chef/:id",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <PrivateRoutes><ChefDetails /></PrivateRoutes>
          </Suspense>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-10-server-souravofficialweb-gmailcom.vercel.app/chefinfo/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ],
  },
]);

export default router;

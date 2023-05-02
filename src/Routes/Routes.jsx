import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
const ChefDetails = lazy(() => import("../Pages/ChefDetails/ChefDetails"));
import Blog from "../Pages/Blog/Blog";
import LazyLoading from "../components/LazyLoading/LazyLoading";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/chefinfo"),
      },
      {
        path: "/chef/:id",
        element: (
          <Suspense fallback={<LazyLoading />}>
            <ChefDetails />
          </Suspense>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefinfo/${params.id}`),
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

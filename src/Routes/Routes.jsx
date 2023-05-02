import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
const ChefDetails = lazy(() => import("../Pages/ChefDetails/ChefDetails"));
import Blog from "../Pages/Blog/Blog";
import Loader from "../components/Loader/Loader";

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
          <Suspense fallback={<Loader />}>
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
    ],
  },
]);

export default router;

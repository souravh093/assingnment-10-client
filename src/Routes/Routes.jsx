import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch("http://localhost:5000/chefinfo")
            },
            {
                path: '/chef/:id',
                element: <ChefDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/chefinfo/${params.id}`)
            }
        ]
    }
])

export default router;
import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/home-page/HomePage.tsx";
import {CartsPage} from "../pages/carts-page/CartsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: '', element: <HomePage/>},
            {path: 'users', element: <HomePage/>},
            {path: 'users/:id/carts', element: <CartsPage/>}
        ]
    }
])
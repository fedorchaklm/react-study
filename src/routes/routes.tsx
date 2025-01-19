import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/main-layout/MainLayout.tsx";
import {HomePage} from "../pages/home-page/HomePage.tsx";
import {CarsPage} from "../pages/cars-page/CarsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: '', element: <HomePage/>},
            {
                path: 'carts', element: <CarsPage/>
            }
        ]
    }
])
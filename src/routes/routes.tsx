import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/main-layout/MainLayout.tsx";
import {HomePage} from "../pages/home-page/HomePage.tsx";
import {LoginPage} from "../pages/login-page/LoginPage.tsx";
import {LoginForm} from "../components/login-form/LoginForm.tsx";
import {AuthResourcesPage} from "../pages/auth-resources-page/AuthResourcesPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: '', element: <HomePage/>},
            {
                path: 'login', element: <LoginPage/>, children: [
                    {path: '', element: <LoginForm/>},
                ]
            },
            {
                path: '/auth/resources', element: <AuthResourcesPage/>, children: [
                    {path: '', element: <div>auth</div>},
                ]
            }
        ]
    }
])
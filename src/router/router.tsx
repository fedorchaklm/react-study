import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../pages/HomePage/HomePage.tsx";
import {UsersPage} from "../pages/UsersPage/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage/PostsPage.tsx";
import {MainLayout} from "../layouts/MainLayout/MainLayout.tsx";
import {SingleUserDetailsPage} from "../pages/SingleUserDetailsPage/SingleUserDetailsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: '', element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/details', element: <SingleUserDetailsPage/>},
            {path: 'posts', element: <PostsPage/>}
        ]
    }
]);
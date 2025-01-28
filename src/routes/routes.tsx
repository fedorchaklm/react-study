import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/main-layout/MainLayout.tsx";
import {HomePage} from "../pages/home-page/HomePage.tsx";
import {UsersPage} from "../pages/users-page/UsersPage.tsx";
import {CommentsPage} from "../pages/comments-page/CommentsPage.tsx";
import {PostsPage} from "../pages/posts-page/PostsPage.tsx";
import {ComplexPage} from "../pages/complex-page/ComplexPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: '', element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'complex', element: <ComplexPage/>}
        ]}
])
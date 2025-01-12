import {createBrowserRouter} from "react-router-dom";
import {UsersPage} from "../pages/UsersPage/UsersPage.tsx";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {PostsPage} from "../pages/PostsPage/PostsPage.tsx";

export const routes = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children:[
            {path:'users', element: <UsersPage/>},
            {path:'/posts', element: <PostsPage/>}
        ]}
])

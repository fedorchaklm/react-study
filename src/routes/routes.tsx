import {useRoutes} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {appRoutes} from "./constants.ts";
import UserChildren from "./UserChildren.tsx";

export const RoutesComponent = () => useRoutes([
    {
        path: appRoutes.ROOT, element: <MainLayout/>, children: UserChildren
    },
])
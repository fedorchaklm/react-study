import {appRoutes} from "./constants.ts";
import {Suspense} from "react";
import Skeleton from "../skeleton/Skeleton.tsx";
import CartChildren from "./CartChildren.tsx";
import HomePage from "../pages/home-page/HomePage.tsx";

// const HomePage = lazy(() => import('../pages/home-page/HomePage.tsx'));

const UserChildren = [
    {
        path: appRoutes.USERS,
        element:
            <Suspense fallback=<Skeleton/>>
                <HomePage/>
            </Suspense>,
        children: CartChildren
    },
    {path: '*', element: <div>404 | Not Found</div>}
]

export default UserChildren;
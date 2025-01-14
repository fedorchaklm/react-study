import {appRoutes} from "./constants.ts";
import {lazy, Suspense} from "react";
import Skeleton from "../skeleton/Skeleton.tsx";

const CartsPage = lazy(() => import('../pages/carts-page/CartsPage.tsx'));

const CartChildren = [
    {
        path: appRoutes.USER_CARTS,
        element:
            <Suspense fallback=<Skeleton/>>
                <CartsPage/>
            </Suspense>,
        index: true
    }
]

export default CartChildren;
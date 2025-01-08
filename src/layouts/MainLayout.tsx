import {Outlet} from "react-router-dom";
import {FC} from "react";
import {Menu} from "../components/Menu/Menu.tsx";

export const MainLayout: FC = () => {
    return (
        <>
            <Menu/>
            <hr/>
            <Outlet/>
        </>
    )
}
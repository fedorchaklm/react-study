import {FC} from "react";
import {Menu} from "../../components/Menu/Menu.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout: FC = () => {

    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}
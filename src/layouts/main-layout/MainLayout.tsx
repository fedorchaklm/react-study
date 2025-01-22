import {Outlet} from "react-router-dom";
import {FC} from "react";
import {Menu} from "../../components/menu/Menu.tsx";

export const MainLayout: FC = () => {
    return (
        <>
            <Menu/>
            <div className='flex justify-center items-center mt-20'>
                <Outlet/>
            </div>
        </>
    )
}
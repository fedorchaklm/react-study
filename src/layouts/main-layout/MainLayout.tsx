import {Outlet} from "react-router-dom";
import {Menu} from "../../components/menu/Menu.tsx";

export const MainLayout = () => {
    return (
        <div className='flex flex-col'>
            <Menu/>
            <Outlet/>
        </div>
    )
}
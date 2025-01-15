import Menu from "../../components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className='flex flex-col justify-between pb-5'>
            <Menu/>
            <div className='flex flex-col justify-start items-center gap-5'>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;
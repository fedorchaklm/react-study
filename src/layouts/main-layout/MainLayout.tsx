import Menu from "../../components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className='flex flex-col justify-between min-h-screen pb-5'>
            <div className='flex flex-col items-center gap-5'>
                <Menu/>
            </div>
            <div className='flex flex-col justify-start items-center gap-5'>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;
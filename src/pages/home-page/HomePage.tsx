import {UsersList} from "../../components/users-list/UsersList.tsx";
import {Outlet} from "react-router-dom";

const HomePage = () => {
    return (
        <div className='flex flex-row'>
            <div className='bg-amber-50 w-1/2 pt-2'>
                <UsersList/>
            </div>
            <Outlet/>
        </div>
    )
}

export default HomePage;
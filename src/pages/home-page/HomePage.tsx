import {UsersList} from "../../components/users-list/UsersList.tsx";
import {Outlet} from "react-router-dom";

export const HomePage = () => {
    return (
        <div className='flex flex-row'>
            <div className='bg-amber-100 w-1/2'>
                <UsersList/>
            </div>
                <Outlet/>
        </div>
    )
}
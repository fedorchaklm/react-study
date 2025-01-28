import {FC} from "react";
import {UsersList} from "../../components/users-list/UsersList.tsx";

export const UsersPage: FC = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-3xl'>
           <UsersList/>
        </div>
    )
}
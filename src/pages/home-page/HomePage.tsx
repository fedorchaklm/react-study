import {UsersList} from "../../components/users-list/UsersList.tsx";

export const HomePage = () => {
    return (
        <div className='flex flex-row'>
            <div className='bg-amber-50 w-full pt-2'>
                <UsersList/>
            </div>
        </div>
    )
}
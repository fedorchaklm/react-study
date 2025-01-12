import {FC, useEffect, useState} from "react";
import {UserComponent} from "../user-component/UserComponent.tsx";
import IUser from "../../model/IUser.ts";
import {UsersService} from "../../services/users.api.service.ts";

export const UsersList: FC = () => {
    const [users, setUsers] = useState<Array<IUser>>([]);

    useEffect(() => {

        const getAllUsers = async () => {
            const users = await UsersService.getAll();
            setUsers(users);
        }
        getAllUsers();
    }, []);

    return (
        <div className='flex flex-col items-center'>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    )
}
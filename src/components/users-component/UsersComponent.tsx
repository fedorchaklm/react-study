import {useEffect, useState} from "react";
import {UserComponent} from "../user-component/UserComponent.tsx";
import IUser from "../../models/IUser.ts";
import {UsersService} from "../../services/users.api.service.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<Array<IUser>>([]);

    useEffect(() => {
        (async () => {
            const users = await UsersService.getAllUsers();
            setUsers(users);
        })()
    }, []);

    return (
        <div className='flex flex-col items-center'>
            {users.map((user) => <UserComponent key={user.id} user={user}/>)}
        </div>
    )
}
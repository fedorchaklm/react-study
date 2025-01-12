import {FC, useEffect, useState} from "react";
import {UserComponent} from "../user-component/UserComponent.tsx";
import IUser from "../../model/IUser.ts";

export const UsersList: FC = () => {
    const [users, setUsers] = useState<Array<IUser>>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(data => data.json())
            .then(({users}) => setUsers(users))
    }, []);

    return (
        <div className='flex flex-col items-center'>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    )
}
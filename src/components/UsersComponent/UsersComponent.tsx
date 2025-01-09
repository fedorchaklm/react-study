import {FC, useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../UserComponent/UserComponent.tsx";
import {userService} from "../../services/api.service.ts";

export const UsersComponent:FC = () => {
    const [users, setUsers] = useState<Array<IUser>>([]);

    useEffect(() => {
        userService.getAllUsers().then(setUsers)
    }, [])

    return (
        <>
            {users.map((user) => <UserComponent key={user.id} user={user}/>)}
        </>
    )
}
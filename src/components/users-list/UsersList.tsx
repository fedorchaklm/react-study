import {useCallback, useEffect, useMemo, useState} from "react";
import {User} from "../user/User.tsx";
import {IUser} from "../../models/IUser.ts";
import {Info} from "../info/Info.tsx";

export const UsersList = () => {
    console.log('users');
    const [users, setUsers] = useState([]);

    const foo = useCallback(() => {
        console.log('foo');
    }, [])

    const arr = useMemo(() => {
        return [11, 22, 33];
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, []);

    return (
        <div className='flex flex-col items-center'>
            {users.map((user: IUser) => <User key={user.id} user={user}/>)}
            <Info foo={foo} items={arr}/>
        </div>
    )
}
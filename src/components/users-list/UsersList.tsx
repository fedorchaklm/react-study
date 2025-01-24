import {useCallback, useMemo} from "react";
import {User} from "../user/User.tsx";
import {IUser} from "../../models/IUser.ts";
import {Info} from "../info/Info.tsx";
import {useFetch} from "../../hooks/useFetch.ts";

export const UsersList = () => {
    console.log('users');

    const {users, setUsers} = useFetch();
    console.log(users);

    const foo = useCallback(() => {
        console.log('foo');
    }, [])

    const arr = useMemo(() => {
        return [11, 22, 33];
    }, []);


    return (
        <div className='flex flex-col items-center'>
            {users.map((user: IUser) => <User key={user.id} user={user}/>)}
            <Info foo={foo} items={arr}/>
            <button onClick={() => setUsers([])}>reset</button>
        </div>
    )
}
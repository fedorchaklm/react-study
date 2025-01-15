import {useEffect, useState} from "react";
import User from "../user/User.tsx";
import {useSearchParams} from "react-router-dom";
import {userApiService} from "../../services/user.api.service.tsx";
import IUser from "../../models/IUser.ts";

const UsersList = () => {
    const [users, setUsers] = useState<Array<IUser>>([]);
    const [query] = useSearchParams();

    useEffect(() => {
        const page = query.get('page') || '1';
        userApiService.getUsersByPage(page)
            .then(({users}) => setUsers(users));
    }, [query])

    return (
        <div className='flex flex-col items-start w-60 text-xl'>
            {users.map((user) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersList;
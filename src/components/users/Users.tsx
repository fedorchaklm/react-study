import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import User from "../user/User.tsx";
import {useSearchParams} from "react-router-dom";
import {userApiService} from "../../services/user.api.service.tsx";

const Users = () => {
    const [users, setUsers] = useState<Array<IUser>>([]);
    const [query] = useSearchParams();

    useEffect(() => {
        const page = Number(query.get('page'));
        userApiService.getUsersByPage(page)
            .then(setUsers);
    }, [query])

    return (
        <div>
            {users.map((user) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;
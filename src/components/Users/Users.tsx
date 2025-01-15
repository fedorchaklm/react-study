import {FC, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {IUser} from "../../models/IUser.ts";
import {userApiService} from "../../services/user.api.service.ts";
import {getUrlWithSearchParam} from "../../utils/utils.ts";
import {apiURl} from "../../constants/constants.ts";
import User from "../User/User.tsx";

const Users: FC = () => {
    const [users, setUsers] = useState([]);
    const [query] = useSearchParams();

    useEffect(() => {
        const pg: string = query.get('pg') ?? '1';
        const url = getUrlWithSearchParam(apiURl.USERS, pg);
        userApiService.getUsers(url)
            .then(setUsers)
    }, [query])

    return (
        <div>
            {users.map((user: IUser) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;
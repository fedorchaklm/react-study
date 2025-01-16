import UsersList from "../../components/users/UsersList.tsx";
import Pagination from "../../components/pagination/Pagination.tsx";
import {useEffect, useState} from "react";
import {userApiService} from "../../services/user.api.service.tsx";
import IUser from "../../models/IUser.ts";
import {useSearchParams} from "react-router-dom";
import {getQuantityOfPages} from "../../utils/utils.ts";
import {limitOfUsersByPage} from "../../constants/constants.ts";

const UsersPage = () => {
    const [maxPages, setMaxPages] = useState<number>(1);
    const [users, setUsers] = useState<Array<IUser>>([]);
    const [query] = useSearchParams();

    useEffect(() => {
        const page = query.get('page') || '1';
        userApiService.getUsersByPage(page)
            .then(({users, total}) => {
                setMaxPages(getQuantityOfPages(total, limitOfUsersByPage));
                setUsers(users);
            });
    }, [query])

    return (
        <div className='flex flex-col'>
            <UsersList users={users}/>
            <Pagination maxPages={maxPages}/>
        </div>
    );
};

export default UsersPage;
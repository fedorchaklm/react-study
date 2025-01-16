import UsersList from "../../components/users/UsersList.tsx";
import Pagination from "../../components/pagination/Pagination.tsx";
import {useEffect, useState} from "react";
import {userApiService} from "../../services/user.api.service.tsx";
import {getQuantityOfPages} from "../../utils/utils.ts";
import {limitOfUsersByPage} from "../../constants/constants.ts";

const UsersPage = () => {
    const [maxPages, setMaxPages] = useState<number>(1);

    useEffect(() => {
        userApiService.getQuantityOfAllUsers()
            .then((total) => {
                setMaxPages(getQuantityOfPages(total, limitOfUsersByPage))
            })
    }, []);

    return (
        <div className='flex flex-col'>
            <UsersList/>
            <Pagination maxPages={maxPages}/>
        </div>
    );
};

export default UsersPage;
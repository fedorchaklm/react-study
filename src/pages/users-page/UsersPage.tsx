import UsersList from "../../components/users/UsersList.tsx";
import Pagination from "../../components/pagination/Pagination.tsx";
import {useEffect, useState} from "react";
import {userApiService} from "../../services/user.api.service.tsx";

const UsersPage = () => {
    const [maxPages, setMaxPages] = useState<number>(1);
    console.log({maxPages})

    useEffect(() => {
        userApiService.getAllUsers()
            .then(({total}) => {
                setMaxPages(Math.round(total / 30))
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
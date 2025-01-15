import Users from "../../components/users/Users.tsx";
import Pagination from "../../components/pagination/Pagination.tsx";
import {useEffect, useState} from "react";
import {userApiService} from "../../services/user.api.service.tsx";

const UsersPage = () => {
    const [maxPages, setMaxPages] = useState<number>(1);

    useEffect(() => {
        userApiService.getAllUsers()
            .then(({total}) => {
                setMaxPages(Math.round(total / 30))
            })
        console.log({maxPages})
    }, []);

    return (
        <div className='flex flex-col'>
            <Users/>
            <Pagination maxPages={maxPages}/>
        </div>
    );
};

export default UsersPage;
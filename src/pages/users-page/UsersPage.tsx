import Users from "../../components/users/Users.tsx";
import Pagination from "../../components/pagination/Pagination.tsx";
import {useEffect, useState} from "react";

const UsersPage = () => {
    const [maxPages, setMaxPages] = useState<number>(1);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(({total}) => {setMaxPages(Math.round(total/30))})
        console.log({maxPages})
    }, []);

    return (
        <div>
           <Users/>
            <Pagination maxPages={maxPages}/>
        </div>
    );
};

export default UsersPage;
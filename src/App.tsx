import './App.css'
import PaginationComponent from "./components/PaginationComponent/PaginationComponent.tsx";
import Users from "./components/Users/Users.tsx";
import {useEffect, useState} from "react";
import {apiURl} from "./constants/constants.ts";
import {userApiService} from "./services/user.api.service.ts";
import {getUrlWithSearchParam} from "./utils/utils.ts";

function App() {
    const [maxPages, setMaxPages] = useState<number>(0);

    useEffect(() => {
        const url = getUrlWithSearchParam(apiURl.USERS, '1');
        userApiService.getPages(url).then(setMaxPages);
    }, []);

    return (
        <>
            <Users/>
            <PaginationComponent maxPages={maxPages}/>
        </>
    )
}

export default App

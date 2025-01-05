// import {FC} from "react";
import './MyUsersComponent.css';
import {useEffect, useState} from "react";
import IUser from "../../models/IUser.ts";
import MyUser from "../MyUser/MyUser.tsx";
import getUsers from "../../services/api.service.ts";

const MyUsersComponent = () => {
    const [users, setUsers] = useState<Array<IUser>>([]);
    const [details, setDetails] = useState<IUser | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const users = await getUsers();
            setUsers(users)
        }

        fetchData();

        return () => {
            console.log('Get data');
        }
    }, [])

    const showDetails = (user: IUser) => {
        setDetails(user);
    }

    return (
        <>
            {details &&
                <div className='flex flex-col px-5 py-5 items-center border-2 border-solid border-amber-800 '>
                    <p>{details.address.city}</p>
                    <p>{details.address.street}</p>
                    <p>{details.company.name}</p>
                    <p>{details.email}</p>
                </div>}

            {
                <div className='flex flex-col px-5 py-5 items-center'>
                    {users.map((user: IUser) => <MyUser user={user} showDetails={showDetails} key={user.username}/>)}
                </div>
            }
        </>
    )
}

export default MyUsersComponent;


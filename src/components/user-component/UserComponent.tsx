import IUser from "../../models/IUser.ts";
import {FC} from "react";
import './UserComponent.css';

type UserPropsType = {
    user: IUser;
}

export const UserComponent: FC<UserPropsType> = ({user}) => {
    return (
        <div className='flex flex-col items-center gap-2 border-solid border-orange-500 border-2 py-2 px-2 mb-3 w-1/3'>
            <div className='flex flex-row gap-2'>
                <img src={user.image} alt={user.lastName}/>
                <p>{user.id} {user.firstName} {user.lastName}</p>
            </div>
            <p>Company: {user.company.name}, {user.company.department}</p>
            <p>Address: {user.address.address}, {user.address.city}</p>
        </div>
    )
}
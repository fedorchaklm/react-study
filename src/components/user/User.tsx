import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserType = {
    user: IUser;
}
export const User: FC<UserType> = ({user}) => {
    return (
        <div className='border-2 my-2 px-2'>
            <p>{user.name}</p>
            <p>{user.phone}</p>
            <p>{user.email}</p>
        </div>
    )
}
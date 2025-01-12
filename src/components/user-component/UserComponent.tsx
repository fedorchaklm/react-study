import {FC} from "react";
import IUser from "../../model/IUser.ts";
import {Link} from "react-router-dom";

type UserPropsType = {
    user: IUser;
}

export const UserComponent: FC<UserPropsType> = ({user}) => {
    const id = user.id;

    return (
        <div className='px-2 mb-2 flex flex-row items-center gap-2'>
            <p>{user.id} {user.firstName} {user.lastName}</p>
        <Link className='border-2 px-1 hover:bg-amber-200' to={`${id}/cart`} state={user}>Go to cart</Link>
        </div>
    )
}
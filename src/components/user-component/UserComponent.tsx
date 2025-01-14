import {FC} from "react";
import IUser from "../../model/IUser.ts";
import {useNavigate} from "react-router-dom";

type UserPropsType = {
    user: IUser;
}

export const UserComponent: FC<UserPropsType> = ({user}) => {
    const navigate = useNavigate();

    const handleOnCliclNavigate = () => {
        navigate(`/users/${user.id}/carts`);
    }

    return (
        <div className='px-2 mb-2 flex flex-row items-center gap-2'>
            <p>{user.id} {user.firstName} {user.lastName}</p>
        <button className='border-2 px-1 bg-blue-50 hover:bg-blue-200' onClick={handleOnCliclNavigate}>Go to cart</button>
        </div>
    )
}
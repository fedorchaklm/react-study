import {FC} from "react";
import IUser from "../../models/IUser.ts";

type UserPropsType = {
    user: IUser;
}
const User: FC<UserPropsType> = ({user}) => {
    return (
        <p className='px-2' >{user.id} {user.firstName} {user.lastName}</p>
    );
};

export default User;
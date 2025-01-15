import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserPropsType = {
    user: IUser;
}
const User: FC<UserPropsType> = ({user}) => {
    return (
        <div>{user.id} {user.first_name}</div>
    );
};

export default User;
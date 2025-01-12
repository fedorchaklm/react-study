import {FC} from "react";
import {IUser} from "../../model/IUser.ts";

type UserPropsType = {
    user: IUser;
}

export const UserComponent: FC<UserPropsType> = ({user}) => {
    return (
        <>{user.name}</>
    )
}
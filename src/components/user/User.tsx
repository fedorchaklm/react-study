import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserProps = {
    user: IUser;
}
export const User: FC<UserProps> = ({user}) => {
    console.log('user');

    return (
        <p>
            {user.name}
        </p>
    )
}
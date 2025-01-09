import {FC} from "react";
import {Link, useLocation} from "react-router-dom";
import {IUser} from "../../models/IUser.ts";

export const SingleUserDetailsPage: FC = () => {
    const {state} = useLocation();
    const user = state as IUser;

    return (
        <>
        <p>{user.email}</p>
            <Link to={'/users'}>Back</Link>
        </>
    )
}
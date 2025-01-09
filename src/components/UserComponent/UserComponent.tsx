import {FC} from "react";
import {IUser} from "../../models/IUser.ts";
import {Link, useNavigate} from "react-router-dom";

type UserPropsType = {
    user: IUser;
}

export const UserComponent: FC<UserPropsType> = ({user}) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('details', {state:user});
    }
    return (<>
        <p>
            <Link to={'details'} state={user}>{user.username}</Link>
            <button onClick={handleOnClick}>Details</button>
        </p>
    </>)
}
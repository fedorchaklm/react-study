import User from "../user/User.tsx";
import IUser from "../../models/IUser.ts";
import {FC} from "react";

type UsersListProps = {
    users: Array<IUser>;
}

const UsersList: FC<UsersListProps> = ({users}) => {

    return (
        <div className='flex flex-col items-start w-60 text-xl'>
            {users.map((user) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersList;
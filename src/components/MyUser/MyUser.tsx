import IUser from "../../models/IUser.ts";
import {FC} from "react";

type MyUserPropsType = {
    user: IUser;
    showDetails: (user: IUser) => void
}

const MyUser: FC<MyUserPropsType> = ({user, showDetails}) => {
    return (
        <div className='flex flex-col w-1/4 items-center border-2 border-solid py-5 mb-5'>
            <h1>{`${user.id} - ${user.name}`} </h1>
            <button onClick={() => showDetails(user)}>Show details</button>
        </div>)
}

export default MyUser;
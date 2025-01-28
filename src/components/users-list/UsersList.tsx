import {FC, useEffect} from "react";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {IUser} from "../../models/IUser.ts";
import {User} from "../user/User.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {userSliceActions} from "../../redux/user-slice/userSlice.ts";

export const UsersList: FC = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    }, []);

    return (
        <div className='flex flex-col gap-2'>
            {users.map((user:IUser) => <User key={user.id} user={user}/> )}
        </div>
    )
}
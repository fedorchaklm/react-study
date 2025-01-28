import {FC, useEffect,} from "react";
import {UserComponent} from "../UserComponent/UserComponent.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {userSliceActions} from "../../redux/userSlice/userSlice.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";

export const UsersComponent: FC = () => {
    const {users, loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
    }, []);

    return (
        <>
            {!loadState && <div>Loading</div>}
            {users && users.map((user) => <UserComponent key={user.id} user={user}/>)}
        </>
    )
}
import {FC, useEffect,} from "react";
import {UserComponent} from "../UserComponent/UserComponent.tsx";
import {useAppSelector, userSliceActions} from "../../main.tsx";
import {useDispatch} from "react-redux";

export const UsersComponent: FC = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice);
    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                dispatch(userSliceActions.loadUsers(json))
            })
    }, []);

    return (
        <>
            {users && users.map((user) => <UserComponent key={user.id} user={user}/>)}
        </>
    )
}
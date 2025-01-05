import {FC} from "react";
import ITodo from "../../models/ITodo.ts";

type TodoPropsType = {
    item: ITodo;
}
const TodoComponent: FC<TodoPropsType> = ({item}) => {
    return (
        <div className='flex flex-col items-center w-1/2 border-2 border-orange'>
            <p>{item.userId}</p>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.completed}</p>
        </div>
    )
}

export default TodoComponent;
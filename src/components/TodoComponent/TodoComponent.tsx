import {FC} from "react";
import ITodo from "../../models/ITodo.ts";

type TodoPropsType = {
    todo: ITodo;
}

const TodoComponent: FC<TodoPropsType> = ({todo}) => {
    return (
        <div className='flex flex-col items-center w-1/2 border-2 border-orange'>
            <p>Todo №{todo.id}</p>
            <p>{todo.title}</p>
            {
                todo.completed &&
                <div className='flex gap-1'>
                    <label>Done</label>
                    <input type="checkbox" checked readOnly/>
                </div>
            }
        </div>
    )
}

export default TodoComponent;
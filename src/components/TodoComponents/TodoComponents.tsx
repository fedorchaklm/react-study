import ITodo from "../../models/ITodo.ts";
import TodoComponent from "../TodoComponent/TodoComponent.tsx";
import {useEffect, useState} from "react";
import getTodos from "../../services/api.service.ts";

const TodoComponents = () => {
    const [todos, setTodos] = useState<Array<ITodo>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const todos = await getTodos();
            setTodos(todos);
        }

        fetchData();
    }, [])

    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            {todos.map((todo: ITodo) => (<TodoComponent todo={todo} key={todo.id}/>))}
        </div>
    )
}

export default TodoComponents;
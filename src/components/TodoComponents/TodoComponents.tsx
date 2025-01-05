import ITodo from "../../models/ITodo.ts";
import TodoComponent from "../TodoComponent/TodoComponent.tsx";
import {useEffect, useState} from "react";
import getTodos from "../../services/api.service.ts";

const TodoComponents = () => {
    const [items, setItem] = useState<Array<ITodo>>([]);
    useEffect(() => {
        const fetchData = async() => {
            const todos = await getTodos();
            setItem(todos);
        }

        fetchData();
    }, [])


    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            {items.map((item:ITodo) => (<TodoComponent item={item} key={item.id}/>))}
        </div>
    )
}

export default TodoComponents;
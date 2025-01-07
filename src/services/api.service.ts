import ITodo from "../models/ITodo.ts";

export const getTodosFromDummyjson = async (): Promise<Array<ITodo>> => {
    const data = await fetch(import.meta.env.VITE_API_URL);
    const todosObj = await data.json();
    return todosObj.todos;
}


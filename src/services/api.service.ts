import ITodo from "../models/ITodo.ts";

const getTodos = async (): Promise<Array<ITodo>> => {
    const data = await fetch(import.meta.env.VITE_API_BASEURL);
    return await data.json();
}

export default getTodos
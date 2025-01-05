import IUser from "../models/IUser.ts";

const getUsers = async ():Promise<Array<IUser>> => {
    const data = await fetch(import.meta.env.VITE_API_URL);
    return await data.json();
}

export const getUser = async (id: string):Promise<IUser> => {
    const data = await fetch(import.meta.env.VITE_API_URL + '/' + id);
    return await data.json();
}

export default getUsers;
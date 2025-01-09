import {urls} from "../constants/urls.ts";

export const userService = {
    getAllUsers: async () => {
        const data = await fetch(urls.users.allUsers);
        return await data.json();
    },
    getUser: async (id: number) => {
        const data = await fetch(urls.users.userById(id));
        return await data.json();
    }
}
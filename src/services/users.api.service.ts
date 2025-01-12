import IUser from "../model/IUser.ts";

export const UsersService = {
    getAll: async (): Promise<Array<IUser>> => {
        const data = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users`);
        const usersObj = await data.json();
        return usersObj.users;
    }
}

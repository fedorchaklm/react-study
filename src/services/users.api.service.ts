import {urls} from "../constants/urls.ts";
import IUser from "../models/IUser.ts";

export const UsersService = {
    getAllUsers: async (): Promise<Array<IUser>> => {
        const data = await fetch(urls.users.allUsers);
        const usersObj = await data.json();
        return usersObj.users;
    }
}
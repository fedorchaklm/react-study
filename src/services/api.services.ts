import axios from "axios";
import {ILoginData} from "../models/ILoginData.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth'
})

export const login = async (user: ILoginData): Promise<IUserWithTokens> => {
    const {data: userWithToken} = await axiosInstance.post<IUserWithTokens>('/login', user);
    console.log(userWithToken);
    return userWithToken;
}
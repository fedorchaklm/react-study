import axios from "axios";
import {ILoginData} from "../models/ILoginData.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProductsResponseModel} from "../models/IProductResponseModel.ts";
import {IProduct} from "../models/IProduct.ts";
import {retriveLocalStorage} from "../helpers/helpers.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

axiosInstance.interceptors.request.use((request) => {
    if (request.method?.toUpperCase() === "GET") {
        request.headers.authorization = 'Bearer ' +  retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return request;
})
export const login = async (user: ILoginData): Promise<IUserWithTokens> => {
    const {data: userWithToken} = await axiosInstance.post<IUserWithTokens>('/login', user);
    console.log(userWithToken);
    localStorage.setItem('user', JSON.stringify(userWithToken));
    return userWithToken;
}

export const loadAuthProduct = async (): Promise<Array<IProduct>> => {
    const {data} = await axiosInstance.get<IProductsResponseModel>('/products');
    console.log(data);
    return data.products;
}
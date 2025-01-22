import axios from "axios";
import {ILoginData} from "../models/ILoginData.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProductsResponseModel} from "../models/IProductResponseModel.ts";
import {IProduct} from "../models/IProduct.ts";
import {retriveLocalStorage} from "../helpers/helpers.ts";
import {ITokensPair} from "../models/ITokensPair.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

axiosInstance.interceptors.request.use((request) => {
    if (request.method?.toUpperCase() === "GET") {
        request.headers.authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
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
    const {data: {products} } = await axiosInstance.get<IProductsResponseModel>('/products');
    console.log(products);
    return products;
}

export const refreshToken = async () => {
    const userWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {
        data: {
            refreshToken,
            accessToken
        }
    } = await axiosInstance.post<ITokensPair>('/refresh', {
        refreshToken: userWithTokens.refreshToken,
        expiresInMins: 1
    });
    userWithTokens.accessToken = accessToken;
    userWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(userWithTokens));
}
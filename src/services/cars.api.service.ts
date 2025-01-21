import {ICar} from "../models/ICar.ts";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

// export const carsService = {
//     getAllCars: async (): Promise<Array<ICar>> => {
//         const data = await fetch(urls.allCars);
//         return await data.json();
//     }
// }

const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {"Content-Type": "application/json"}
})

export const carsService = {
    getAllCars: async (): Promise<Array<ICar>> => {
        const {data} = await axiosInstance.get('/cars');
        return data;
    },
    createCar: async (car: Omit<ICar, 'id'>): Promise<ICar> => {
        const {data} = await axiosInstance.post('/cars', car);
        return data;
    }
}

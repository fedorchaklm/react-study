import {ICar} from "../models/ICar.ts";
import {urls} from "../constants/urls.ts";

export const carsService = {
    getAllCars: async (): Promise<Array<ICar>> => {
        const data = await fetch(urls.allCars);
        return await data.json();
    }
}
import {getUrlWithSearchParam} from "../utils/utils.ts";
import {IResponseModel} from "../models/IResponseModel.ts";
import {limitOfUsersByPage} from "../constants/constants.ts";

const baseUrl = import.meta.env.VITE_API_URL;

export const userApiService = {
    getQuantityOfAllUsers: async (): Promise<number> => {
        const url = getUrlWithSearchParam(baseUrl, 'limit', '0');
        const response = await fetch(url);
        const resObj = await response.json();
        return resObj.total;
    },
    getUsersByPage: async (page: string): Promise<IResponseModel> => {
        const skip = (limitOfUsersByPage * Number(page) - limitOfUsersByPage).toString();
        const url = getUrlWithSearchParam(baseUrl, 'skip', skip);
        const response = await fetch(url);
        return await response.json();
    }
}


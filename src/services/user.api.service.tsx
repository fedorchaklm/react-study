import {getUrlWithSearchParam} from "../utils/utils.ts";
import {IResponseModel} from "../models/IResponseModel.ts";

const baseUrl = import.meta.env.VITE_API_URL;

export const userApiService = {
    getAllUsers: async () => {
        const response = await fetch(baseUrl);
        return await response.json();
    },
    getUsersByPage: async (page: string): Promise<IResponseModel> => {
        const limit = 30;
        const skip = limit * Number(page) - 30;
        const url = getUrlWithSearchParam(baseUrl, 'skip', skip.toString())
        const response = await fetch(url);
        return await response.json();
    }
}


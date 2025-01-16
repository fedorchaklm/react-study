import {getUrlWithSearchParam} from "../utils/utils.ts";
import {IResponseModel} from "../models/IResponseModel.ts";
import {limitOfUsersByPage} from "../constants/constants.ts";

const baseUrl = import.meta.env.VITE_API_URL;

export const userApiService = {
    getUsersByPage: async (page: string): Promise<IResponseModel> => {
        const skip = (limitOfUsersByPage * Number(page) - limitOfUsersByPage).toString();
        const url = getUrlWithSearchParam(baseUrl, 'skip', skip);
        const response = await fetch(url);
        return await response.json();
    }
}


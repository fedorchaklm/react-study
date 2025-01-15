import IUser from "./IUser.ts";

export interface IResponseModel {
    users: Array<IUser>;
    total: number;
    skip: number;
    limit: number;
}
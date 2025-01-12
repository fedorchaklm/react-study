import {ICart} from "./ICart.ts";

export interface ICartResponse {
    carts: Array<ICart>;
    total: number;
    skip: number;
    limit: number;
}

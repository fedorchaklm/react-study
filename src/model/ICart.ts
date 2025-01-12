import {IProduct} from "./IProduct.ts";

export interface ICart {
    id: number;
    products: Array<IProduct>,
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

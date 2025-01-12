import {ICart} from "../model/ICart.ts";

export const CartsService = {
    getAll: async (id:string):  Promise<Array<ICart>> => {
        const data = await fetch(`${import.meta.env.VITE_API_BASE_URL}/carts/user/${id}`);
        const cartsObj = await data.json();
        return cartsObj.carts;
    }
}

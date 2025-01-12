import {ICart} from "../model/ICart.ts";

export const getTotalPriceOfCarts = (carts: Array<ICart>) => {
   const res = carts.reduce((acc, cart) => acc + cart.total, 0);
   return res.toFixed(2);
}
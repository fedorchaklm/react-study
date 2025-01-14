import {FC} from "react";
import {ICart} from "../../model/ICart.ts";
import {ProductsList} from "../products-list/ProductsList.tsx";

type CartsListProps = {
    cart: ICart;
}
export const CartList: FC<CartsListProps> = ({cart}) => {

    return (
        <div className='flex flex-col items-center my-2'>
            <p className='text-xl'>Price of cart: {cart.total}$</p>
            <ProductsList key={cart.id} cart={cart}/>
        </div>
    )
}
import {FC} from "react";
import {ICart} from "../../model/ICart.ts";
import {ProductsList} from "../products-list/ProductsList.tsx";

type CartsListProps = {
    cart: ICart;
}
export const CartsList: FC<CartsListProps> = ({cart}) => {

    return (
        <div className='flex flex-col items-center my-2'>
            <ProductsList key={cart.id} cart={cart}/>
            <p>Price of cart: {cart.total}$</p>
            <hr/>
        </div>
    )
}
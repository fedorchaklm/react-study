import {FC} from "react";
import {Product} from "../product/Product.tsx";
import {ICart} from "../../model/ICart.ts";

type ProductsListProps = {
    cart: ICart;
}
export const ProductsList: FC<ProductsListProps> = ({cart}) => {

    return (
        <div className='flex flex-col items-center'>
            {cart.products.map(product => <Product key={product.id} product={product}/>)}
        </div>
    )
}
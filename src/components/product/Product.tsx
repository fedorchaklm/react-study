import {IProduct} from "../../model/IProduct.ts";
import {FC} from "react";

type ProductPropsType = {
    product: IProduct;
}

export const Product: FC<ProductPropsType> = ({product}) => {
    return (
        <div className='flex flex-col items-center bg-amber-50 mb-2 border-2 w-full text-center px-2'>
            <p key={product.id}>{product.title}</p>
            <img key={product.title} src={product.thumbnail} alt={product.title}/>
            <p>{product.price}$</p>
            <p>Quantity: {product.quantity}</p>
        </div>
    )
}
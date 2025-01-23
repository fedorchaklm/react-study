import {IProduct} from "../../models/IProduct.ts";
import {FC} from "react";
import './Product.css';

type ProductType = {
    product: IProduct;
}

export const Product: FC<ProductType> = ({product}) => {
    return (
        <div className='flex flex-col items-center'>
        <p>{product.title} - {product.price}$</p>
        <img src={product.thumbnail} alt={product.title}/>
        </div>
    )
}
import IProduct from "../../models/IProduct.ts";
import {FC} from "react";
type MyPropsType = {product: IProduct}

const MyProduct: FC<MyPropsType> = ({product}) => {
    return (
        <div className='flex flex-col w-1/4 items-center border-2 border-solid py-5 mb-5'>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <img src={product.image} alt={product.title}/>
        </div>)
}

export default MyProduct;
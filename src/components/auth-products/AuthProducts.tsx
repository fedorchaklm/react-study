import {useEffect, useState} from "react";
import {IProduct} from "../../models/IProduct.ts";
import {loadAuthProduct} from "../../services/api.services.ts";
import {Product} from "../product/Product.tsx";

export const AuthProducts = () => {
    const [products, setProducts] = useState<Array<IProduct>>([]);
    const [errors, setErrors] = useState<string>('');


    useEffect(() => {
        loadAuthProduct()
            .then(setProducts)
            .catch((e) => {
                console.log(e);
                setErrors(e.message)
            })
    }, [])

    return (
        <div className='flex flex-col items-center'>
            {products.map((product) => <Product product={product} key={product.id}/>)}
            {errors && <div>401 Unauthorized</div>}
        </div>
    )
}
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICart} from "../../model/ICart.ts";
import './UserCart.css';
import {CartsList} from "../cart-list/CartList.tsx";
import {CartsService} from "../../services/carts.api.service.ts";

export const UserCart = () => {
    const [carts, setCarts] = useState<Array<ICart>>([]);
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            const getAllCarts = async () => {
                const carts = await CartsService.getAll(id);
                setCarts(carts)
            }
            getAllCarts();
        }
    }, [id]);

    return (
        <div className='flex flex-col items-center'>
            {carts.length > 0 ? <p>Cart:</p> : <p>Empty cart</p>}
            {carts.map((cart) => <CartsList key={cart.id} cart={cart}/>)}
        </div>
    )
}
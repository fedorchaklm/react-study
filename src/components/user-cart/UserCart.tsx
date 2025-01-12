import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICart} from "../../model/ICart.ts";
import './UserCart.css';
import {CartsList} from "../cart-list/CartList.tsx";

export const UserCart = () => {
    const {state} = useLocation();
    const [carts, setCarts] = useState<Array<ICart>>([]);
    const {id} = useParams();

    console.log(state);

    useEffect(() => {
        fetch(`https://dummyjson.com/carts/user/${id}`)
            .then(res => res.json())
            .then(({carts}) => setCarts(carts));
    }, [id]);

    return (
        <div className='flex flex-col justify-center'>
            {carts.map((cart) => <CartsList key={cart.id} cart={cart}/>)}
        </div>
    )
}
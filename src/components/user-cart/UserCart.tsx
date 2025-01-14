import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICart} from "../../model/ICart.ts";
import './UserCart.css';
import {CartsList} from "../cart-list/CartList.tsx";
import {CartsService} from "../../services/carts.api.service.ts";
import {getTotalPriceOfCarts} from "../../utils/utils.ts";

export const UserCart = () => {
    const [carts, setCarts] = useState<Array<ICart>>([]);
    const {id} = useParams();
    const navigate = useNavigate();

    const handleOnClickNavigate = () => {
        navigate('/users');
    }

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
            {carts.length > 1 ? <p className='text-2xl'>Total price of carts: {getTotalPriceOfCarts(carts)}$</p>: <p></p>}
            <button className='border-2 px-1 bg-blue-50 hover:bg-blue-200 mt-2' onClick={handleOnClickNavigate}>Back</button>
        </div>
    )
}
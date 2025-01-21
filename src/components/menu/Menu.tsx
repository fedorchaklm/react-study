import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul className='flex gap-2 pl-2 text-2xl bg-black text-white py-2'>
            <li className='hover:text-amber-200'>
                <Link to={'/'}>Home</Link>
            </li>
            <li className='hover:text-amber-200'>
                <Link to={'/carts'}>Cars
                </Link>
            </li>
        </ul>
    )
}
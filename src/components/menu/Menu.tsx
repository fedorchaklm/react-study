import {Link} from "react-router-dom";
import './Menu.css';

export const Menu = () => {
    return (
        <ul className='menu'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/auth/resources'>Products</Link>
            </li>
        </ul>
    )
}
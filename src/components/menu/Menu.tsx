import {Link} from "react-router-dom";
import './Menu.css';

const Menu = () => {
    return (
        <ul className='flex flex-row gap-2'>
            <li>
                <Link className='btn' to={'/'}>Home</Link>
            </li>
            <li>
                <Link className='btn' to={'/users'}>Users</Link>
            </li>
        </ul>
    );
};

export default Menu;
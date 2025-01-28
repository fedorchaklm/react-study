import {Link} from "react-router";
import './Menu.css';

export const Menu = () => {
    return (
        <ul className='flex justify-center gap-2 bg-black'>
            <li className='btn'>
                <Link to='/users'>Users</Link>
            </li>
            <li className='btn'>
                <Link to='/posts'>Posts</Link>
            </li>
            <li className='btn'>
                <Link to='/comments'>Comments</Link>
            </li>
            <li className='btn'>
                <Link to='/complex'>Complex</Link>
            </li>
        </ul>
    )
}
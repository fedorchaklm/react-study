import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul className='flex flex-row items-center justify-center gap-2 my-2'>
            <li className='bg-blue-400 px-2 hover:bg-blue-200'>
                <Link to={'users'}>UsersPage</Link>
            </li>
            <li className='bg-blue-400 px-2 hover:bg-blue-200'>
                <Link to={'posts'}>PostsPage</Link>
            </li>
        </ul>
    )
}
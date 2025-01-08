import {Link} from "react-router-dom";
import {FC} from "react";

export const Menu: FC = () => {
    return (
        <ul>
            <li>
                <Link to={'/'}>Home page</Link>
            </li>
            <li>
                <Link to={'about'}>About page</Link>
            </li>
            <li>
                <Link to={'contacts'}>Contacts page</Link>
            </li>
        </ul>
    )
}
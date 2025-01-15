import {Link} from "react-router-dom";
import {apiRoutes} from "../../routes/constants.ts";

const Menu = () => {
    return (
        <ul>
            <li>
                <Link to={apiRoutes.HOME}>Home</Link>
            </li>
            <li>
                <Link to={apiRoutes.USERS}>Users</Link>
            </li>
        </ul>
    );
};

export default Menu;
import {FC} from "react";
import {Link, Outlet} from "react-router-dom";

export const AboutPage: FC = () => {
    return (
        <>
            <h1> About Page content </h1>
            <ul>
                <li>
                    <Link to={'mike'}>Mike</Link>
                </li>
                <li>
                    <Link to={'ann'}>Ann</Link>
                </li>
            </ul>
            <hr/>
            <Outlet/>
        </>
    )
}
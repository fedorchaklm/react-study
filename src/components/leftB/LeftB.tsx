import {useContext} from "react";
import {ThemeContext} from "../../context/themeContext.tsx";

export const LeftB = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={theme}>
            Left Component B
        </div>
    )
}
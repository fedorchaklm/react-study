import {useContext} from "react";
import {ThemeContext} from "../../context/themeContext.ts";
import {ThemeContextType} from "../../models/models.ts";

export const RightB = () => {
    const {theme, changeTheme} = useContext<ThemeContextType>(ThemeContext);

    return (
        <div className='flex flex-col'>
            Right Component A
            <button className='bg-white text-black px-4 rounded' onClick={() => changeTheme(theme)}>change
                theme</button>
        </div>
    )
}
import {useContext} from "react";
import {ThemeContext} from "../../context/themeContext.tsx";
import {ThemeContextType} from "../../models/models.ts";

export const RightB = () => {
    const {changeTheme} = useContext<ThemeContextType>(ThemeContext);

    return (
        <div className='flex flex-col'>
            Right Component A
            <button className='bg-cyan-400 text-black px-4 rounded mx-5' onClick={changeTheme}>change
                theme</button>
        </div>
    )
}
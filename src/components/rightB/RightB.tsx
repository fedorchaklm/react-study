import {useChangeTheme} from "../../context/ThemeContext.tsx";

export const RightB = () => {
    const changeTheme = useChangeTheme();

    return (
        <div className='flex flex-col'>
            Right Component A
            <button className='bg-cyan-400 text-black px-4 rounded mx-5' onClick={changeTheme}>change
                theme</button>
        </div>
    )
}
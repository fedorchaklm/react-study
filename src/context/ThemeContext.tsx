import {createContext, FC, PropsWithChildren, useContext, useState} from "react";
import {ThemeColor, ThemeContextType} from "../models/models.ts";

const ThemeContext = createContext<ThemeContextType>({
    theme: ThemeColor.DARK,
    changeTheme: () => {},
})

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<ThemeColor>(ThemeColor.DARK);
    const changeTheme = () => {
        setTheme((prevState) => prevState === ThemeColor.DARK ? ThemeColor.LIGHT : ThemeColor.DARK);
    };

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useChangeTheme = () => useContext(ThemeContext).changeTheme;
export const useTheme = () => useContext(ThemeContext).theme;
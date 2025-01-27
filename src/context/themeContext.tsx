import {createContext, FC, PropsWithChildren, useState} from "react";
import {ThemeColor, ThemeContextType} from "../models/models.ts";

export const defaultValues = {
    theme: ThemeColor.DARK,
    changeTheme: (themeValue: ThemeColor) => {
        console.log(themeValue);
    }
}

export const ThemeContext = createContext<ThemeContextType>(defaultValues)

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<ThemeColor>(ThemeColor.DARK);
    const changeTheme = (theme: ThemeColor) => {
        const newTheme = theme === ThemeColor.DARK ? ThemeColor.LIGHT : ThemeColor.DARK;
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
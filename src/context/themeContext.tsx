import {createContext, FC, PropsWithChildren, useState} from "react";
import {ThemeColor, ThemeContextType} from "../models/models.ts";

export const defaultValues = {
    theme: ThemeColor.DARK,
    changeTheme: () => {
        console.log('dark');
    }
}

export const ThemeContext = createContext<ThemeContextType>(defaultValues)

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
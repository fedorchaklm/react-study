import {createContext} from "react";
import {ThemeColor, ThemeContextType} from "../models/models.ts";

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    changeTheme: (themeValue: ThemeColor) => {
        console.log(themeValue);
    }
})
export type ThemeColor = 'dark' | 'light';

export type ThemeContextType = {
    theme: ThemeColor;
    changeTheme: (themeValue: ThemeColor) => void;
}



export enum ThemeColor {
    DARK = 'dark', LIGHT = 'light'
}

export type ThemeContextType = {
    theme: ThemeColor;
    changeTheme: () => void;
}



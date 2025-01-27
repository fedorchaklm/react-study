import { useTheme} from "../../context/ThemeContext.tsx";

export const LeftB = () => {
    const theme = useTheme();

    return (
        <div className={theme}>
            Left Component B
        </div>
    )
}
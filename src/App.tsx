import './App.css'
import {LeftComponent} from "./components/left-component/LeftComponent.tsx";
import {RightComponent} from "./components/right-component/RightComponent.tsx";
import {ThemeContext} from "./context/themeContext.ts";
import {useState} from "react";
import {ThemeColor} from "./models/models.ts";

function App() {
    const [theme, setTheme] = useState<ThemeColor>('dark');

    return (
        <ThemeContext.Provider value={{
            theme: theme, changeTheme: (theme: ThemeColor) => {
                if (theme === 'dark') {
                    setTheme('light');
                } else {
                    setTheme('dark')
                }
            }
        }}>
            <LeftComponent/>
            <hr/>
            <RightComponent/>
        </ThemeContext.Provider>
    )
}

export default App

import './App.css'
import {LeftComponent} from "./components/left-component/LeftComponent.tsx";
import {RightComponent} from "./components/right-component/RightComponent.tsx";
import {ThemeProvider} from "./context/themeContext.tsx";

function App() {

    return (
        <ThemeProvider>
            <LeftComponent/>
            <hr/>
            <RightComponent/>
        </ThemeProvider>
    )
}

export default App

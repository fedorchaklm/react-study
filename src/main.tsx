import {createRoot} from 'react-dom/client'
import './index.css'
import App from "./App.tsx";
import {BrowserRouter} from "react-router-dom";
import {appRoutes} from "./routes/constants.ts";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename={appRoutes.ROOT}>
        <App/>
    </BrowserRouter>
)

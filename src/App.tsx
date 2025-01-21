import './App.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/routes.tsx";
import {ToastContainer} from "react-toastify";

function App() {

    return (
        <>
            <RouterProvider router={routes}/>
            <ToastContainer position="bottom-center" autoClose={5000} theme='dark'/>
        </>
    )
}

export default App

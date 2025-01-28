import {createRoot} from 'react-dom/client'
import './index.css'
import {routes} from "./router/router.tsx";
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";

// window['store'] = store;

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={routes}/>
    </Provider>
)

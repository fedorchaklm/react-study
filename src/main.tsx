import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout.tsx";
import {ContactsPage} from "./pages/ContactsPage/ContactsPage.tsx";
import {AboutPage} from "./pages/AboutPage/AboutPage.tsx";
import {HomePage} from "./pages/HomePage/HomePage.tsx";
import {AboutMikePage} from "./pages/AboutMikePage/AboutMikePage.tsx";
import {AboutAnnPage} from "./pages/AboutAnnPage/AboutAnnPage.tsx";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                path: 'about', element: <AboutPage/>, children: [
                    {path: 'mike', element: <AboutMikePage/>},
                    {path: 'ann', element: <AboutAnnPage/>}
                ]
            },
            {path: 'contacts', element: <ContactsPage/>},
            {path: '', element: <HomePage/>}

        ]
    }

])
createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)

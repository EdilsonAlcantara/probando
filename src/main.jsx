import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
{
    /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina404 from './Config/Pagina404.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "*",
        element: <Pagina404 />,
    },
]);

createRoot(document.getElementById('root')).render(
    // <StrictMode>
        <RouterProvider router={router} />
    // </StrictMode>
)

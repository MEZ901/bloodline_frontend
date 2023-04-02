import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts";
import { LandingPage } from "./views";
import { Login, Register } from "./features/auth";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            
        ],
    },
]);

export default router;
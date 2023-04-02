import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts";
import { LandingPage } from "./views";
import { Login } from "./features/auth";
import { AuthLayout } from "./layouts";

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
                path: 'account',
                element: <AuthLayout />,
                children: [
                    {
                        path: 'login',
                        element: <Login />,
                    }
                ]
            },
            
        ],
    },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts";
import { LandingPage, PageNotFound } from "./views";
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
            {
                path: '*',
                element: <PageNotFound />
            }
        ],
    },
]);

export default router;
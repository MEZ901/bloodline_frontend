import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts";
import { LandingPage } from "./views";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
        ],
    },
]);

export default router;
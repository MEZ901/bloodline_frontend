import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import LandingPage from "./views/LandingPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },
]);

export default router;
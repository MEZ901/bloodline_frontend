import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts";
import { LandingPage, PageNotFound, ErrorBoundary } from "./views";
import { Login, Register } from "./features/auth";
import { Home } from "./features/home";
import { AuthMiddleware } from "./features/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element:
          <AuthMiddleware type="guest">
            <LandingPage />
          </AuthMiddleware>,
      },
      {
        path: "/login",
        element:
          <AuthMiddleware type="guest">
            <Login />
          </AuthMiddleware>,
      },
      {
        path: "/register",
        element:
          <AuthMiddleware type="guest">
            <Register />
          </AuthMiddleware>,
      },
      {
        path: "/home",
        element:
          <AuthMiddleware type="auth">
            <Home />
          </AuthMiddleware>,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;

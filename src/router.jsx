import { createBrowserRouter } from "react-router-dom";
import { RootLayout, UserLayout, AdminLayout } from "./layouts";
import { LandingPage, PageNotFound, ErrorBoundary } from "./views";
import { Login, Register } from "./features/auth";
import { Home } from "./features/home";
import { AuthMiddleware } from "./features/auth";
import { HospitalDetails } from "./features/hospitals";
import { AdminDashboard, Users, Hospitals, Settings } from "./features/admin";
import { Profile } from "./features/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <UserLayout />,
        children: [
          {
            path: "/",
            element: (
              <AuthMiddleware type="guest">
                <LandingPage />
              </AuthMiddleware>
            ),
          },
          {
            path: "/home",
            element: (
              <AuthMiddleware type="auth">
                <Home />
              </AuthMiddleware>
            ),
          },
          {
            path: "/hospital/:id",
            element: (
              <AuthMiddleware type="auth">
                <HospitalDetails />
              </AuthMiddleware>
            ),
          },
          {
            path: "/profile",
            element: (
              <AuthMiddleware type="auth">
                <Profile />
              </AuthMiddleware>
            ),
          },
        ],
      },
      {
        path: "/admin",
        element: (
          <AuthMiddleware type="auth">
            <AdminLayout />
          </AuthMiddleware>
        ),
        children: [
          {
            path: "dashboard",
            element: <AdminDashboard />,
          },
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "hospitals",
            element: <Hospitals />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
      {
        path: "/login",
        element: (
          <AuthMiddleware type="guest">
            <Login />
          </AuthMiddleware>
        ),
      },
      {
        path: "/register",
        element: (
          <AuthMiddleware type="guest">
            <Register />
          </AuthMiddleware>
        ),
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;

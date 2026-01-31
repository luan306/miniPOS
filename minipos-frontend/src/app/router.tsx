import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import AuthGuard from "./auth.guard";
import MainLayout from "../components/layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: (
      <AuthGuard>
        <MainLayout>
          <DashboardPage />
        </MainLayout>
      </AuthGuard>
    ),
  },
]);

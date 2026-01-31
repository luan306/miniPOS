import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import ProductsPage from "../pages/products/ProductsPage";
import AuthGuard from "./auth.guard";
import MainLayout from "../components/layout/MainLayout";
import SellingPage from "../pages/selling/sellingPage";

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
  {
    path: "/products",
    element: (
      <AuthGuard>
        <MainLayout>
          <ProductsPage  />
        </MainLayout>
      </AuthGuard>
    ),
  },
  {
    path: "/pos",
    element: (
      <AuthGuard>
        <MainLayout>
          <SellingPage  />
        </MainLayout>
      </AuthGuard>
    ),
  },
]);

import type { RouteObject } from "react-router-dom";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const ROUTES_PATH: { [key: string]: string } = {
  "/": "root",
  "/login": "login",
  "/dashboard": "dashboard",
  "/dashboard/managers": "managers",
  "/dashboard/profile": "profile",
  "/dashboard/orders": "orders",
  "/dashboard/drivers": "Driver",
  "/404": "not_found",
};

export const ADMIN_PATH = ["/dashboard/managers", "/dashboard/profile"];
export const MANAGER_PATH = [
  "/dashboard/drivers",
  "/dashboard/drivers/:id",
  "/dashboard/orders",
];

export const ADMIN_ROUTES: RouteObject[] = [
  {
    path: "/dashboard/managers",
    index: true,
    async lazy() {
      const { default: ManagersPage } = await import("../pages/ManagersPage");
      return { Component: ManagersPage };
    },
  },
  {
    path: "/dashboard/profile",
    index: true,
    async lazy() {
      const { default: ProfilePage } = await import("../pages/ProfilePage");
      return { Component: ProfilePage };
    },
  },
  {
    path: "/dashboard/setting",
    index: true,
    async lazy() {
      const { default: SettingPage } = await import("../pages/SettingPage");
      return { Component: SettingPage };
    },
  },
];

export const MANAGER_ROUTES: RouteObject[] = [
  {
    path: "/dashboard/orders",
    async lazy() {
      const { default: OrderPage } = await import("../pages/OrderPage");
      return { Component: OrderPage };
    },
  },
  {
    path: "/dashboard/drivers",
    async lazy() {
      const { default: DriverPage } = await import("../pages/DriverPage");
      return { Component: DriverPage };
    },
  },
  {
    path: "/dashboard/drivers/:id",
    async lazy() {
      const { default: DriverDetailPage } = await import(
        "../pages/DriverDetailPage"
      );
      return { Component: DriverDetailPage };
    },
  },
];

export const routes: RouteObject[] = [
  {
    path: "/",
    async lazy() {
      const { default: PublicLayout } = await import("../layouts/public");
      return { Component: PublicLayout };
    },
    children: [
      {
        path: "/login",
        async lazy() {
          const { default: LoginPage } = await import("../pages/LoginPage");
          return { Component: LoginPage };
        },
      },
    ],
  },
  {
    path: "/dashboard",
    async lazy() {
      const { default: DashboardLayout } = await import(
        "../layouts/guard/dashboard"
      );
      return { Component: DashboardLayout };
    },
    children: ADMIN_ROUTES.concat(MANAGER_ROUTES),
  },
  {
    path: "/404",
    async lazy() {
      const { default: Page404 } = await import("../pages/Page404");
      return { Component: Page404 };
    },
  },
  { path: "*", element: <Navigate to={"/404"} replace={false} /> },
];

export const router = createBrowserRouter(routes);

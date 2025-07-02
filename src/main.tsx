import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import LoginPage from "./pages/LoginPage.tsx";
import MainLayout from "./layout/MainLayout.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/login" replace />
    },
    {
      path: "/dashboard",
      element: <MainLayout />,
    },
    {
      index: true,
      path: "/login",
      element: <LoginPage />,
    },
  ],
  {
    basename: "/sistem-akademik",
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

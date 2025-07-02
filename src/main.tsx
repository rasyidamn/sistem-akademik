import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {   createHashRouter, RouterProvider } from "react-router";
import LoginPage from "./pages/LoginPage.tsx";
import MainLayout from "./layout/MainLayout.tsx";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <MainLayout />
    },
    {
      path: "/login",
      element: <LoginPage />
    }
  ],
  {
    basename: "/sistem-akademik"
  }
  
)


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import mainRoutes from "./Routers/mainRoutes";
import AuthProvider from "./providers/AuthProvider";
import "./index.css";

const client = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ToastContainer>
        <QueryClientProvider client={client}>
          <AuthProvider>
            <RouterProvider router={mainRoutes}></RouterProvider>
          </AuthProvider>
        </QueryClientProvider>
      </ToastContainer>
    </HelmetProvider>
  </StrictMode>
);

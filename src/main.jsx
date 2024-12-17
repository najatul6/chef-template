import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
const client = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={client}>
      <AuthProvider>
        <RouterProvider router={mainRoutes}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)

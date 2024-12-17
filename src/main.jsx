import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
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

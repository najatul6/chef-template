import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';

const mainRoutes =  createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "kitchen",
          element: (
            <PrivateRoute>
              <Kitchen></Kitchen>
            </PrivateRoute>
          ),
        },
        {
          path: "registration",
          element: <Register></Register>,
        },
        {},
      ],
    },
  ]);
  

export default mainRoutes
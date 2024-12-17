import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Error from '../pages/Error/Error';

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
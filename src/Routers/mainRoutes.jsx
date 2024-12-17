import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import LogIn from '../pages/LogIn/LogIn';
import PrivateRoute from './PrivateRoute';
import Kitchen from '../pages/Kitchen/Kitchen';
import Register from '../pages/Register/Register';

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
          element: <LogIn></LogIn>,
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
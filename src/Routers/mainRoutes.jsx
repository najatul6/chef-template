import { createBrowserRouter } from 'react-router-dom';

const mainRoutes =  createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
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
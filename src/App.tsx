import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateAccountPage } from './pages/CreateAccountPage';
import { Home } from './pages/HomePage';


import { Login } from './pages/LoginPage';
import { UserPage } from './pages/UserPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/criarconta',
    element: <CreateAccountPage />
  },
  {
    path: '/usuario',
    element: <UserPage/>,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
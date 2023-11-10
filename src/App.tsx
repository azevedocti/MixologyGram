import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateAccountPage } from './pages/CreateAccountPage';
import { Home } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { UserPage } from './pages/UserPage';
import { ProductPage } from './pages/ProductPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/criarconta',
    element: <CreateAccountPage />
  },
  {
    path: '/usuario',
    element: <UserPage/>,
  },
  {
    path: '/produto',
    element: <ProductPage/>,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
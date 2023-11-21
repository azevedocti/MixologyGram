import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateAccountPage } from './pages/CreateAccountPage';
import { Home } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { FeedPage } from './pages/feedpage';
import { ProductPage } from './pages/ProductPage';
import { UserPage } from './pages/UserPage';

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
    path: '/feed',
    element: <FeedPage/>,
  },
  {
    path: '/produto/:id',
    element: <ProductPage/>,
  },
  {
    path: '/usuario',
    element: <UserPage />
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
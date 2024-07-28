import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import ErrorPage from '../pages/Error/ErrorPage';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import PrivateRoute from './PrivateRoute';
import Profile from '../pages/Profile/Profile';
import About from '../pages/About/About';
import ProductDetail from '../pages/ProductPage/ProductPage';
import CheckoutPage from '../pages/Checkout/Checkout';
import AdminRoute from './AdminRoute';
import AdminPage from '../pages/Admin/admin';
import PrivacyPolicy from '../pages/PrivacyAndPolicy/PrivacyAndPolicy';
import HelpCenter from '../pages/HelpCenter/HelpCenter';
import FAQ from '../pages/faq/faq';
import Contact from '../pages/Contact/contact';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/privacy-and-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/help-center',
        element: <HelpCenter />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
      {
        path: '/checkout',
        element: <CheckoutPage />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: '/profile',
            element: <Profile />,
          },
          {
            element: <AdminRoute />,
            children: [
              {
                path: '/admin',
                element: <AdminPage />,
              }
            ]
          }
        ],
      },
    ],
  },
]);

export default Router;
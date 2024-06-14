import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import ErrorPage from '../pages/Error/ErrorPage'
import Home from '../pages/Home/Home'
import Shop from '../pages/Shop/Shop'
import PrivateRoute from './PrivateRoute'
import Profile from '../pages/Profile/Profile'
import About from '../pages/About/About'

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
        ],
      },
    ],
  },
])

export default Router

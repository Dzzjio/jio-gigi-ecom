import { Navigate, Outlet } from 'react-router-dom'
import authStore from '../stores/Auth.store'

const PrivateRoute = () => {
  // Add your authentication logic here
  const isAuthenticated = authStore((state) => !!state.accessToken)
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute

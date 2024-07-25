import { Navigate, Outlet } from 'react-router-dom'
import authStore from '../stores/Auth.store'

const AuthRoute = () => {
  // Add your authentication logic here
  const isAuthenticated = authStore((state) => !!state.accessToken)
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export default AuthRoute

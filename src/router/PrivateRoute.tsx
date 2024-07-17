import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  // Add your authentication logic here
  const isAuthenticated = false
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoute

import { Navigate, Outlet } from 'react-router-dom'
import authStore from '../stores/Auth.store'
import { isAdmin } from '../utils';

const AdminRoute = () => {
  const {user} = authStore();
  return isAdmin(user?.role) ? <Outlet /> : <Navigate to="/" />
}

export default AdminRoute

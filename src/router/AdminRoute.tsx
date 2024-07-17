import { Navigate, Outlet } from 'react-router-dom'
import authStore from '../stores/Auth.store'
import { Role } from '../types/user.interface';

const AdminRoute = () => {
  const {user} = authStore();
  return user?.role === Role.ADMIN ? <Outlet /> : <Navigate to="/" />
}

export default AdminRoute

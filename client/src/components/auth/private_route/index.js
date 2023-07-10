import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () =>
  localStorage.getItem('user') ? <Outlet /> : <Navigate to="/login" />

export default PrivateRoute

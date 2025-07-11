import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../authProvider/AuthProvider.jsx";

export default function ProtectedRoutes() {
  const auth = useAuth();

  return auth.isAuthenticated ? <Outlet /> : <Outlet />;
  // return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

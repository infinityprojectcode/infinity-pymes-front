import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./auth-provider.jsx";

export default function ProtectedRoutes() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
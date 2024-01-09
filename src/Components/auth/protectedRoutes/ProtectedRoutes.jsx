import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./../authProvider/AuthProvider";

export default function ProtectedRoutes() {
    const auth = useAuth();

    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
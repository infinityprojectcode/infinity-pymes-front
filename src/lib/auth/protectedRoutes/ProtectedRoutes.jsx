import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@lib/auth/authProvider/AuthProvider";

export default function ProtectedRoutes() {
    const auth = useAuth();

    return auth.isAuthenticated ? <Outlet /> : <Outlet />;
    // return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
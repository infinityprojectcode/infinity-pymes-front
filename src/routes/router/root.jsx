import ProtectedRoutes from "../../lib/auth/protectedRoutes/ProtectedRoutes.jsx";
import { appRoutes } from "@routes/router/routes.jsx";
import UserLogin from "@routes/user-login/user-login";
import { Route, Routes } from "react-router-dom";
import Signup from "@fragments/signup/signup";
import Login from "@fragments/login/login";

export default function Router() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user-login" element={<UserLogin />} />

      {/* Rutas protegidas (envueltas en ProtectedRoutes + Outlet) */}
      <Route element={<ProtectedRoutes />}>
        {appRoutes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Route>
    </Routes>
  );
}

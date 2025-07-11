import { Route, Routes } from "react-router-dom";
import { appRoutes } from "@routes/router/routes.jsx";
import ErrorPage from "@routes/router/error.jsx";
import ProtectedRoutes from "../../lib/auth/protectedRoutes/ProtectedRoutes.jsx";
import UserLogin from "@routes/userlogin/user-login";
import Signup from "@components/signup/signpup";
import Login from "@components/login/login";

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

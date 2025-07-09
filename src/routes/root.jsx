import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from '@lib/auth/protectedRoutes/ProtectedRoutes';
import UserLogin from '@pages/userlogin/user-login';
import Signup from '@components/signup/signup';
import Login from '@components/login/login';
import { appRoutes } from "@routes/routes";

export default function Router() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user-login" element={<UserLogin />} />

      {/* Rutas protegidas (envueltas en ProtectedRoutes + Outlet) */}
      <Route element={<ProtectedRoutes />}>
        {appRoutes.map(({ path, element: Element, name }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Route>
    </Routes>
  );
}
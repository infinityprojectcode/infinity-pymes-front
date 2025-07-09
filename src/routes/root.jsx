import { appRoutes } from "@routes/routes";
import Login from '@components/login/login';
import Signup from '@components/signup/signup';
import { Route, Routes } from "react-router-dom";
import UserLogin from '@pages/userlogin/user-login';

export default function Router() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user-login" element={<UserLogin />} />

      {/* Rutas protegidas dinámicamente */}
      {appRoutes.map(({ path, element: Element, name }) => (
        <Route name={name} key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  );
}
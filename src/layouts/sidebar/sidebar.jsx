import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "@routes/router/routes.jsx";
import LogoutIcon from "@assets/icons/logout-icon";
import { useAuth } from "@context/auth/auth-provider";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, permissions, logout } = useAuth(); // 👈 sacamos de AuthContext
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Filtramos las rutas según los permisos del usuario
  const allowedRoutes = appRoutes.filter((route) =>
    permissions.some(
      (perm) => perm.path === route.path && perm.name === route.name
    )
  );

  return (
    <div
      className="
        flex flex-row w-full h-16 lg:flex-col lg:h-screen lg:w-1/6
        bg-100
      "
    >
      <div className="flex flex-row lg:flex-col h-full w-full justify-between lg:justify-start items-center lg:items-stretch">
        {/* Logo y usuario */}
        <div className="flex flex-row lg:flex-col items-center lg:text-center p-2 gap-2 flex-shrink-0">
          <div className="hidden lg:flex lg:flex-col lg:w-fit mx-auto">
            <h1 className="text-lg font-bold text-100">Infinity Pymes</h1>
            <h2 className="text-sm text-200">Gestión administrativa</h2>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full border bg-white border-gray-300 flex-shrink-0">
              {/* Avatar */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg>
            </div>
            <div className="flex flex-col items-start lg:items-center">
              <span className="text-100 font-semibold">
                {user?.name || "Usuario"}
              </span>
              <span className="text-sm text-200">
                {user?.role || "Rol no asignado"}
              </span>
            </div>
          </div>
        </div>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-100 hover:bg-white hover:text-black rounded"
        >
          ☰
        </button>

        <div className="hidden lg:block w-full border-t border-gray-300" />

        {/* Links dinámicos */}
        <div
          className={`
            flex-col gap-1 lg:flex absolute top-0 left-0 w-full bg-white z-50 p-1
            ${isOpen ? "flex absolute top-16 left-0 w-full bg-100 shadow-md" : "hidden"}
            lg:static lg:bg-transparent lg:shadow-none
          `}
        >
          {allowedRoutes.map((item, index) => (
            <Link
              key={item.id}
              className="text-200"
              to={item.path}
              onClick={() => setIsOpen(false)}
            >
              <div
                className="px-3 py-1 mx-1 lg:mx-auto rounded-lg flex gap-2 items-center 
                hover:bg-white hover:cursor-pointer hover:text-black font-semibold"
              >
                <div className="flex justify-center items-center">{item.icon}</div>
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="flex-shrink-0 p-1 lg:border-t border-gray-300 flex justify-center items-center">
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg flex gap-2 hover:cursor-pointer items-center hover:bg-white hover:text-black font-semibold text-gray-400"
        >
          <LogoutIcon />
          <span className="hidden sm:inline">Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
}

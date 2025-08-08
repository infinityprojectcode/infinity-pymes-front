import { Link } from "react-router-dom";
import { appRoutes } from "@routes/router/routes.jsx";
import LogoutIcon from "@assets/icons/logout-icon";

export default function Sidebar() {
  return (
    <div className="flex flex-col relative top-0 left-0 h-screen w-1/6 bg-100 overflow-y-auto">
      <div className="flex flex-col h-full justify-start">
        <div className="flex flex-col text-center p-4 gap-1 pb-2">
          <div className="flex flex-col w-fit mx-auto">
            <h1 className="text-2xl font-bold text-100 whitespace-nowrap">
              Infinity Pymes
            </h1>
            <h2 className="text-sm text-200 mt-1 whitespace-nowrap">
              Gestión administrativa
            </h2>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <div className="w-12 h-12 rounded-full border bg-white border-gray-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-100 font-semibold">Usuario User</span>
              <span className="text-sm text-200">Administrador</span>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-gray-300" />

        <div className="flex flex-col h-full">
          {appRoutes.map((item, index) => (
            <Link key={index} className="text-200" to={item.path}>
              <div
                key={item.id}
                className="w-4/5 h-8 p-2 my-1 mx-auto rounded-lg flex gap-2 flex-row justify-start items-center hover:bg-white hover:cursor-pointer hover:text-black font-semibold"
              >
                <div className="flex flex-row justify-start items-center">
                  {item.icon}
                </div>
                <span className="leading-none">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="p-2 border-t border-gray-300 flex justify-center items-center">
        <Link className="text-200" to="/">
          <div className="h-12 w-fit p-2 rounded-lg flex gap-2 flex-row justify-start items-center hover:bg-white hover:cursor-pointer hover:text-black font-semibold text-gray-400">
            <LogoutIcon />
            <span className="leading-none"> Cerrar sesión</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

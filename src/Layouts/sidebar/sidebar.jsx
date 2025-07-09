import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import LogoutIcon from "../../assets/icons/logout-icon";

export default function Sidebar() {
  return (
    <div className="flex flex-col relative top-0 left-0 h-screen w-1/6 bg-100">
      <div className="flex flex-col h-full justify-start">
        <div className="flex flex-col text-center p-4 gap-2 pb-2">
          <div className="flex flex-col w-fit mx-auto">
            <h1 className="text-2xl font-bold text-100 whitespace-nowrap">
              Infinity Pymes
            </h1>
            <h2 className="text-sm text-200 mt-1 whitespace-nowrap">
              Gestión administrativa
            </h2>
          </div>

          <div className="flex items-center gap-4 mt-3">
            <img
              src="/ruta/de/imagen.jpg"
              alt="Foto de perfil"
              className="w-12 h-12 rounded-full border border-gray-300"
            />
            <div className="flex flex-col items-start">
              <span className="text-100 font-semibold">Usuario User</span>
              <span className="text-sm text-200">Administrador</span>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-gray-300 my-4" />

        <div className="flex flex-col h-full">
          {routes.map((item, index) => (
            <Link key={index} className="text-200" to={item.route}>
              <div
                key={item.id}
                className="w-4/5 h-9 px-2 my-1 mx-auto rounded-lg flex gap-4 flex-row justify-start items-center hover:bg-white hover:cursor-pointer hover:text-black font-semibold"
              >
                <div className="flex flex-row justify-start items-center">
                  {item.icon}
                </div>
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-gray-300 mt-4">
        <button className="w-full h-12 p-4 rounded-lg flex gap-2 flex-row justify-start items-center hover:bg-white hover:cursor-pointer hover:text-black font-semibold text-200">
          <LogoutIcon />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
}

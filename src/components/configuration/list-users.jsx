import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import AddUser from "../../components/configuration/modal-add-user/modal-add-user.jsx";

export default function ListUsuarios() {
  const [modalAddUserIsOpen, setModalAddUserIsOpen] = useState(false);
  const users = [
    {
      id: 1,
      nombre: "Usuario Admin",
      email: "admin@infinitypymes.com",
      rol: "Admin",
      estado: "Activo",
      acceso: "2025-01-24 10:30",
      colorRol: "bg-purple-700",
    },
    {
      id: 2,
      nombre: "María Vendedora",
      email: "maria@infinitypymes.com",
      rol: "Vendedor",
      estado: "Activo",
      acceso: "2025-01-24 09:15",
      colorRol: "bg-blue-600",
    },
    {
      id: 3,
      nombre: "Carlos Contador",
      email: "carlos@infinitypymes.com",
      rol: "Contador",
      estado: "Activo",
      acceso: "2025-01-23 16:45",
      colorRol: "bg-green-700",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col w-full bg-[#0d1117] border border-gray-800 rounded-lg p-6 gap-4">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shield-icon lucide-shield"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
            <h1 className="text-2xl font-bold mb-1">
              Configuración del Sistema
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white font-semibold">
                    Noctificaciones por Email
                  </p>
                  <p className="text-sm text-gray-400">
                    Recibir notificaciones del sistema
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition-all duration-200"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-200 peer-checked:translate-x-5"></div>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white font-semibold">
                    Autentificación de Dos Factores
                  </p>
                  <p className="text-sm text-gray-400">
                    Requerir 2FA para administradores
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition-all duration-200"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-200 peer-checked:translate-x-5"></div>
                </label>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex flex-col text-white gap-1">
                <h3 className="font-semibold text-md">
                  Tiempo de Sesión (minutos)
                </h3>
                <input
                  type="number"
                  placeholder=""
                  className=" bg-[#0d1117] border border-gray-800 rounded-lg py-1 px-3 focus:outline-none"
                />
              </div>
              <div className="flex flex-col text-white gap-1">
                <h3 className="font-semibold text-md">
                  Máximos intentos de Login
                </h3>
                <input
                  type="number"
                  placeholder=""
                  className=" bg-[#0d1117] border border-gray-800 rounded-lg py-1 px-3 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-x-auto rounded-lg border border-gray-700 bg-gray-900 text-white p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">
                Gestión de Usuarios
              </h1>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button 
              onClick={() => setModalAddUserIsOpen(true)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Nuevo Usuario
              </button>
            </div>
          </div>

          {/* Encabezado */}
          <div className="grid grid-cols-6 text-sm font-semibold px-4 py-3 text-gray-300">
            <div>Usuario</div>
            <div>Email</div>
            <div>Rol</div>
            <div>Estado</div>
            <div>Último Acceso</div>
            <div className="flex justify-center">Acciones</div>
          </div>

          {/* Usuarios */}
          {users.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-6 items-center px-4 py-3 border-t border-gray-700 hover:bg-gray-800 transition"
            >
              <div className="font-semibold">{item.nombre}</div>
              <div className="text-gray-300">{item.email}</div>
              <div>
                <span
                  className={`text-white text-sm font-medium px-3 py-1 rounded-full ${item.colorRol}`}
                >
                  {item.rol}
                </span>
              </div>
              <div>
                <span className="text-sm px-3 py-1 rounded-full bg-green-800 text-green-300 font-medium">
                  {item.estado}
                </span>
              </div>
              <div className="text-gray-400">{item.acceso}</div>
              <div className="flex justify-center gap-2">
                <button>
                  <Pencil
                    size={16}
                    className="text-gray-300 hover:text-white"
                  />
                </button>
                {item.rol !== "Admin" && (
                  <button>
                    <Trash2
                      size={16}
                      className="text-red-500 hover:text-red-700"
                    />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <AddUser
        isOpen={modalAddUserIsOpen}
        onClose={() => setModalAddUserIsOpen(false)}
      ></AddUser>
    </>
  );
}

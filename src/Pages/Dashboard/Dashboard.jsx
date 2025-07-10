/* eslint-disable no-debugger */
import Sidebar from "../../Layouts/sidebar/sidebar";
import PageTemplate from "../../Layouts/page/page-template";

export default function Dashboard() {
  return (
    <>
      <div className="w-full h-screen flex">
        <Sidebar />
        <PageTemplate>
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold mb-1">Control Panel</h1>
            <p className="text-gray-400 mb-6">
              Administrar configuraciones y configuraciones del sistema.
            </p>

            {/* Acciones rápidas */}
            <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 mb-6">
              <h2 className="text-xl font-semibold mb-4">Acciones rápidas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="border border-gray-700 rounded-md p-4 flex flex-col items-center text-center gap-1 hover:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 3H5" />
                    <path d="M12 21V7" />
                    <path d="m6 15 6 6 6-6" />
                  </svg>
                  <span className="font-semibold">Exportar datos</span>
                  <p className="text-sm text-gray-400">
                    Exportar todos los datos del sistema
                  </p>
                </div>
                <div className="border border-gray-700 rounded-md p-4 flex flex-col items-center text-center gap-1 hover:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="m18 9-6-6-6 6" />
                    <path d="M12 3v14" />
                    <path d="M5 21h14" />
                  </svg>
                  <span className="font-semibold">Importar datos</span>
                  <p className="text-sm text-gray-400">
                    Importar datos desde un archivo
                  </p>
                </div>
                <div className="border border-gray-700 rounded-md p-4 flex flex-col gap-1 items-center text-center hover:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                    <path d="M3 12A9 3 0 0 0 21 12" />
                  </svg>
                  <span className="font-semibold">
                    Copia de seguridad del sistema
                  </span>
                  <p className="text-sm text-gray-400">
                    Crear una copia de seguridad del sistema
                  </p>
                </div>
                <div className="border border-gray-700 rounded-md p-4 flex flex-col gap-1 items-center text-center hover:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
                    <path d="M15 3v4a2 2 0 0 0 2 2h4" />
                  </svg>
                  <span className="font-semibold">Generar informes</span>
                  <p className="text-sm text-gray-400">
                    Generar informes del sistema
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Configuración del sistema */}
              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-6">
                <h2 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  Configuración del sistema
                </h2>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-semibold">
                        Habilitar notificaciones
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
                        Copia de seguridad automática
                      </p>
                      <p className="text-sm text-gray-400">
                        Realizar copias de seguridad automáticas de los datos
                        diariamente
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
                        Modo de mantenimiento
                      </p>
                      <p className="text-sm text-gray-400">
                        Poner el sistema en modo de mantenimiento
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition-all duration-200"></div>
                      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-200 peer-checked:translate-x-5"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Seguridad */}
              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-6">
                <h2 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Seguridad
                </h2>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white font-semibold">
                        Autenticación de dos factores
                      </p>
                      <p className="text-sm text-gray-400">
                        Requerir 2FA para acceso de administrador
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
                        Tiempo de espera de sesión
                      </p>
                      <p className="text-sm text-gray-400">
                        Cierre de sesión automático después de inactividad
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
                        Restricciones de IP
                      </p>
                      <p className="text-sm text-gray-400">
                        Restringir el acceso por dirección IP
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition-all duration-200"></div>
                      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-200 peer-checked:translate-x-5"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageTemplate>
      </div>
    </>
  );
}

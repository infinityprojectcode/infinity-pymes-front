import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";
import "../../style.css";

export default function home() {
  const dataQuemada = [
    {
      id: 1,
      titulo: "titulo 1",
      descripcion: "descripción 1",
      tiempo: "2 PM",
    },
    {
      id: 2,
      titulo: "titulo 2",
      descripcion: "descripción 1",
      tiempo: "10 PM",
    },
  ];
  const productosStock = [
    { nombre: "Ratón inalámbrico", categoria: "Electrónica", stock: 5 },
    { nombre: "Cable USB", categoria: "Accesorios", stock: 8 },
    { nombre: "Teclado", categoria: "Electrónica", stock: 3 },
    { nombre: "Soporte de monitor", categoria: "Accesorios", stock: 2 },
  ];

  return (
    <>
      <div className="w-full h-screen flex">
        <Sidebar />
        <PageTemplate>
          <div className="w-full h-full p-4 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Home</h1>
              <p className="text-gray-400 mt-1">
                ¡Bienvenido de nuevo! Esto es lo que está pasando con tu
                inventario.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between h-full shadow">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">
                    Total de productos
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9z" />
                    <path d="M12 12l8 -4.5" />
                    <path d="M12 12v9" />
                    <path d="M12 12l-8 -4.5" />
                  </svg>
                </div>

                <div className="mt-1 flex flex-col justify-between gap-1">
                  <h2 className="text-2xl font-bold text-white">1,247</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-green-700 text-white font-semibold px-2 py-1 rounded-full">
                      +12%
                    </span>
                    <span className="text-xs text-gray-400">
                      del mes pasado
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between h-full shadow">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">
                    Clientes activos
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M8 7a4 4 0 1 1 8 0a4 4 0 1 1 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                </div>

                <div className="mt-1 flex flex-col justify-between gap-1">
                  <h2 className="text-2xl font-bold text-white">89</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-green-700 text-white font-semibold px-2 py-1 rounded-full">
                      +5%
                    </span>
                    <span className="text-xs text-gray-400">
                      del mes pasado
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between h-full shadow">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">
                    Ingresos mensuales
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M12 20v-16" />
                    <path d="M18 5h-6.5a3.5 3.5 0 0 0 0 7h1a3.5 3.5 0 0 1 0 7h-6.5" />
                  </svg>
                </div>

                <div className="mt-1 flex flex-col justify-between gap-1">
                  <h2 className="text-2xl font-bold text-white">$24,580</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-green-700 text-white font-semibold px-2 py-1 rounded-full">
                      +18%
                    </span>
                    <span className="text-xs text-gray-400">
                      del mes pasado
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between h-full shadow">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">
                    Pedidos pendientes
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                  </svg>
                </div>

                <div className="mt-1 flex flex-col justify-between gap-1">
                  <h2 className="text-2xl font-bold text-white">23</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-red-700 text-white font-semibold px-2 py-1 rounded-full">
                      -8%
                    </span>
                    <span className="text-xs text-gray-400">
                      del mes pasado
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 shadow">
                <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                  </svg>
                  Actividad reciente
                </h2>
                <ul className="space-y-4">
                  {dataQuemada.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between border-b border-gray-700 pb-2"
                    >
                      <div>
                        <p className="text-white font-semibold">
                          {item.titulo}
                        </p>
                        <p className="text-sm text-gray-400">
                          {item.descripcion}
                        </p>
                      </div>
                      <span className="text-sm text-gray-400">
                        {item.tiempo}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 shadow">
                <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 16v5" />
                    <path d="M16 14v7" />
                    <path d="M20 10v11" />
                    <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
                    <path d="M4 18v3" />
                    <path d="M8 14v7" />
                  </svg>
                  Alerta de stock bajo
                </h2>
                <ul className="space-y-4">
                  {productosStock.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center border-b border-gray-700 pb-2"
                    >
                      <div>
                        <p className="text-white font-semibold">
                          {item.nombre}
                        </p>
                        <p className="text-sm text-gray-400">
                          {item.categoria}
                        </p>
                      </div>
                      <span className="text-xs bg-red-700 text-white font-semibold px-3 py-1 rounded-full">
                        {item.stock} restantes
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </PageTemplate>
      </div>
    </>
  );
}

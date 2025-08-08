import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";
import GraphicsBar from "../../components/graphics/home/graphics-bar.jsx";
import GraphicsPie from "../../components/graphics/home/graphics-pie.jsx";

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
    {
      nombre: "Audífonos Inalámbricos",
      categoria: "Electrónica",
      stock: 5,
      unidadesVendidas: 145,
      ingresos: 14500,
    },
    {
      nombre: "Mouse Gamer",
      categoria: "Electrónica",
      stock: 8,
      unidadesVendidas: 98,
      ingresos: 5880,
    },
    {
      nombre: "Teclado Mecánico",
      categoria: "Electrónica",
      stock: 3,
      unidadesVendidas: 76,
      ingresos: 11400,
    },
    {
      nombre: 'Monitor 24"',
      categoria: "Electrónica",
      stock: 2,
      unidadesVendidas: 54,
      ingresos: 16200,
    },
    {
      nombre: "Webcam HD",
      categoria: "Electrónica",
      stock: 4,
      unidadesVendidas: 43,
      ingresos: 4300,
    },
  ];

  return (
    <>
      <div className="w-full h-screen flex">
        <PageTemplate>
          <div className="w-full h-full space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              {/* Título y subtítulo */}
              <div>
                <h1 className="text-3xl font-bold text-white">Inicio</h1>
                <p className="text-gray-400 mt-1">
                  Bienvenido! Aquí está lo que está pasando con tu inventario.
                </p>
              </div>

              {/* Filtros y botones */}
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <div className="relative w-max">
                  <select className="appearance-none bg-[#161b22] text-white text-sm border border-gray-600 rounded-md px-3 py-2 pr-10 focus:outline-none">
                    <option>Este Mes</option>
                    <option>Últimos 7 días</option>
                    <option>Últimos 30 días</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <button className="flex items-center gap-1 border border-gray-600 text-white text-sm px-3 py-2 rounded-md hover:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Excel
                </button>
                <button className="flex items-center gap-1 border border-gray-600 text-white text-sm px-3 py-2 rounded-md hover:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" x2="8" y1="13" y2="13" />
                    <line x1="16" x2="8" y1="17" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  PDF
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between h-full shadow">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">Total Products</span>
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
                      from last month
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between h-full shadow">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">Active Clients</span>
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
                      from last month
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between h-full shadow">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">Monthly Revenue</span>
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
                      from last month
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between h-full shadow">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">Pending Orders</span>
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
                      from last month
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
              <GraphicsBar />
              </div>
              <div className="col-span-2">
              <GraphicsPie />
              </div>
            </div>

            <div className="bg-[#0f172a] p-4 rounded-xl text-white">
              <h2 className="text-xl font-bold mb-4">Productos Más Vendidos</h2>
              <ul className="space-y-2">
                {productosStock.map((producto, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b border-white/10 last:border-b-0 pb-2"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-semibold">{producto.nombre}</div>
                        <div className="text-sm text-white/60">
                          {producto.unidadesVendidas} unidades vendidas
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold">
                        ${producto.ingresos.toLocaleString("es-CO")}
                      </div>
                      <div className="text-xs text-white/60">Ingresos</div>
                    </div>
                  </li>
                ))}
              </ul>
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
                  Recent Activity
                </h2>
                <ul className="space-y-4">
                  {dataQuemada.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center border-b border-gray-700 pb-2"
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
                  Low Stock Alert
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
                        {item.stock} left
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

import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";
import GraphicsBar from "../../components/graphics/expenses/graphics-bar.jsx";
import GraphicsPie from "../../components/graphics/expenses/graphics-pie.jsx";
import AddExpenses from "../../components/expenses/modal-add-expenses/modal-add-expenses.jsx";
import { useState } from "react";

export default function expenses() {
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);

  const gastos = [
    {
      id: 1,
      fecha: "2025-01-01",
      descripcion: "Alquiler de oficina",
      categoria: "Alquiler",
      proveedor: "Inmobiliaria ABC",
      metodo: "Transferencia",
      monto: -1500,
      estado: "Pagado",
      recibo: "REC-001",
    },
    {
      id: 2,
      fecha: "2025-01-15",
      descripcion: "Servicios públicos",
      categoria: "Servicios",
      proveedor: "Empresa Eléctrica",
      metodo: "Efectivo",
      monto: -350,
      estado: "Pagado",
      recibo: "REC-002",
    },
    {
      id: 3,
      fecha: "2025-01-20",
      descripcion: "Suministros de oficina",
      categoria: "Suministros",
      proveedor: "Office Depot",
      metodo: "Tarjeta",
      monto: -200,
      estado: "Pendiente",
      recibo: "REC-003",
    },
  ];

  return (
    <>
      <div className="w-full h-screen flex">
        <PageTemplate>
          <div className="w-full h-full space-y-6">
            {/* 🟥🟧 CABECERA */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              {/* Título + subtítulo */}
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Gastos y Egresos
                </h1>
                <p className="text-gray-400 mt-1">
                  Controla y categoriza todos tus gastos operacionales.
                </p>
              </div>

              {/* Filtro + botón “Nuevo Gasto” */}
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                {/* Select */}
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

                {/* Botón “Nuevo Gasto” */}
                <button
                  onClick={() => setModalAddIsOpen(true)}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
                >
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
                  Nuevo Gasto
                </button>
              </div>
            </div>
            {/* 🟥🟧 TARJETAS ESTADÍSTICAS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Total Gastos */}
              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 shadow flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">Total Gastos</span>
                  <svg
                    className="h-5 w-5 text-red-500 lucide lucide-trending-down-icon lucide-trending-down"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 17h6v-6" />
                    <path d="m22 17-8.5-8.5-5 5L2 7" />
                  </svg>
                </div>
                <h2 className="mt-2 text-2xl font-bold text-red-500">
                  $2050.00
                </h2>
              </div>

              {/* Gastos del Mes */}
              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 shadow flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">Gastos del Mes</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-400 lucide lucide-chart-column-icon lucide-chart-column"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                    <path d="M18 17V9" />
                    <path d="M13 17V5" />
                    <path d="M8 17v-3" />
                  </svg>
                </div>
                <h2 className="mt-2 text-2xl font-bold text-orange-400">
                  $0.00
                </h2>
              </div>

              {/* Gastos Pendientes */}
              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 shadow flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">
                    Gastos Pendientes
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400 lucide lucide-trending-up-icon lucide-trending-up"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 7h6v6" />
                    <path d="m22 7-8.5 8.5-5-5L2 17" />
                  </svg>
                </div>
                <h2 className="mt-2 text-2xl font-bold text-yellow-400">
                  $200.00
                </h2>
              </div>

              {/* Categorías Activas */}
              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 shadow flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">
                    Categorías Activas
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-400 lucide lucide-chart-column-icon lucide-chart-column"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                    <path d="M18 17V9" />
                    <path d="M13 17V5" />
                    <path d="M8 17v-3" />
                  </svg>
                </div>
                <h2 className="mt-2 text-2xl font-bold text-blue-400">3</h2>
              </div>
              <div class="col-span-2">
                <GraphicsBar />
              </div>
              <div class="col-span-2">
                <GraphicsPie />
              </div>
            </div>

            <div className="w-full overflow-x-auto bg-[#0d1117] text-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">
                Registro de Gastos ({gastos.length})
              </h2>
              <div className="min-w-[680px]">
                {/* Encabezados */}
                <div className="grid grid-cols-8 text-sm text-gray-400 border-b border-gray-600 pb-2 px-4">
                  <div>Fecha</div>
                  <div>Descripción</div>
                  <div>Categoría</div>
                  <div>Proveedor</div>
                  <div>Método</div>
                  <div>Monto</div>
                  <div>Estado</div>
                  <div>Recibo</div>
                </div>

                {/* Filas */}
                {gastos.map((item) => {
                  const colorEstado =
                    item.estado === "Pagado"
                      ? "bg-green-700"
                      : item.estado === "Pendiente"
                        ? "bg-yellow-600"
                        : "bg-gray-600";

                  const montoFormateado = `-$${Math.abs(item.monto)}.00`;

                  return (
                    <div
                      key={item.id}
                      className="grid grid-cols-8 items-center text-sm text-white px-4 py-3 border-t border-gray-700 hover:bg-gray-800 transition"
                    >
                      <div>{item.fecha}</div>
                      <div className="font-semibold">{item.descripcion}</div>
                      <div>{item.categoria}</div>
                      <div>{item.proveedor}</div>
                      <div>{item.metodo}</div>
                      <div className="text-red-500 font-bold">
                        {montoFormateado}
                      </div>
                      <div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${colorEstado}`}
                        >
                          {item.estado}
                        </span>
                      </div>
                      <div>{item.recibo}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <AddExpenses
              isOpen={modalAddIsOpen}
              onClose={() => setModalAddIsOpen(false)}
            ></AddExpenses>
          </div>
        </PageTemplate>
      </div>
    </>
  );
}

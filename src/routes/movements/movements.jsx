import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";
import AddMovements from "../../components/movements/modal-add-movements/modal-add-movements.jsx";
import ShowMovements from "../../components/movements/modal-show-movements/modal-show-movements.jsx";
import { useState } from "react";

export default function movements() {
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalShowIsOpen, setModalShowIsOpen] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState("movimientos");

  const getStatus = (status) => {
    if (status == "Atrasado") return { name: "Atrasado", color: "bg-red-500" };
    if (status == "Pendiente")
      return { name: "Pendiente", color: "bg-yellow-500" };
    return { name: "Pagado", color: "bg-green-500" };
  };
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <PageTemplate>
        <div className="w-full h-full p-8">
          <div className="w-full h-full space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              {/* Título y subtítulo */}
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Movimientos de Caja
                </h1>
                <p className="text-gray-400 mt-1">
                  Controla los ingresos y egresos de efectivo.
                </p>
              </div>

              {/* Botones de acción */}
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <button
                  onClick={() => setModalAddIsOpen(true)}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md"
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
                  Nuevo Movimiento
                </button>

                <button
                  onClick={() => setModalShowIsOpen(true)}
                  className="flex items-center gap-2 border border-gray-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-800"
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
                      d="M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
                    />
                  </svg>
                  Cierre Diario
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Ingresos Hoy */}
              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between shadow">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">Ingresos Hoy</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 17l6-6 4 4 8-8" />
                  </svg>
                </div>
                <div className="mt-2">
                  <h2 className="text-2xl font-bold text-green-500">$0.00</h2>
                </div>
              </div>

              {/* Egresos Hoy */}
              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between shadow">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">Egresos Hoy</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 7l6 6 4-4 8 8" />
                  </svg>
                </div>
                <div className="mt-2">
                  <h2 className="text-2xl font-bold text-red-500">$0.00</h2>
                </div>
              </div>

              {/* Balance Hoy */}
              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between shadow">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">Balance Hoy</span>
                  <span className="text-gray-400 text-base font-medium">$</span>
                </div>
                <div className="mt-2">
                  <h2 className="text-2xl font-bold text-green-500">$0.00</h2>
                </div>
              </div>

              {/* Movimientos Hoy */}
              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between shadow">
                <div className="flex justify-between items-start">
                  <span className="text-sm text-gray-400">Movimientos Hoy</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="mt-2">
                  <h2 className="text-2xl font-bold text-white">0</h2>
                </div>
              </div>
            </div>

            <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-1 flex w-fit shadow">
              <button
                onClick={() => setSeccionActiva("movimientos")}
                className={`p-2 rounded-md text-sm ${
                  seccionActiva === "movimientos"
                    ? "bg-gray-800 text-white"
                    : "bg-transparent text-gray-300"
                }`}
              >
                Movimientos
              </button>
              <button
                onClick={() => setSeccionActiva("auditoria")}
                className={`p-2 rounded-md text-sm ${
                  seccionActiva === "auditoria"
                    ? "bg-gray-800 text-white"
                    : "bg-transparent text-gray-300"
                }`}
              >
                Auditoría
              </button>
              <button
                onClick={() => setSeccionActiva("cierre")}
                className={`p-2 rounded-md text-sm ${
                  seccionActiva === "cierre"
                    ? "bg-gray-800 text-white"
                    : "bg-transparent text-gray-300"
                }`}
              >
                Cierre Diario
              </button>
            </div>

            {/* Secciones dinámicas */}
            <div className="mt-4">
              {seccionActiva === "movimientos" && (
                <div className="text-white">
                  <p>Mostrando movimientos recientes...</p>
                </div>
              )}

              {seccionActiva === "auditoria" && (
                <div className="text-white">
                  <p>Revisando auditoría de ingresos y egresos...</p>
                </div>
              )}

              {seccionActiva === "cierre" && (
                <div className="text-white">
                  <p>Mostrando historial de cierres diarios...</p>
                </div>
              )}
            </div>
          </div>
          <AddMovements
            isOpen={modalAddIsOpen}
            onClose={() => setModalAddIsOpen(false)}
          ></AddMovements>
          <ShowMovements
            isOpen={modalShowIsOpen}
            onClose={() => setModalShowIsOpen(false)}
          ></ShowMovements>
        </div>
      </PageTemplate>
    </div>
  );
}

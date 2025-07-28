import { useState } from "react";
import ShowOrders from "./modal-show-orders/modal-show-orders.jsx";

export default function ListOrders() {
  const [modalShowOrdersIsOpen, setModalShowOrdersIsOpen] = useState(false);

  const listOrdenesCompra = [
    {
      id: 1,
      orden: "PO-2025-001",
      proveedor: "TechSupply Corp",
      fecha: "2025-01-15",
      entregaEsperada: "2025-01-25",
      total: "$5500.00",
      estado: "Pendiente",
    },
  ];

  const getStatus = (estado) => {
    const statusMap = {
      Pendiente: { name: "Pendiente", color: "bg-yellow-500" },
      Completado: { name: "Completado", color: "bg-green-500" },
      Cancelado: { name: "Cancelado", color: "bg-red-500" },
      EnProceso: { name: "En Proceso", color: "bg-blue-500" },
    };
    return statusMap[estado] || { name: estado, color: "bg-gray-500" };
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="relative w-full max-w-sm mb-4">
          <input
            type="text"
            placeholder="Buscar órdenes..."
            className="w-full pl-10 pr-4 py-2 text-white rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-sm"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
            />
          </svg>
        </div>
        <div className="w-full overflow-x-auto rounded-lg border border-gray-700 bg-gray-900 text-white p-3">
          <h1 className="text-2xl font-bold mb-1">Órdenes de Compra (1)</h1>

          {/* Encabezado */}
          <div className="grid grid-cols-7 text-sm font-semibold px-4 py-3">
            <div>Orden #</div>
            <div>Proveedor</div>
            <div>Fecha</div>
            <div>Entrega Esperada</div>
            <div>Total</div>
            <div>Estado</div>
            <div className="flex justify-center">Acciones</div>
          </div>

          {/* Contenido dinámico */}
          {listOrdenesCompra.map((orden) => {
            const status = getStatus(orden.estado);
            return (
              <div
                key={orden.id}
                className="grid grid-cols-7 items-center text-white px-4 py-3 border-t border-gray-700 hover:bg-gray-800 transition"
              >
                <div className="truncate font-medium">{orden.orden}</div>
                <div>{orden.proveedor}</div>
                <div>{orden.fecha}</div>
                <div>{orden.entregaEsperada}</div>
                <div className="font-medium">{orden.total}</div>
                <div
                  className={`${status.color} w-fit px-2 text-white text-center font-semibold rounded-lg`}
                >
                  {status.name}
                </div>
                <div className="flex gap-2 justify-center">
                  <button onClick={() => setModalShowOrdersIsOpen(true)}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ShowOrders
        isOpen={modalShowOrdersIsOpen}
        onClose={() => setModalShowOrdersIsOpen(false)}
      ></ShowOrders>
    </>
  );
}

import { useState } from "react";
import ShowOrders from "./modal-show-orders/modal-show-orders.jsx";

export default function ListOrders({ listOrders }) {
  const [modalShowOrdersIsOpen, setModalShowOrdersIsOpen] = useState(false);

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
        <div className="w-full overflow-x-auto rounded-lg border border-gray-700 bg-gray-900 text-white p-3">
          <h1 className="text-2xl font-bold mb-1">Órdenes de Compra (1)</h1>
          <div className="min-w-[680px]">
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
            {listOrders.map((order) => {
              const status = getStatus(order.state_name);
              return (
                <div
                  key={order.id}
                  className="grid grid-cols-7 items-center text-white px-4 py-3 border-t border-gray-700 hover:bg-gray-800 transition"
                >
                  <div className="truncate font-medium">{order.number_order}</div>
                  <div>{order.name_supplier}</div>
                  <div>{order.created_at}</div>
                  <div>{order.order_date}</div>
                  <div className="font-medium">${order.total}</div>
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
      </div>
      <ShowOrders
        isOpen={modalShowOrdersIsOpen}
        onClose={() => setModalShowOrdersIsOpen(false)}
      ></ShowOrders>
    </>
  );
}

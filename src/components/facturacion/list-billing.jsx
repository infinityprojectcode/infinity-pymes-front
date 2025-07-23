import AddBilling from "./modal-add-billing/modal-add-billing.jsx";
import ShowBilling from "./modal-show-billing.jsx/modal-show-billing.jsx";
import { useState } from "react";

export default function ListBilling() {
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalShowIsOpen, setModalShowIsOpen] = useState(false);

  const listBilling = [
    {
      numero: "FAC-2025-001",
      cliente: "Laura Gómez",
      fecha: "2025-01-15",
      vencimiento: "2025-02-15",
      cantidad: 1250000,
      estado: "Pagado",
    },
    {
      numero: "FAC-2025-002",
      cliente: "Andrés Martínez",
      fecha: "2025-01-20",
      vencimiento: "2025-02-20",
      cantidad: 899000,
      estado: "Pendiente",
    },
    {
      numero: "FAC-2025-003",
      cliente: "Camila Rojas",
      fecha: "2025-01-10",
      vencimiento: "2025-02-10",
      cantidad: 2150000,
      estado: "Atrasado",
    },
  ];

  const getStatus = (status) => {
    if (status == "Atrasado") return { name: "Atrasado", color: "bg-red-500" };
    if (status == "Pendiente")
      return { name: "Pendiente", color: "bg-yellow-500" };
    return { name: "Pagado", color: "bg-green-500" };
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-white">
            <h1 className="text-3xl font-bold mb-1">Facturación</h1>
            <p className="text-gray-400 mb-6">
              Crea y gestiona facturas para tus clientes.
            </p>
          </div>
          <button
            onClick={() => setModalAddIsOpen(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded-lg transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <span>Crear factura</span>
          </button>
        </div>
        <div className="relative w-full max-w-sm mb-4">
          <input
            type="text"
            placeholder="Buscar facturas..."
            className="w-full pl-10 pr-4 py-2 text-white rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-sm"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
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
        <div className="w-full overflow-x-auto rounded-lg border border-gray-700  bg-gray-900 text-white p-3">
          <h1 className="text-2xl font-bold mb-1 ">Facturas (3)</h1>
          <div className="grid grid-cols-7 text-sm font-semibold px-4 py-3">
            <div>Factura #</div>
            <div>Cliente</div>
            <div>Fecha</div>
            <div>Fecha de vencimiento</div>
            <div>Cantidad</div>
            <div>Estado</div>
            <div className="flex justify-center">Comportamiento</div>
          </div>

          {listBilling.map((item) => {
            const auxiliar = getStatus(item.estado);
            return (
              <div
                key={item.id}
                className="grid grid-cols-7 items-center text-white px-4 py-3 border-t border-gray-700 hover:bg-gray-800 transition"
              >
                <div className="truncate">{item.numero}</div>
                <div>{item.cliente}</div>
                <div>${item.fecha}</div>
                <div>{item.vencimiento}</div>
                <div>{item.cantidad}</div>
                <div
                  className={`${auxiliar.color} w-fit px-2 text-white text-center font-semibold rounded-lg`}
                >
                  {auxiliar.name}
                </div>
                <div className="flex gap-2 justify-center">
                  <button onClick={() => setModalShowIsOpen(true)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-eye-icon lucide-eye"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-red-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M10 11v6" />
                      <path d="M14 11v6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                      <path d="M3 6h18" />
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AddBilling
        isOpen={modalAddIsOpen}
        onClose={() => setModalAddIsOpen(false)}
      ></AddBilling>
      <ShowBilling
        isOpen={modalShowIsOpen}
        onClose={() => setModalShowIsOpen(false)}
      ></ShowBilling>
    </>
  );
}

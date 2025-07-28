import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";

//IMPORTAR MODALES NECESARIOS

import AddSuppliers from "../../components/suppliers/suppliers/modal-add-suppliers/modal-add-suppliers/modal-add-suppliers.jsx";
import AddOrders from "../../components/suppliers/orders/modal-add-orders/modal-add-orders.jsx";

//IMPORTAR LOS LISTADOS NECESARIOS

import ListOrders from "../../components/suppliers/orders/list-orders.jsx";
import ListSuppliers from "../../components/suppliers/suppliers/list-suppliers.jsx";

import { useState } from "react";
export default function Suppliers() {
  const [modalAddSuppliersIsOpen, setModalAddSuppliersIsOpen] = useState(false);
  const [modalAddOrdersIsOpen, setModalAddOrdersIsOpen] = useState(false);
  const [modalShowOrdersIsOpen, setModalShowOrdersIsOpen] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState("proveedores");

  return (
    <>
      <div className="w-full h-screen flex">
        <Sidebar />
        <PageTemplate>
          <div className="w-full h-full p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              {/* Título y subtítulo */}
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Proveedores
                </h1>
                <p className="text-gray-400 mt-1">
                  Gestion tus proveedores y órdenes de compra.
                </p>
              </div>

              {/* Botones de acción */}
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <button
                  onClick={() => setModalAddSuppliersIsOpen(true)}
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
                  Nuevo Proveedores
                </button>

                <button
                  onClick={() => setModalAddOrdersIsOpen(true)}
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
                  Nueva Orden
                </button>
              </div>
            </div>
            <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-1 flex w-fit shadow">
              <button
                onClick={() => setSeccionActiva("proveedores")}
                className={`p-2 rounded-md text-sm ${
                  seccionActiva === "proveedores"
                    ? "bg-gray-800 text-white"
                    : "bg-transparent text-gray-300"
                }`}
              >
                Proveedores
              </button>
              <button
                onClick={() => setSeccionActiva("ordenes")}
                className={`p-2 rounded-md text-sm ${
                  seccionActiva === "ordenes"
                    ? "bg-gray-800 text-white"
                    : "bg-transparent text-gray-300"
                }`}
              >
                Órdenes de Compra
              </button>
            </div>
            <div className="mt-4">
              {seccionActiva === "proveedores" && <ListSuppliers />}

              {seccionActiva === "ordenes" && <ListOrders />}
            </div>
          </div>
        </PageTemplate>
      </div>

      {/* Modales */}
      <AddSuppliers
        isOpen={modalAddSuppliersIsOpen}
        onClose={() => setModalAddSuppliersIsOpen(false)}
      ></AddSuppliers>
      <AddOrders
        isOpen={modalAddOrdersIsOpen}
        onClose={() => setModalAddOrdersIsOpen(false)}
      ></AddOrders>
    </>
  );
}

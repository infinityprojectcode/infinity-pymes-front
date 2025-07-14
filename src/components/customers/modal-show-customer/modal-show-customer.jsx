import Modal from "react-modal";
import { useState } from "react";

export default function ShowCustomer({ isOpen, onClose, customer }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Agregar Clientes"
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            width: "fit-content",
            height: "fit-content",
            margin: "auto",
            padding: "0",
            border: "none",
            backgroundColor: "transparent",
          },
        }}
      >
        <div className="flex flex-col gap-4 bg-slate-900 text-white p-6 rounded-lg w-[400px]">
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-bold text-2xl">Detalles del cliente</h1>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-red-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col">
              <h3>Nombre de pila</h3>
              <p>{customer?.first_name || "—"}</p>
            </div>
            <div className="flex flex-col">
              <h3>Apellido</h3>
              <p>{customer?.last_name || "—"}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3>Email</h3>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="lucide lucide-mail-icon lucide-mail"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <p>{customer?.email || "—"}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3>Teléfono</h3>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone-icon lucide-phone"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              <p>{customer?.phone || "—"}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3>Dirección</h3>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pin-icon lucide-map-pin"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p>{customer?.direction || "—"}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h3>Total gastado</h3>
            <p className="text-green-500 font-bold text-2xl">
              ${customer?.total_product_price?.toLocaleString() || "—"}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3>Productos comprados</h3>
            <div className="flex flex-wrap gap-2">
              {customer?.products?.length > 0 ? (
                customer.products.map((prod) => (
                  <span className="inline-block px-3 py-1 bg-slate-800 text-white text-sm font-medium rounded-full border border-slate-600">
                    {prod.name}
                  </span>
                ))
              ) : (
                <span>No hay productos</span>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

import Modal from "react-modal";
import { useState } from "react";

export default function AddCustomer({ isOpen, onClose }) {

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
        <div className="bg-slate-900 text-white p-6 rounded-lg w-[400px]">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-semibold text-lg">Agregar nuevo cliente</h1>
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

          {/* Formulario */}
          <form action="" className="space-y-4">
            {/* Nombre */}
            <div className="flex gap-4">
              <div>
                <label className="block mb-1">Nombre de pila</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="John"
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Apellido</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Gomez"
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Categoría */}
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="text"
                name="email"
                placeholder="john.gomez@email.com"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Cantidad */}
            <div>
              <label className="block mb-1">Teléfono</label>
              <input
                type="tel"
                name="phone"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 text-white"
                placeholder="+57 301 356 78 98"
                required
              />
            </div>

            {/* Imagen */}
            <div>
              <label className="block mb-1">Dirección</label>
              <input
                type="text"
                name="direccion"
                placeholder="Calle 45 # 12-30, Bogotá"
                class="border border-gray-400 p-2 rounded w-full"
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Agregar cliente
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

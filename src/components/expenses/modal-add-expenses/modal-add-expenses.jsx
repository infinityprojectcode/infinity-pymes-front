import Modal from "react-modal";
import { useState } from "react";

export default function AddExpenses({ isOpen, onClose }) {
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
        <div className="bg-slate-900 text-white p-6 rounded-lg w-[600px]">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-semibold text-lg">Registrar Nuevo Gasto</h1>
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
          <form className="space-y-4">
            {/* Descripción */}
            <div>
              <h2 className="font-medium mb-2">Descripción</h2>
              <input
                type="text"
                placeholder="Descripción del gasto"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
              />
            </div>

            {/* Categoría y Monto */}
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col">
                <h2 className="font-medium mb-2">Categoría</h2>
                <div className="space-y-2">
                  <select className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2">
                    <option>Seleccionar categoría</option>
                  </select>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-medium mb-2">Monto</h2>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0,00"
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col flex-1">
                <h2 className="font-medium mb-2">Método de Pago</h2>
                <div className="space-y-2">
                  <select className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2">
                    <option>Seleccionar método</option>
                  </select>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-medium mb-2">Proveedor (Opcional)</h2>
                <input
                  type="text"
                  placeholder="Nombre del proveedor"
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                />
              </div>
            </div>

            <div>
              <h2 className="font-medium mb-2">Número de Recibo (Opcional)</h2>
              <input
                type="text"
                placeholder="REC-001"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
              />
            </div>

            {/* Separador */}
            <div className="border-t border-slate-700 my-4"></div>

            {/* Botón */}
            <button
              type="submit"
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Registrar Gasto
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

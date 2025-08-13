import Modal from "react-modal";
import { useState } from "react";

export default function ShowOrders({ isOpen, onClose }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Agregar Clientes"
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            inset: 0, // permite centrar vertical/horizontal
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0",
            border: "none",
            backgroundColor: "transparent",
          },
        }}
      >
        <div className="bg-slate-900 text-white p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-semibold text-lg">Registrar Movimiento</h1>
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
            {/* Tipo de Movimiento */}
            <div>
              <label className="block mb-1">Tipo de Movimiento</label>
              <select className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2">
                <option>Ingreso</option>
                <option>Egreso</option>
              </select>
            </div>

            {/* Monto y Categoría */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1">Monto</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1">Categoría</label>
                <select className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2">
                  <option>Seleccionar</option>
                  {/* otras categorías */}
                </select>
              </div>
            </div>

            {/* Descripción */}
            <div>
              <label className="block mb-1">Descripción</label>
              <textarea
                rows="3"
                placeholder="Descripción del movimiento"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
              />
            </div>

            {/* Referencia y Método */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1">Referencia (Opcional)</label>
                <input
                  type="text"
                  placeholder="FAC-001, REC-001, etc."
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1">Método de Pago</label>
                <select className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2">
                  <option>Seleccionar</option>
                  {/* métodos de pago */}
                </select>
              </div>
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Registrar Movimiento
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

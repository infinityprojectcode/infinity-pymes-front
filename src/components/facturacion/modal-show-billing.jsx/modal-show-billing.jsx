import Modal from "react-modal";
import { useState } from "react";

export default function ShowBilling({ isOpen, onClose }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Agregar Inventario"
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
        <div className="bg-slate-900 text-white p-6 rounded-lg w-fit">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-bold text-lg">Detalles de la factura</h1>
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

          <div className="text-white flex flex-col gap-4">
            {/* Encabezado */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-400">Número de factura</p>
                <p className="font-semibold">FAC-2025-001</p>
              </div>
              <div>
                <p className="text-slate-400">Cliente</p>
                <p className="font-semibold">Laura Gómez</p>
              </div>
              <div>
                <p className="text-slate-400">Fecha</p>
                <p className="font-semibold">2025-01-15</p>
              </div>
              <div>
                <p className="text-slate-400">Fecha de vencimiento</p>
                <p className="font-semibold">2025-02-15</p>
              </div>
            </div>
            <div>
              <p className="text-slate-300 font-medium mb-2">Items</p>
              <div className="flex justify-between mt-4">
                <div>
                  <p className="font-medium">Mouse gamer</p>
                  <p className="text-slate-400 text-sm">Cantidad: 1 × $99000</p>
                </div>
                <p className="font-medium">$99000</p>
              </div>
            </div>

            {/* Total */}
            <hr className="border-slate-700 my-2" />
            <div className="flex justify-between items-center">
              <p className="text-slate-300">Importe total:</p>
              <p className="text-2xl font-bold text-white">$1250000</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

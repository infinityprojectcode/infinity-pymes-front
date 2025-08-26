import Modal from "react-modal";
import { useState } from "react";

export default function CloseDailyMovements({ isOpen, onClose}) {
  const [conteo, setConteo] = useState("");
  const [notas, setNotas] = useState("");

  const ingresos = 0.0;
  const egresos = 0.0;
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
        <div className="flex flex-col gap-4 bg-slate-900 text-white p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-bold text-2xl">Cierre Diario de Caja</h1>
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

          {/* Ingresos y egresos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 rounded-lg p-4">
              <h3 className="text-sm text-slate-400">Ingresos del Día</h3>
              <p className="text-green-500 font-bold text-xl">
                ${ingresos.toFixed(2)}
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <h3 className="text-sm text-slate-400">Egresos del Día</h3>
              <p className="text-red-500 font-bold text-xl">
                ${egresos.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Conteo de efectivo */}
          <div className="flex flex-col gap-1.5">
            <h3 className="text-sm font-semibold text-white">Conteo de Efectivo</h3>
            <input
              type="number"
              value={conteo}
              onChange={(e) => setConteo(e.target.value)}
              placeholder="Monto contado en caja"
              className="bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Notas opcionales */}
          <div className="flex flex-col gap-1.5">
            <h3 className="text-sm font-semibold text-white">Notas (Opcional)</h3>
            <textarea
              value={notas}
              onChange={(e) => setNotas(e.target.value)}
              placeholder="Observaciones del cierre"
              rows={3}
              className="bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-white placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Botón de acción */}
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md mt-2 transition-all"
            onClick={() => {
              // aquí va la lógica para realizar el cierre
              console.log("Realizar cierre", { conteo, notas });
            }}
          >
            Realizar Cierre
          </button>
        </div>
      </Modal>
    </div>
  );
}

import Modal from "react-modal";
import { useState } from "react";

export default function AddAppointment({ isOpen, onClose }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Programar Cita"
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
            <h1 className="font-semibold text-lg">Programar Nueva Cita</h1>
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
            {/* Título */}
            <div>
              <label className="block mb-1">Título</label>
              <input
                type="text"
                placeholder="Consulta con cliente"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
              />
            </div>

            {/* Cliente */}
            <div>
              <label className="block mb-1">Cliente</label>
              <select className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2">
                <option>Seleccionar cliente</option>
                {/* Puedes mapear aquí los clientes */}
              </select>
            </div>

            {/* Fecha y Hora */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1">Fecha</label>
                <input
                  type="date"
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1">Hora</label>
                <input
                  type="time"
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                />
              </div>
            </div>

            {/* Duración */}
            <div>
              <label className="block mb-1">Duración (minutos)</label>
              <select className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2">
                <option>15 minutos</option>
                <option>30 minutos</option>
                <option>1 hora</option>
                <option>2 horas</option>
              </select>
            </div>

            {/* Notas */}
            <div>
              <label className="block mb-1">Notas (Opcional)</label>
              <textarea
                rows="3"
                placeholder="Notas adicionales sobre la cita"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Programar Cita
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

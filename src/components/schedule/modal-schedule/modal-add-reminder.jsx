import Modal from "react-modal";
import { useState } from "react";
import { X } from "lucide-react";

export default function AddReminder({ isOpen, onClose }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Crear Recordatorio"
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            inset: 0,
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
            <h1 className="font-semibold text-lg">Crear Recordatorio</h1>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-red-400 cursor-pointer"
            >
              <X />
            </button>
          </div>

          {/* Formulario */}
          <form className="space-y-4">
            {/* Título */}
            <div>
              <label className="block mb-1">Título</label>
              <input
                type="text"
                placeholder="Título del recordatorio"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
              />
            </div>

            {/* Descripción */}
            <div>
              <label className="block mb-1">Descripción</label>
              <textarea
                rows="3"
                placeholder="Descripción detallada"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
              />
            </div>

            {/* Fecha y Hora */}
            <div className="flex flex-col md:flex-row gap-4">
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

            {/* Tipo y Prioridad */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1">Tipo</label>
                <select className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2">
                  <option>Otro</option>
                  <option>Reunión</option>
                  <option>Personal</option>
                  <option>Trabajo</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block mb-1">Prioridad</label>
                <select className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2">
                  <option>Alta</option>
                  <option>Media</option>
                  <option>Baja</option>
                </select>
              </div>
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer"
            >
              Crear Recordatorio
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

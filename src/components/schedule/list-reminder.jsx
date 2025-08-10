import { useState } from "react";
import { Bell } from "lucide-react";

export default function ListReminder() {
  const recordatorios = [
    {
      id: 1,
      hora: "09:00",
      fecha: "2025-01-25",
      titulo: "Pago pendiente - Factura #001",
      descripcion: "Recordar cobro de factura vencida",
      prioridad: "Alta",
      tipo: "Pago",
      colorPrioridad: "bg-red-600",
    },
    {
      id: 2,
      hora: "10:00",
      fecha: "2025-01-28",
      titulo: "Renovar licencia de software",
      descripcion: "La licencia vence el 30 de enero",
      prioridad: "Media",
      tipo: "Tarea",
      colorPrioridad: "bg-yellow-600",
    },
  ];

  return (
    <div className="bg-[#0d1117] p-4 rounded-lg">
      <h2 className="text-lg font-semibold text-white mb-2">Recordatorios</h2>

      {recordatorios.map((item) => (
        <div
          key={item.id}
          className="bg-[#1c2431] rounded-lg p-4 mb-2 flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between"
        >
          <div className="flex items-center gap-4">
            {/* Icono */}
            <div className="text-gray-400 mt-1 flex flex-col items-center">
              <Bell className="w-4 h-4" />
              <span className="text-white font-semibold">{item.hora}</span>
              <span className="text-sm">{item.fecha}</span>
            </div>

            {/* Info principal */}
            <div className="flex flex-col gap-1">
              <p className="text-md text-white font-semibold">{item.titulo}</p>
              <p className="text-sm text-gray-400 mb-1">{item.descripcion}</p>
            </div>
          </div>

          {/* Etiquetas */}
          <div className="flex items-center">
            <div className="flex gap-1">
            <span
              className={`${item.colorPrioridad} text-white text-sm px-2 py-0.5 rounded-full font-semibold text-center`}
            >
              {item.prioridad}
            </span>
            <span className="bg-transparent text-white text-sm px-2 py-0.5 rounded-full border border-white text-center">
              {item.tipo}
            </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

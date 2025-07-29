import { useState } from "react";
import { Download, Share2 } from "lucide-react";
import { Upload } from "lucide-react";

export default function ListRespaldos() {
  const respaldoList = [
    {
      fecha: "2025-01-24 02:00",
      tamano: "2.4 GB",
      tipo: "Automático",
      estado: "Completado",
    },
    {
      fecha: "2025-01-23 15:30",
      tamano: "2.3 GB",
      tipo: "Manual",
      estado: "Completado",
    },
    {
      fecha: "2025-01-23 02:00",
      tamano: "2.3 GB",
      tipo: "Automático",
      estado: "Fallido",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col w-full bg-[#0d1117] border border-gray-800 rounded-lg p-6 gap-4">
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-database"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
            <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
          </svg>
          <h1 className="text-2xl font-bold mb-1 text-white">
            Configuración de Respaldos
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Columna izquierda */}
          <div className="flex-1 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white font-semibold">Respaldo Automático</p>
                <p className="text-sm text-gray-400">
                  Crear respaldos automáticamente
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition-all duration-200"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-200 peer-checked:translate-x-5"></div>
              </label>
            </div>

            <div className="flex flex-col text-white gap-1">
              <h3 className="font-semibold text-md">Frecuencia de Respaldo</h3>
              <select className="bg-[#0d1117] border border-gray-800 rounded-lg py-2 px-3 focus:outline-none">
                <option>Diario</option>
                <option>Semanal</option>
                <option>Mensual</option>
              </select>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="flex flex-1 flex-col gap-4">
            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition">
              <Download size={16}/>
              Crear Respaldo Manual
            </button>

            <button className="flex items-center justify-center gap-2 border border-gray-600 text-white rounded-lg py-2 px-4 hover:bg-gray-800 transition">
              <Upload size={16}/>
              Restaurar desde Archivo
            </button>
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto rounded-lg border border-gray-700 bg-gray-900 text-white p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold">Historial de Respaldos</h1>
        </div>

        {/* Encabezados */}
        <div className="grid grid-cols-5 text-md font-semibold px-4 py-3 text-white">
          <div>Fecha y Hora</div>
          <div>Tamaño</div>
          <div>Tipo</div>
          <div>Estado</div>
          <div className="flex justify-center">Acciones</div>
        </div>

        {/* Datos de respaldos */}
        {respaldoList.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-5 items-center px-4 py-3 border-t border-gray-700 hover:bg-gray-800 transition"
          >
            <div>{item.fecha}</div>
            <div>{item.tamano}</div>
            <div>
              <span
                className={`text-md font-medium px-3 rounded-full flex w-fit items-center justify-center ${
                  item.tipo === "Automático" ? "bg-green-800" : "bg-blue-800"
                }`}
              >
                {item.tipo}
              </span>
            </div>
            <div>
              <span
                className={`text-md font-medium px-3 rounded-full flex w-fit items-center justify-center ${
                  item.estado === "Completado" ? "bg-green-800" : "bg-red-800"
                }`}
              >
                {item.estado}
              </span>
            </div>
            <div className="flex justify-center gap-3">
              <button>
                <Download
                  size={16}
                  className="text-white cursor-pointer hover:text-blue-400"
                />
              </button>
              <button>
                <Upload size={16} className="text-blue-400 hover:text-white cursor-pointer" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

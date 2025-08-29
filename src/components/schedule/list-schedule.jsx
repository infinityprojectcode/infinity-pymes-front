import AddAppointment from "@fragments/schedule/modal-schedule/modal-add-appointment.jsx";
import AddReminder from "@fragments/schedule/modal-schedule/modal-add-reminder.jsx";
import { List, ListRestart, Bell } from "lucide-react";
import { useState } from "react";

export default function ListSchedule() {
  const [modalAddAppointmentIsOpen, setModalAddAppointmentIsOpen] =
    useState(false);
  const [modalAddReminderIsOpen, setModalAddReminderIsOpen] = useState(false);
  const [sectionActiva, setSectionActiva] = useState("citas");

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
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        {/* Título y subtítulo */}
        <div>
          <h1 className="text-3xl font-bold text-white">
            Calendario y Recordatorios
          </h1>
          <p className="text-gray-400 mt-1">
            Gestiona citas, recordatorios y fechas importantes.
          </p>
        </div>

        {/* Botones de acción */}
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <button
            onClick={() => setModalAddAppointmentIsOpen(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Nueva Cita
          </button>

          <button
            onClick={() => setModalAddReminderIsOpen(true)}
            className="flex items-center gap-2 border border-gray-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-800"
          >
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
              className="lucide lucide-bell-icon lucide-bell"
            >
              <path d="M10.268 21a2 2 0 0 0 3.464 0" />
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
            </svg>
            Nuevo Recordatorio
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center bg-[#0d1117] border border-gray-800 rounded-lg p-4 mb-4 w-full gap-4">
        {/* Fecha */}
        <div className="flex items-center gap-2">
          <label htmlFor="fecha" className="text-sm text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3M16 7V3M4 11h16M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z"
              />
            </svg>
          </label>
          <input
            id="fecha"
            type="date"
            className="bg-slate-800 text-white border border-gray-700 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2"
            value="2025-07-25"
          />
        </div>

        {/* Resumen */}
        <div className="font-semibold text-gray-300 mt-2 md:mt-0">
          0 citas, 0 recordatorios
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Citas Hoy */}
        <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex justify-between items-center h-full shadow">
          <div>
            <span className="text-sm text-gray-400">Citas Hoy</span>
            <h2 className="text-2xl font-bold text-blue-500 mt-1">0</h2>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3M16 7V3M4 11h16M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Recordatorios Pendientes */}
        <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex justify-between items-center h-full shadow">
          <div>
            <span className="text-sm text-gray-400">
              Recordatorios Pendientes
            </span>
            <h2 className="text-2xl font-bold text-yellow-400 mt-1">0</h2>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M12 19a7 7 0 100-14 7 7 0 000 14z"
            />
          </svg>
        </div>

        {/* Pagos Pendientes */}
        <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex justify-between items-center h-full shadow">
          <div>
            <span className="text-sm text-gray-400">Pagos Pendientes</span>
            <h2 className="text-2xl font-bold text-red-500 mt-1">1</h2>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z"
            />
          </svg>
        </div>
      </div>

      <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-1 flex w-fit shadow mt-4">
        <button
          onClick={() => setSectionActiva("citas")}
          className={`p-2 rounded-md text-sm ${
            sectionActiva === "citas"
              ? "bg-gray-800 text-white"
              : "bg-transparent text-gray-300"
          }`}
        >
          Citas
        </button>
        <button
          onClick={() => setSectionActiva("recordatorios")}
          className={`p-2 rounded-md text-sm ${
            sectionActiva === "recordatorios"
              ? "bg-gray-800 text-white"
              : "bg-transparent text-gray-300"
          }`}
        >
          Recordatorios
        </button>
      </div>

      <div className="mt-4">
        {sectionActiva === "citas" && (
          <div className="bg-[#0d1117] text-white rounded-lg p-4 mt-4">
            <h2 className="text-lg font-semibold mb-6">
              Citas para 2025-07-25
            </h2>
            <div className="flex items-center justify-center">
              <p className="text-center text-md text-gray-400">
                No hay citas programadas para esta fecha
              </p>
            </div>
          </div>
        )}

        {sectionActiva === "recordatorios" && (
          <div className="bg-[#0d1117] p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-white mb-2">
              Recordatorios
            </h2>

            {recordatorios.map((item) => (
              <div
                key={item.id}
                className="bg-[#1c2431] rounded-lg p-4 mb-2 flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between"
              >
                <div className="flex items-center gap-4">
                  {/* Icono */}
                  <div className="text-gray-400 mt-1 flex flex-col items-center">
                    <Bell className="w-4 h-4" />
                    <span className="text-white font-semibold">
                      {item.hora}
                    </span>
                    <span className="text-sm">{item.fecha}</span>
                  </div>

                  {/* Info principal */}
                  <div className="flex flex-col gap-1">
                    <p className="text-md text-white font-semibold">
                      {item.titulo}
                    </p>
                    <p className="text-sm text-gray-400 mb-1">
                      {item.descripcion}
                    </p>
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
        )}
      </div>

      {/* Modales */}
      <AddAppointment
        isOpen={modalAddAppointmentIsOpen}
        onClose={() => setModalAddAppointmentIsOpen(false)}
      ></AddAppointment>
      <AddReminder
        isOpen={modalAddReminderIsOpen}
        onClose={() => setModalAddReminderIsOpen(false)}
      ></AddReminder>
    </>
  );
}

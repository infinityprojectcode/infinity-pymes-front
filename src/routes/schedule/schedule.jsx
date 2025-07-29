import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";

//IMPORTAR MODALES NECESARIOS

import AddAppointment from "../../components/schedule/modal-add-appointment/modal-add-appointment.jsx";
import AddReminder from "../../components/schedule/modal-add-reminder/modal-add-reminder.jsx";

//IMPORTAR LOS LISTADOS NECESARIOS

import ListAppointment from "../../components/schedule/list-appointment.jsx";
import ListReminder from "../../components/schedule/list-reminder.jsx";

import { useState } from "react";
import { List, ListRestart } from "lucide-react";
export default function Schedule() {
  const [modalAddAppointmentIsOpen, setModalAddAppointmentIsOpen] =
    useState(false);
  const [modalAddReminderIsOpen, setModalAddReminderIsOpen] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState("citas");

  return (
    <>
      <div className="w-full h-screen flex">
        <Sidebar />
        <PageTemplate>
          <div className="w-full h-full p-8">
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-bell-icon lucide-bell"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  <span className="text-sm text-gray-400">
                    Pagos Pendientes
                  </span>
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
                onClick={() => setSeccionActiva("citas")}
                className={`p-2 rounded-md text-sm ${
                  seccionActiva === "citas"
                    ? "bg-gray-800 text-white"
                    : "bg-transparent text-gray-300"
                }`}
              >
                Citas
              </button>
              <button
                onClick={() => setSeccionActiva("recordatorios")}
                className={`p-2 rounded-md text-sm ${
                  seccionActiva === "recordatorios"
                    ? "bg-gray-800 text-white"
                    : "bg-transparent text-gray-300"
                }`}
              >
                Recordatorios
              </button>
            </div>

            <div className="mt-4">
              {seccionActiva === "citas" && <ListAppointment />}

              {seccionActiva === "recordatorios" && <ListReminder />}
            </div>
          </div>
        </PageTemplate>
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

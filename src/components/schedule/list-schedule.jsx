import AddAppointment from "@fragments/schedule/modal-schedule/modal-add-appointment.jsx";
import AddReminder from "@fragments/schedule/modal-schedule/modal-add-reminder.jsx";
import {
  Bell,
  Plus,
  Calendar,
  CalendarSearch,
  CircleAlert,
} from "lucide-react";
import { useState } from "react";

export default function ListSchedule() {
  const [addAppointmentIsOpen, setAddAppointmentIsOpen] = useState(false);
  const [addReminderIsOpen, setAddReminderIsOpen] = useState(false);
  const [sectionActiva, setSectionActiva] = useState("citas");

  const reminders = [
    {
      id: 1,
      hour: "09:00",
      date: "2025-01-25",
      title: "Pago pendiente - Factura #001",
      description: "Recordar cobro de factura vencida",
      priority: "Alta",
      type: "Pago",
    },
    {
      id: 2,
      hour: "10:00",
      date: "2025-01-28",
      title: "Renovar licencia de software",
      description: "La licencia vence el 30 de enero",
      priority: "Media",
      type: "Tarea",
    },
    {
      id: 3,
      hour: "10:00",
      date: "2025-01-28",
      title: "Renovar licencia de software",
      description: "La licencia vence el 30 de enero",
      priority: "Baja",
      type: "Tarea",
    },
  ];

  const getStatusReminders = (status) => {
    if (status == "Baja")
      return {
        name: "Baja",
        bg_color: "bg-green-600",
      };
    if (status == "Media")
      return {
        name: "Media",
        bg_color: "bg-yellow-600",
      };
    return {
      name: "Alta",
      bg_color: "bg-red-600",
    };
  };

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
            onClick={() => setAddAppointmentIsOpen(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md cursor-pointer"
          >
            <Plus className="h-4 w-4" />
            Nueva Cita
          </button>

          <button
            onClick={() => setAddReminderIsOpen(true)}
            className="flex items-center gap-2 border border-gray-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer"
          >
            <Bell className="h-4 w-4" />
            Nuevo Recordatorio
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center bg-[#0d1117] border border-gray-800 rounded-lg p-4 mb-4 w-full gap-4">
        {/* Fecha */}
        <div className="flex items-center gap-2">
          <label htmlFor="fecha" className="text-sm text-gray-400">
            <CalendarSearch className="h-5 w-5 text-gray-400" />
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
          <Calendar className="h-6 w-6 text-blue-500" />
        </div>

        {/* Recordatorios Pendientes */}
        <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex justify-between items-center h-full shadow">
          <div>
            <span className="text-sm text-gray-400">
              Recordatorios Pendientes
            </span>
            <h2 className="text-2xl font-bold text-yellow-400 mt-1">0</h2>
          </div>
          <CircleAlert className="h-6 w-6 text-yellow-400" />
        </div>

        {/* Pagos Pendientes */}
        <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex justify-between items-center h-full shadow">
          <div>
            <span className="text-sm text-gray-400">Pagos Pendientes</span>
            <h2 className="text-2xl font-bold text-red-500 mt-1">0</h2>
          </div>
          <CircleAlert className="h-6 w-6 text-red-500" />
        </div>
      </div>

      <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-1 flex w-fit shadow mt-4">
        <button
          onClick={() => setSectionActiva("citas")}
          className={`p-2 rounded-md text-sm mr-[4px] cursor-pointer ${
            sectionActiva === "citas"
              ? "bg-gray-800 text-white"
              : "bg-transparent hover:bg-gray-900 text-gray-300"
          }`}
        >
          Citas
        </button>
        <button
          onClick={() => setSectionActiva("recordatorios")}
          className={`p-2 rounded-md text-sm cursor-pointer ${
            sectionActiva === "recordatorios"
              ? "bg-gray-800 text-white"
              : "bg-transparent hover:bg-gray-900 text-gray-300"
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

            {reminders.map((item) => {
              const auxiliar = getStatusReminders(item.priority);
              return (
                <div
                  key={item.id}
                  className="bg-[#1c2431] rounded-lg p-4 mb-2 flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between"
                >
                  <div className="flex items-center gap-4">
                    {/* Icono */}
                    <div className="text-gray-400 mt-1 flex flex-col items-center">
                      <Bell className="w-4 h-4" />
                      <span className="text-white font-semibold">
                        {item.hour}
                      </span>
                      <span className="text-sm">{item.date}</span>
                    </div>

                    {/* Info principal */}
                    <div className="flex flex-col gap-1">
                      <p className="text-md text-white font-semibold">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-400 mb-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Etiquetas */}
                  <div className="flex items-center">
                    <div className="flex gap-1">
                      <span
                        className={`${auxiliar.bg_color} text-white text-sm px-2 py-0.5 rounded-full font-semibold text-center`}
                      >
                        {auxiliar.name}
                      </span>
                      <span className="bg-transparent text-white text-sm px-2 py-0.5 rounded-full border border-white text-center">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modales */}
      <AddAppointment
        isOpen={addAppointmentIsOpen}
        onClose={() => setAddAppointmentIsOpen(false)}
      ></AddAppointment>
      <AddReminder
        isOpen={addReminderIsOpen}
        onClose={() => setAddReminderIsOpen(false)}
      ></AddReminder>
    </>
  );
}

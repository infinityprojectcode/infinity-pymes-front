import { useAppContext } from "@context/app/app-provider.jsx";
import { useAuth } from "@context/auth/auth-provider";
import AddAppointment from "@fragments/schedule/modal-schedule/modal-add-appointment.jsx";
import AddReminder from "@fragments/schedule/modal-schedule/modal-add-reminder.jsx";
import {
  Bell,
  Plus,
  Calendar,
  CalendarSearch,
  TriangleAlert,
  Clock,
  User,
} from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ListSchedule() {
  const context = useAppContext();
  const contextAuth = useAuth();
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const [addAppointmentIsOpen, setAddAppointmentIsOpen] = useState(false);
  const [addReminderIsOpen, setAddReminderIsOpen] = useState(false);
  const [sectionActiva, setSectionActiva] = useState("citas");
  const [scheduleReminders, setScheduleReminders] = useState([]);
  const [scheduleAppointments, setScheduleAppointments] = useState([]);
  const [appointmentsToday, setAppointmentsToday] = useState([]);

  const dateToday = new Date();
  const fullDate = `${dateToday.getFullYear()}-${(dateToday.getMonth() + 1).toString().padStart(2, "0")}-${dateToday.getDate().toString().padStart(2, "0")}`;
  const [filterDate, setFilterDate] = useState(fullDate);

  function getScheduleReminders() {
    axios
      .get(`${urlApi}schedule/g/schedule-reminders`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        params: {
          business_id: contextAuth.user.business_id,
          user_id: contextAuth.user.id,
        },
      })
      .then((response) => {
        setScheduleReminders(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getScheduleAppointments() {
    axios
      .get(`${urlApi}schedule/g/schedule-appointments`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        params: {
          business_id: contextAuth.user.business_id,
          user_id: contextAuth.user.id,
          date: filterDate,
        },
      })
      .then((response) => {
        setScheduleAppointments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getAppointmentsToday() {
    axios
      .get(`${urlApi}schedule/g/schedule-appointments-today`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        params: {
          business_id: contextAuth.user.business_id,
          user_id: contextAuth.user.id,
        },
      })
      .then((response) => {
        setAppointmentsToday(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getScheduleReminders();
    getAppointmentsToday();
  }, []);

  useEffect(() => {
    getScheduleAppointments();
  }, [filterDate]);

  const getStatusReminders = (status) => {
    if (status == "Bajo")
      return {
        name: "Baja",
        bg_color: "bg-green-600",
      };
    if (status == "Medio")
      return {
        name: "Media",
        bg_color: "bg-yellow-600",
      };
    return {
      name: "Alta",
      bg_color: "bg-red-600",
    };
  };

  const getStatusTime = (status) => {
    const [hourStr, minuteStr] = status.split(":");
    let hour = parseInt(hourStr, 10);
    const minutes = minuteStr;

    let time_system = "AM";
    if (hour >= 12) {
      time_system = "PM";
      if (hour > 12) hour -= 12;
    }
    if (hour === 0) {
      hour = 12;
    }

    return { hour, minutes, time_system };
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "scheduled":
        return (
          <div className="bg-blue-600 font-semibold rounded-lg p-1">
            Programada
          </div>
        );
      case "completed":
        return (
          <div className="bg-green-600 font-semibold rounded-lg p-1">
            Completada
          </div>
        );
      case "cancelled":
        return (
          <div className="bg-red-600 font-semibold rounded-lg p-1">
            Cancelada
          </div>
        );
    }
  };

  const getStatusTimeMinutes = (status) => {
    const hours = Math.floor(status / 60);
    const minutes = status % 60;

    if (hours === 0) return `${minutes}min`;

    const displayHours = hours > 12 ? hours - 12 : hours;
    return minutes > 0 ? `${displayHours}h ${minutes}min` : `${displayHours}h`;
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
            value={filterDate || ""}
            onChange={(e) => setFilterDate(e.target.value)}
          />

          <button
            type="date"
            className="bg-slate-800 text-white border border-gray-700 rounded px-3 py-1 text-sm hover:bg-slate-700 cursor-pointer"
            onClick={() => setFilterDate(null)}
          >
            Mostrar Todos
          </button>
        </div>

        {/* Resumen */}
        <div className="font-semibold text-gray-300 mt-2 md:mt-0">
          {scheduleAppointments.length} citas, {scheduleReminders.length}{" "}
          recordatorios
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Citas Hoy */}
        <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex justify-between items-center h-full shadow">
          <div>
            <span className="text-sm text-gray-400">Citas Hoy</span>
            <h2 className="text-2xl font-bold text-blue-500 mt-1">
              {appointmentsToday.total_appointments_today}
            </h2>
          </div>
          <Calendar className="h-6 w-6 text-blue-500" />
        </div>

        {/* Recordatorios Pendientes */}
        <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex justify-between items-center h-full shadow">
          <div>
            <span className="text-sm text-gray-400">
              Recordatorios Pendientes
            </span>
            <h2 className="text-2xl font-bold text-yellow-400 mt-1">
              {scheduleReminders.length}
            </h2>
          </div>
          <Bell className="h-6 w-6 text-yellow-400" />
        </div>

        {/* Pagos Pendientes */}
        <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex justify-between items-center h-full shadow">
          <div>
            <span className="text-sm text-gray-400">Pagos Pendientes</span>
            <h2 className="text-2xl font-bold text-red-500 mt-1">0</h2>
          </div>
          <TriangleAlert className="h-6 w-6 text-red-500" />
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
            <h2 className="flex text-lg font-semibold mb-6">
              {filterDate === null ? (
                <span>Todas las citas:</span>
              ) : (
                <>
                  <span className="pr-1">Citas para:</span>
                  <span>{filterDate === fullDate ? "Hoy" : filterDate}</span>
                </>
              )}
            </h2>

            <div>
              {scheduleAppointments.length === 0 ? (
                <p className="text-center text-md text-gray-400 py-8">
                  No hay citas programadas para esta fecha
                </p>
              ) : (
                <div className="space-y-4">
                  {scheduleAppointments.map((item) => {
                    const auxiliar = getStatusTime(item.time);
                    return (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-4 bg-gray-800 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex flex-col items-center">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-sm font-medium text-gray-100">
                              {auxiliar.hour}:{auxiliar.minutes}{" "}
                              {auxiliar.time_system}
                            </span>
                            <span className="text-sm text-gray-400">
                              {item.date}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-100">
                              {item.title}
                            </h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <User className="h-3 w-3 text-gray-400" />
                              <span className="text-sm text-gray-400">
                                {item.customer}
                              </span>
                              <span className="text-sm text-gray-400">
                                • Duración:{" "}
                                {getStatusTimeMinutes(item.duration)}
                              </span>
                            </div>
                            {item.notes && (
                              <p className="text-xs text-gray-500 mt-1">
                                {item.notes}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(item.status)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {sectionActiva === "recordatorios" && (
          <div className="bg-[#0d1117] p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-white mb-2">
              Recordatorios
            </h2>

            {scheduleReminders.map((item) => {
              const auxiliar = getStatusReminders(item.priority);
              const auxiliar_time = getStatusTime(item.time);
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
                        {auxiliar_time.hour}:{auxiliar_time.minutes}{" "}
                        {auxiliar_time.time_system}
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
        urlApi={urlApi}
        apiKey={apiKey}
        contextAuth={contextAuth}
        refresh={() => getScheduleAppointments()}
      ></AddAppointment>
      <AddReminder
        isOpen={addReminderIsOpen}
        onClose={() => setAddReminderIsOpen(false)}
        urlApi={urlApi}
        apiKey={apiKey}
        contextAuth={contextAuth}
        refresh={() => getScheduleReminders()}
      ></AddReminder>
    </>
  );
}

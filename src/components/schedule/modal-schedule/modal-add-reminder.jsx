import Modal from "react-modal";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

export default function AddReminder({
  isOpen,
  onClose,
  urlApi,
  apiKey,
  contextAuth,
  refresh,
}) {
  const [scheduleReminderTypes, setScheduleReminderTypes] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [typeId, setTypeId] = useState("");
  const [priority, setPriority] = useState("Bajo");

  function getScheduleReminderTypes() {
    axios
      .get(`${urlApi}schedule/g/schedule-reminders-types`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setScheduleReminderTypes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function handleAddScheduleReminder() {
    const data_schedule_reminder = {
      title: title,
      description: description,
      date: date,
      time: time,
      type_id: typeId,
      priority: priority,
      business_id: contextAuth.user.business_id,
      user_id: contextAuth.user.id,
    };

    toast.promise(
      axios
        .post(
          `${urlApi}schedule/i/schedule-reminders`,
          data_schedule_reminder,
          {
            headers: {
              "Content-Type": "application/json",
              "api-key": apiKey,
            },
          }
        )
        .then((response) => {
          if (response.data.success) {
            setTitle("");
            setDescription("");
            setDate("");
            setTime("");
            setTypeId("");
            setPriority("Bajo");
            // setLoading(false);
            refresh();
            onClose();
            return "Recordatorio agregado con éxito";
          } else {
            throw new Error(
              "Error al agregar el recordatorio: " + response.data.message
            );
          }
        }),
      {
        loading: "Guardando cambios...",
        success: (msg) => msg,
        error: (err) => err.message || "Error en la solicitud de guardado",
      }
    );
  }

  useEffect(() => {
    getScheduleReminderTypes();
  }, []);

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
          <div className="space-y-4">
            {/* Título */}
            <div>
              <label className="block mb-1">Título</label>
              <input
                type="text"
                placeholder="Título del recordatorio"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Descripción */}
            <div>
              <label className="block mb-1">Descripción</label>
              <textarea
                rows="3"
                placeholder="Descripción detallada"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            {/* Fecha y Hora */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block mb-1">Fecha</label>
                <input
                  type="date"
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1">Hora</label>
                <input
                  type="time"
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Tipo y Prioridad */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1">Tipo</label>
                <select
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                  value={typeId}
                  onChange={(e) => setTypeId(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Seleccionar tipo
                  </option>
                  {scheduleReminderTypes.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block mb-1">Prioridad</label>
                <select
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Seleccionar prioridad
                  </option>
                  <option value={"Bajo"}>Baja</option>
                  <option value={"Medio"}>Media</option>
                  <option value={"Alto"}>Alta</option>
                </select>
              </div>
            </div>

            {/* Botón */}
            <button
              onClick={() => handleAddScheduleReminder()}
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer"
            >
              Crear Recordatorio
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

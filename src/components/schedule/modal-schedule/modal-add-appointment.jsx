import Modal from "react-modal";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

export default function AddAppointment({
  isOpen,
  onClose,
  urlApi,
  apiKey,
  contextAuth,
  refresh,
}) {
  const [title, setTitle] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");

  const [customers, setCustomers] = useState([]);

  function getCustomers() {
    axios
      .get(`${urlApi}customers/g/customers`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        params: { business_id: contextAuth.user.business_id },
      })
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function handleAddScheduleAppointment() {
    const data_schedule_appointment = {
      title: title,
      customer_id: customerId,
      date: date,
      time: time,
      status: "scheduled",
      duration: duration,
      notes: notes,
      business_id: contextAuth.user.business_id,
      user_id: contextAuth.user.id,
    };

    toast.promise(
      axios
        .post(
          `${urlApi}schedule/i/schedule-appointments`,
          data_schedule_appointment,
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
            setCustomerId("");
            setDate("");
            setTime("");
            setDuration("30");
            setNotes("");
            // setLoading(false);
            refresh();
            onClose();
            return "Cita agregada con éxito";
          } else {
            throw new Error(
              "Error al agregar la cita: " + response.data.message
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
    getCustomers();
  }, []);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Programar Cita"
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
            <h1 className="font-semibold text-lg">Programar Nueva Cita</h1>
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
                placeholder="Consulta con cliente"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Cliente */}
            <div>
              <label className="block mb-1">Cliente</label>
              <select
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
              >
                <option value={""} disabled>
                  Seleccionar cliente
                </option>
                {customers.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name} {cat.lastname}
                  </option>
                ))}
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
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1">Hora</label>
                <input
                  type="time"
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>

            {/* Duración */}
            <div>
              <label className="block mb-1">Duración (minutos)</label>
              <select
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value={"15"}>15 minutos</option>
                <option value={"30"}>30 minutos</option>
                <option value={"60"}>1 hora</option>
                <option value={"120"}>2 horas</option>
              </select>
            </div>

            {/* Notas */}
            <div>
              <label className="block mb-1">Notas (Opcional)</label>
              <textarea
                rows="3"
                placeholder="Notas adicionales sobre la cita"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            {/* Botón */}
            <button
              onClick={() => handleAddScheduleAppointment()}
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer"
            >
              Programar Cita
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

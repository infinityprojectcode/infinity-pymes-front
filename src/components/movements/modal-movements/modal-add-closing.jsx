import Modal from "react-modal";
import { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

export default function CloseDailyMovements({
  isOpen,
  onClose,
  urlApi,
  apiKey,
  contextAuth,
  income,
  expenses,
  refresh,
}) {
  const [isAddModal, setIsAddModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");

  async function handleAddDailyClosure() {
    const data_daily_closure = {
      business_id: contextAuth.user.business_id,
      closing_amount: amount,
      notes: notes,
      closed_by: contextAuth.user.id,
    };

    toast.promise(
      axios
        .post(`${urlApi}cash-register/i/daily-closures`, data_daily_closure, {
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
        })
        .then((response) => {
          if (response.data.success) {
            setAmount("");
            setNotes("");
            // setLoading(false);
            refresh();
            onClose();
            return "Producto agregado con éxito";
          } else {
            throw new Error(
              "Error al agregar el producto: " + response.data.message
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

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Agregar Clientes"
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            width: "fit-content",
            height: "fit-content",
            margin: "auto",
            padding: "0",
            border: "none",
            backgroundColor: "transparent",
          },
        }}
      >
        <div className="flex flex-col gap-4 bg-slate-900 text-white p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-bold text-2xl">Cierre Diario de Caja</h1>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-red-400 cursor-pointer"
            >
              <X />
            </button>
          </div>

          {/* Ingresos y egresos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 rounded-lg p-4">
              <h3 className="text-sm text-slate-400">Ingresos del Día</h3>
              <p className="text-green-500 font-bold text-xl">
                ${Intl.NumberFormat("es-CO").format(income)}
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <h3 className="text-sm text-slate-400">Egresos del Día</h3>
              <p className="text-red-500 font-bold text-xl">
                ${Intl.NumberFormat("es-CO").format(expenses)}
              </p>
            </div>
          </div>

          {/* Conteo de efectivo */}
          <div className="flex flex-col gap-1.5">
            <h3 className="text-sm font-semibold text-white">
              Conteo de Efectivo
            </h3>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Monto contado en caja"
              className="bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          {/* Notas opcionales */}
          <div className="flex flex-col gap-1.5">
            <h3 className="text-sm font-semibold text-white">
              Notas (Opcional)
            </h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Observaciones del cierre"
              rows={3}
              className="bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-white placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {isAddModal ? (
            <div className="flex flex-col text-center">
              <h3 className="text-sm font-semibold text-white">
                ¿Estas seguro de hacer el cierre?
              </h3>
              <div className="flex gap-2">
                <button
                  className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer"
                  onClick={() => {
                    handleAddDailyClosure();
                    setIsAddModal(false);
                  }}
                >
                  Si
                </button>
                <button
                  className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer"
                  onClick={() => {
                    setIsAddModal(false);
                    onClose();
                  }}
                >
                  No
                </button>
              </div>
            </div>
          ) : (
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md mt-2 transition-all cursor-pointer"
              onClick={() => setIsAddModal(true)}
            >
              Realizar Cierre
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
}

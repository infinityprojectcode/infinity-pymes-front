import Modal from "react-modal";
import { useState } from "react";

export default function AddBilling({ isOpen, onClose }) {
  const clienteList = ["Laura Gómez", "Carlos Rodríguez", "Camila Torres"];
  const [cliente, setCliente] = useState("");


  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Agregar Inventario"
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
        <div className="bg-slate-900 text-white p-6 rounded-lg w-fit">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-semibold text-lg">Crear nueva factura</h1>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-red-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          {/* Formulario */}
          <form action="" className="space-y-4">
            <div>
              <div>
                <label className="block mb-1">Cliente</label>
                <select
                  name="categoria"
                  value={cliente}
                  onChange={(e) => setCliente(e.target.value)}
                  required
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 text-white"
                >
                  <option value="" disabled>
                    Seleccionar cliente
                  </option>
                  {clienteList.map((cat, i) => (
                    <option key={i} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-md font-medium mb-1">
                  Fecha de vencimiento
                </label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex flex-col text-white">
                  <h1 className="text-md font-medium mb-1">
                    Articulos de factura
                  </h1>
                </div>
                <button className="flex items-center gap-2 border border-gray-300 rounded hover:bg-blue-700 text-white font-semibold p-2 rounded-lg transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <span>Agregar articulo</span>
                </button>
              </div>
              <div className="flex items-center gap-2 bg-[#0f172a] p-2 rounded">
                <input
                  type="text"
                  placeholder="Descripción del artículo"
                  className="bg-slate-800 text-white placeholder-slate-400 px-3 py-2 rounded-md w-60 focus:outline-none"
                />
                <input
                  type="number"
                  min="0"
                  className="bg-slate-800 text-white text-center px-2 py-2 rounded-md w-16 focus:outline-none"
                  defaultValue={1}
                />
                <input
                  type="number"
                  min="0"
                  className="bg-slate-800 text-white text-center px-2 py-2 rounded-md w-20 focus:outline-none"
                  defaultValue={0}
                />
                <span className="text-white pl-2">$0</span>
              </div>
            </div>
            <div className="border-t border-slate-700 mt-4 pt-4">
              <div className="flex justify-end items-end">
                <div className="text-white text-right">
                  <p className="text-sm text-slate-400">Total:</p>
                  <p className="text-lg font-bold">$0</p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Crear factura
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

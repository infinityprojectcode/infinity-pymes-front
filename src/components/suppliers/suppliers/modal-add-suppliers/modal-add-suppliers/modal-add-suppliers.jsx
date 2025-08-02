import Modal from "react-modal";
import { useState } from "react";

export default function AddSupplier({ isOpen, onClose }) {
  const [categoria, setCategoria] = useState("");
  const [terminosPago, setTerminosPago] = useState("");

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Agregar Proveedor"
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
        <div className="bg-slate-900 text-white p-6 rounded-lg w-[500px]">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-semibold text-lg">Agregar Nuevo Proveedor</h1>
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
          <form className="space-y-4">
            {/* Información Básica */}
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-1">Nombre de la Empresa</label>
                  <input
                    type="text"
                    placeholder="TechSupply Corp"
                    className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                  />
                </div>

                <div className="flex-1">
                  <label className="block mb-1">Persona de Contacto</label>
                  <input
                    type="text"
                    placeholder="María González"
                    className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="maria@techsupply.com"
                    className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-1">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-700 my-4"></div>

            {/* Dirección */}
            <div>
              <h2 className="font-medium mb-2">Dirección</h2>
              <textarea
                rows="2"
                placeholder="123 Tech Street, Silicon Valley, CA"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
              />
            </div>

            {/* Divider */}
            <div className="border-t border-slate-700 my-4"></div>

            {/* Categoría y Términos */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1">Categoría</label>
                <select
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                >
                  <option value="">Seleccionar categoría</option>
                  <option value="Electrónicos">Electrónicos</option>
                  <option value="Oficina">Oficina</option>
                  <option value="Suministros">Suministros</option>
                  <option value="Servicios">Servicios</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block mb-1">Términos de Pago</label>
                <select
                  value={terminosPago}
                  onChange={(e) => setTerminosPago(e.target.value)}
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                >
                  <option value="">Seleccionar términos</option>
                  <option value="15 días">15 días</option>
                  <option value="30 días">30 días</option>
                  <option value="Contado">Contado</option>
                  <option value="Personalizado">Personalizado</option>
                </select>
              </div>
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Agregar Proveedor
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

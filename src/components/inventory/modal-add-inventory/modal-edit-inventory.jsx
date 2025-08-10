import Modal from "react-modal";
import { useState } from "react";
import { X } from "lucide-react";

export default function EditInventory({ isOpen, onClose }) {
  const categoriesList = ["Bebidas", "Licores", "Gaseosas", "Cócteles"];
  const [categoria, setCategoria] = useState("");

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
        <div className="bg-slate-900 text-white p-6 rounded-lg w-[400px]">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-semibold text-lg">Editar producto</h1>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-red-400 cursor-pointer"
            >
              <X />
            </button>
          </div>

          {/* Formulario */}
          <form action="" className="space-y-4">
            {/* Nombre */}
            <div>
              <label className="block mb-1">Nombre del producto</label>
              <input
                type="text"
                name="nombre"
                placeholder="Introduzca el nombre del producto"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Categoría */}
            <div>
              <label className="block mb-1">Categoría</label>
              <select
                name="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                required
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 text-white"
              >
                <option value="" disabled>
                  Seleccionar categoria
                </option>
                {categoriesList.map((cat, i) => (
                  <option key={i} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Precio */}
            <div>
              <label className="block mb-1">Precio</label>
              <input
                type="number"
                name="precio"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 text-white"
                placeholder="1.000"
                required
              />
            </div>

            {/* Cantidad */}
            <div>
              <label className="block mb-1">Cantidad</label>
              <input
                type="number"
                name="cantidad"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 text-white"
                placeholder="0"
                required
              />
            </div>

            {/* Imagen */}
            <div>
              <label className="block mb-1">
                Imagen del producto (opcional)
              </label>
              <input
                type="file"
                name="imagen"
                className="w-full text-sm text-slate-400 file:bg-slate-700 file:border-0 file:py-1 file:px-3 file:rounded file:text-white hover:file:bg-slate-600"
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Agregar producto
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

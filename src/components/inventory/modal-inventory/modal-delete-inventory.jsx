import Modal from "react-modal";
import { useState } from "react";
import { X } from "lucide-react";

export default function DeleteInventory({ isOpen, onClose }) {
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
            <h1 className="font-semibold text-lg">Eliminar producto</h1>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-red-400 cursor-pointer"
            >
              <X />
            </button>
          </div>

          <div className="space-y-4">
            <label className="block mb-1">
              ¿Esta seguro de eliminar este producto?
            </label>

            <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer">
              Eliminar producto
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

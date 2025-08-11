import Modal from "react-modal";
// import { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

export default function DeleteInventory({
  isOpen,
  onClose,
  urlApi,
  apiKey,
  info,
  refresh,
}) {
  // const [isDeleteModal, setIsDeleteModal] = useState(false);

  async function handleDeleteProduct() {
    debugger;
    if (!info) return "Datos incompletos";

    toast.promise(
      axios
        .delete(`${urlApi}products/d/inventory/${info}`, {
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
        })
        .then((response) => {
          if (response.data.success) {
            // setLoading(false);
            refresh();
            onClose();
            return "Producto de inventario eliminado con éxito";
          } else {
            throw new Error(
              "Error al eliminar el producto del inventario: " +
                response.data.message
            );
          }
        }),
      {
        loading: "Eliminando producto del inventario...",
        success: (msg) => msg,
        error: (err) => err.message || "Error en la solicitud de eliminación",
      }
    );
  }

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

            <button
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer"
              onClick={() => handleDeleteProduct()}
            >
              Eliminar producto
            </button>
            {/* {isDeleteModal ? (
              <div className="flex gap-2">
                <Button className="w-full" onClick={() => handleDeleteIdea()}>
                  Si
                </Button>
                <Button
                  className="w-full"
                  onClick={() => {
                    setIsDeleteModal(false);
                    onClose;
                  }}
                >
                  No
                </Button>
              </div>
            ) : (
              <Button className="pb-4" onClick={() => setIsDeleteModal(true)}>
                ¿Seguro que quieres eliminar esta idea?
              </Button>
            )} */}
          </div>
        </div>
      </Modal>
    </div>
  );
}

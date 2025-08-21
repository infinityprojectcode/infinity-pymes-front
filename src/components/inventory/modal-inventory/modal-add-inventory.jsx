import Modal from "react-modal";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

export default function AddInventory({
  isOpen,
  onClose,
  urlApi,
  apiKey,
  contextAuth,
  refresh,
}) {
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryPrice, setCategoryPrice] = useState("");
  const [categoryStock, setCategoryStock] = useState("");

  function getCategoryProduct() {
    axios
      .get(`${urlApi}products/g/categories-products`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function handleAddProduct() {
    const data_inventory = {
      business_id: contextAuth.user.business_id,
      name: categoryName,
      category_id: categoryId,
      price: categoryPrice,
      quantity: categoryStock,
    };

    toast.promise(
      axios
        .post(`${urlApi}products/i/inventory`, data_inventory, {
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
        })
        .then((response) => {
          if (response.data.success) {
            setCategoryName("");
            setCategoryId("");
            setCategoryPrice("");
            setCategoryStock("");
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

  useEffect(() => {
    getCategoryProduct();
  }, []);

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
        <div className="bg-slate-900 text-white p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-semibold text-lg">Agregar nuevo producto</h1>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-red-400 cursor-pointer"
            >
              <X />
            </button>
          </div>

          {/* Formulario */}
          <div className="space-y-4">
            {/* Nombre */}
            <div>
              <label className="block mb-1">Nombre del producto</label>
              <input
                type="text"
                name="nombre"
                placeholder="Introduzca el nombre del producto"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
              />
            </div>

            {/* Categoría */}
            <div>
              <label className="block mb-1">Categoría</label>
              <select
                name="category"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 text-white"
              >
                <option value="" disabled>
                  Seleccionar categoría
                </option>
                {category.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name_category}
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
                value={categoryPrice}
                onChange={(e) => setCategoryPrice(e.target.value)}
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
                value={categoryStock}
                onChange={(e) => setCategoryStock(e.target.value)}
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
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer"
              onClick={() => handleAddProduct()}
            >
              Agregar producto
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

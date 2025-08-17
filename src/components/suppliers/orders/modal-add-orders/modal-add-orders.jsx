import Modal from "react-modal";
import { useState } from "react";

export default function AddOrders({ isOpen, onClose, getMyOrders }) {
  const [proveedor, setProveedor] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");
  const [productos, setProductos] = useState([
    { nombre: "", cantidad: 1, precio: 0 },
  ]);
  const [total, setTotal] = useState(0);

  const agregarProducto = () => {
    setProductos([...productos, { nombre: "", cantidad: 1, precio: 0 }]);
  };

  const actualizarProducto = (index, field, value) => {
    const nuevosProductos = [...productos];
    nuevosProductos[index][field] = value;
    setProductos(nuevosProductos);

    // Calcular total
    const nuevoTotal = nuevosProductos.reduce(
      (sum, producto) => sum + producto.cantidad * producto.precio,
      0
    );
    setTotal(nuevoTotal);
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Crear Orden de Compra"
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
        <div className="bg-slate-900 text-white p-6 rounded-lg w-[600px]">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-semibold text-xl">Crear Orden de Compra</h1>
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
            {/* Proveedor y Fecha */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1">Proveedor</label>
                <select
                  value={proveedor}
                  onChange={(e) => setProveedor(e.target.value)}
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                >
                  <option value="">Seleccionar proveedor</option>
                  <option value="TechSupply Corp">TechSupply Corp</option>
                  <option value="Office Solutions">Office Solutions</option>
                  <option value="Suministros SV">Suministros SV</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block mb-1">Fecha Entrega Esperada</label>
                <input
                  type="date"
                  value={fechaEntrega}
                  onChange={(e) => setFechaEntrega(e.target.value)}
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center">
                <h2 className="font-medium">Productos</h2>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={agregarProducto}
                  className="px-3 py-1 text-white hover:bg-gray-400 border border-1 rounded-lg border-white flex items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  Agregar Producto
                </button>
              </div>
            </div>

            {/* Productos */}
            <div>
              {productos.map((producto, index) => (
                <div key={index} className="flex gap-4 mb-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Nombre del producto"
                      value={producto.nombre}
                      onChange={(e) =>
                        actualizarProducto(index, "nombre", e.target.value)
                      }
                      className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                    />
                  </div>
                  <div className="w-20">
                    <input
                      type="text"
                      value={producto.cantidad}
                      onChange={(e) => {
                        // Solo permite números enteros o campo vacío
                        if (
                          e.target.value === "" ||
                          /^\d*$/.test(e.target.value)
                        ) {
                          actualizarProducto(
                            index,
                            "cantidad",
                            e.target.value === ""
                              ? ""
                              : parseInt(e.target.value) || 1
                          );
                        }
                      }}
                      onBlur={(e) => {
                        // Si está vacío, vuelve al valor por defecto (1)
                        if (e.target.value === "") {
                          actualizarProducto(index, "cantidad", 1);
                        }
                      }}
                      className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                    />
                  </div>
                  <div className="w-24">
                    <input
                      type="text"
                      value={producto.precio}
                      onChange={(e) => {
                        // Solo permite números enteros o campo vacío (sin decimales)
                        if (
                          e.target.value === "" ||
                          /^\d*$/.test(e.target.value)
                        ) {
                          actualizarProducto(
                            index,
                            "precio",
                            e.target.value === ""
                              ? ""
                              : parseInt(e.target.value) || 0
                          );
                        }
                      }}
                      onBlur={(e) => {
                        // Si está vacío, vuelve al valor por defecto (0)
                        if (e.target.value === "") {
                          actualizarProducto(index, "precio", 0);
                        }
                      }}
                      className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                    />
                  </div>
                  <div className="w-24 flex items-center">
                    ${(producto.cantidad * producto.precio).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-t border-slate-700 pt-4 flex justify-end">
              <div className="text-right flex flex-col">
                <div className="text-md">
                  Total:
                </div>
                <div className="text-xl font-bold">
                  ${total.toFixed(2)}
                </div>
              </div>
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-medium"
            >
              Crear Orden de Compra
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";
import { useState } from "react";

export default function PointOfSale() {
  const [carrito, setCarrito] = useState([]);

  const productos = [
    {
      id: 1,
      name: "Audífonos Inalámbricos",
      price: 199,
      stock: 45,
      category: "Electrónicos",
    },
    {
      id: 2,
      name: "Mouse Gamer",
      price: 99,
      stock: 12,
      category: "Electrónicos",
    },
    {
      id: 3,
      name: "Teclado Mecánico",
      price: 349,
      stock: 28,
      category: "Electrónicos",
    },
    {
      id: 4,
      name: 'Monitor 24"',
      price: 599,
      stock: 8,
      category: "Electrónicos",
    },
    { id: 5, name: "Webcam HD", price: 129, stock: 15, category: "Accesorios" },
  ];

  const agregarAlCarrito = (producto) => {
    const itemExistente = carrito.find((item) => item.id === producto.id);

    if (itemExistente) {
      const nuevoCarrito = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const sumar = (id) => {
    const nuevoCarrito = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    setCarrito(nuevoCarrito);
  };

  const restar = (id) => {
    const nuevoCarrito = carrito
      .map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      )
      .filter((item) => item.cantidad > 0); // Elimina si cantidad llega a 0
    setCarrito(nuevoCarrito);
  };

  const eliminar = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  return (
    <>
      <div className="w-full h-screen flex">
        <Sidebar />
        <PageTemplate>
          <div className="flex flex-col p-8 gap-2 text-white">
            <div className="flex flex-col mb-3">
              <h1 className="text-3xl font-bold">Punto de Venta</h1>
              <p className="text-gray-400">
                Interfaz rápida para ventas físicas.
              </p>
            </div>

            <div className="flex w-full items-start gap-4">
              <div className="flex flex-col w-[70%] gap-4">
                <div className="flex flex-col gap-2 bg-[#1a1d24] p-4 rounded-lg">
                  <div className="flex gap-2">
                    <div className="relative flex flex-1">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-scan-icon lucide-scan"
                        >
                          <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                          <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                          <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                          <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                        </svg>
                      </span>

                      <input
                        className="flex-1 bg-[#2a2d36] p-2 pl-10 rounded outline-none text-white"
                        placeholder="Escanear código de barras..."
                      />
                    </div>
                    <div className="bg-blue-600 w-12 h-12 flex items-center justify-center rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-scan-icon lucide-scan text-white"
                      >
                        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                      </span>
                      <input
                        className="w-full bg-[#2a2d36] text-white pl-10 p-2 rounded outline-none"
                        placeholder="Buscar productos..."
                      />
                    </div>

                    <select className="bg-[#2a2d36] text-white p-2 rounded w-40">
                      <option>Todas</option>
                      <option>Electrónicos</option>
                      <option>Accesorios</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {productos.map((product, index) => (
                    <div
                      key={index}
                      onClick={() => agregarAlCarrito(product)}
                      className="bg-[#1a1d24] p-4 flex flex-col gap-1 rounded-lg hover:shadow  hover:bg-gray-800 cursor-pointer"
                    >
                      <h3 className="text-lg font-bold">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <p className="text-green-400 font-bold text-xl">
                          ${product.price}
                        </p>
                        <p className="text-sm text-gray-300 rounded-lg border border-white px-1">
                          {product.stock} disponibles
                        </p>
                      </div>
                      <p className="text-sm text-gray-400">
                        {product.category}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-[30%] bg-[#1a1d24] p-4 rounded-lg h-auto">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="8" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                  </svg>
                  <h2 className="text-lg font-bold">Carrito (0)</h2>
                </div>
                {carrito.length === 0 ? (
                  <p className="text-gray-400 p-4 text-center">Carrito vacío</p>
                ) : (
                  <div className="flex flex-col gap-4 mt-4">
                    {carrito.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center text-white bg-[#2a2d36] p-2 rounded"
                      >
                        <div>
                          <h3 className="font-bold">{item.name}</h3>
                          <p className="text-sm text-gray-400">
                            ${item.price} c/u
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {/* Botón para restar cantidad */}
                          <button onClick={() => restar(item.id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-minus-icon lucide-minus text-white hover:text-yellow-400"
                            >
                              <path d="M5 12h14" />
                            </svg>
                          </button>

                          {/* Cantidad */}
                          <span className="text-white">{item.cantidad}</span>

                          {/* Botón para sumar cantidad */}
                          <button onClick={() => sumar(item.id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-plus-icon lucide-plus text-white hover:text-green-400"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                          </button>

                          {/* Botón para eliminar producto */}
                          <button onClick={() => eliminar(item.id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-trash2-icon lucide-trash-2 text-red-500 hover:text-red-700"
                            >
                              <path d="M10 11v6" />
                              <path d="M14 11v6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                              <path d="M3 6h18" />
                              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            </svg>
                          </button>

                          {/* Precio total por producto */}
                          <p className="text-white font-bold">
                            ${item.price * item.cantidad}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-between text-white font-bold border-t border-gray-600 pt-4">
                      <span>Total:</span>
                      <span className="text-green-400">
                        $
                        {carrito
                          .reduce(
                            (total, item) => total + item.price * item.cantidad,
                            0
                          )
                          .toFixed(2)}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-2 rounded flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <rect
                            x="2"
                            y="5"
                            width="20"
                            height="14"
                            rx="2"
                            ry="2"
                          />
                          <path d="M2 10h20" />
                        </svg>
                        Procesar Pago
                      </button>
                      <button
                        onClick={limpiarCarrito}
                        className="w-full border border-white/20 text-white py-2 px-2 rounded hover:bg-white/5"
                      >
                        Limpiar Carrito
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </PageTemplate>
      </div>
    </>
  );
}

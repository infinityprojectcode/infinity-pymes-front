/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import bebidas from "@assets/images/bebida.webp";
import AddInventory from "./modal-inventory/modal-add-inventory.jsx";
import EditInventory from "./modal-inventory/modal-edit-inventory.jsx";
import DeleteInventory from "./modal-inventory/modal-delete-inventory.js";
import { Plus, Edit, Trash2 } from "lucide-react";
import axios from "axios";

export default function ListInventory() {
  const [modalIsOpenOne, setModalIsOpenOne] = useState(false);
  const [modalIsOpenTwo, setModalIsOpenTwo] = useState(false);
  const [modalIsOpenThree, setModalIsOpenThree] = useState(false);

  const [inventory, setInventory] = useState([]);

  function getInventory() {
    axios
      .get(
        `http://localhost:3000/infinity-pymes/server/v1/products/g/inventory`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setInventory(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const getStatus = (stock, name_stock) => {
    if (stock == 0) return { name: name_stock, color: "bg-red-500" };
    if (stock <= 5) return { name: name_stock, color: "bg-yellow-500" };
    return { name: name_stock, color: "bg-green-500" };
  };

  useEffect(() => {
    getInventory();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 sm:items-start sm:gap-2 md:flex-row md:justify-between md:items-center mb-4">
          <div className="flex flex-col text-white">
            <h1 className="text-3xl font-bold mb-1">Inventario</h1>
            <p className="text-gray-400">
              Gestione su inventario de productos y los niveles de stock.
            </p>
          </div>
          <button
            onClick={() => setModalIsOpenOne(true)}
            className="flex items-center w-fit gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded-lg transition duration-300 cursor-pointer"
          >
            <Plus />
            Agregar nuevo producto
          </button>
        </div>
        <div className="relative w-full max-w-sm mb-4">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full pl-10 pr-4 py-2 text-white rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-sm"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
            />
          </svg>
        </div>
        <div className="w-full overflow-x-auto rounded-lg border border-gray-700  bg-gray-900 text-white p-3">
          <h1 className="text-2xl font-bold mb-1 ">
            Productos ({inventory.length})
          </h1>
          {/* Encabezado */}
          <div className="min-w-[650px]">
            <div className="grid grid-cols-6 text-sm font-semibold px-4 py-3">
              <div>Nombre del producto</div>
              <div>Categoría</div>
              <div>Precio</div>
              <div>Cantidad</div>
              <div>Estado</div>
              <div>Acciones</div>
            </div>

            {/* Contenido dinámico */}
            {inventory.map((item) => {
              const auxiliar = getStatus(item.quantity, item.stock_state);
              return (
                <div
                  key={item.inventory_id}
                  className="grid grid-cols-6 items-center text-white px-4 py-3 border-t border-gray-700 hover:bg-gray-800 transition"
                >
                  <div className="truncate">{item.product_name}</div>
                  <div>{item.category}</div>
                  <div>${Intl.NumberFormat("es-CO").format(item.price)}</div>
                  <div>{item.quantity}</div>
                  <div
                    className={`${auxiliar.color} w-fit px-2 text-base text-white text-center font-semibold rounded-lg`}
                  >
                    {auxiliar.name}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setModalIsOpenTwo(true)}
                      className="cursor-pointer"
                    >
                      <Edit className="text-yellow-500" />
                    </button>

                    <button
                      onClick={() => setModalIsOpenThree(true)}
                      className="cursor-pointer"
                    >
                      <Trash2 className="text-red-700" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <AddInventory
        isOpen={modalIsOpenOne}
        onClose={() => setModalIsOpenOne(false)}
      ></AddInventory>

      <EditInventory
        isOpen={modalIsOpenTwo}
        onClose={() => setModalIsOpenTwo(false)}
      ></EditInventory>

      <DeleteInventory
        isOpen={modalIsOpenThree}
        onClose={() => setModalIsOpenThree(false)}
      ></DeleteInventory>
    </>
  );
}

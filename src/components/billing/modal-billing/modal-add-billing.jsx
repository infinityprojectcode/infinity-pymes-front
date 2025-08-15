import Modal from "react-modal";
import { useState, useEffect } from "react";
import { Plus, X } from "lucide-react";
import axios from "axios";

export default function AddBilling({ isOpen, onClose, urlApi, apiKey }) {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [customersId, setCustomersId] = useState([]);
  const [productsId, setProductsId] = useState([]);
  const [items, setItems] = useState([
    { productId: "", quantity: 1, price: 0 },
  ]);

  function getCustomers() {
    axios
      .get(`${urlApi}customers/g/customers`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getProducts() {
    axios
      .get(`${urlApi}products/g/products`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getCustomers();
    getProducts();
  }, []);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { productId: "", quantity: 1, price: 0 }]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Agregar Inventario"
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0",
            border: "none",
            backgroundColor: "transparent",
          },
        }}
      >
        <div className="bg-slate-900 text-white p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-semibold text-lg">Crear nueva factura</h1>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-red-400 cursor-pointer"
            >
              <X />
            </button>
          </div>

          {/* Formulario */}
          <div className="space-y-4">
            <div>
              <div>
                <label className="block mb-1">Cliente</label>
                <select
                  name="customer"
                  value={customersId}
                  onChange={(e) => setCustomersId(e.target.value)}
                  required
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 text-white"
                >
                  <option value="" disabled>
                    Seleccionar cliente
                  </option>
                  {customers.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
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

            {/* Artículos */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col justify-start md:flex-row md:justify-between md:items-center">
                <div className="flex flex-col text-white">
                  <h1 className="text-md font-medium mb-1">
                    Artículos de factura
                  </h1>
                </div>
                <button
                  onClick={addItem}
                  className="flex items-center gap-2 border border-gray-400 rounded text-white hover:bg-blue-700 hover:text-white hover:border-blue-700 font-semibold p-2 rounded-lg transition duration-300 cursor-pointer"
                >
                  <Plus />
                  <span>Agregar articulo</span>
                </button>
              </div>

              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-[#0f172a] p-2 rounded"
                >
                  <select
                    value={item.productId}
                    onChange={(e) =>
                      handleItemChange(index, "productId", e.target.value)
                    }
                    required
                    className="w-full p-2 rounded bg-slate-800 border border-slate-700 text-white"
                  >
                    <option value="" disabled>
                      Seleccionar producto
                    </option>
                    {products.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleItemChange(
                        index,
                        "quantity",
                        Number(e.target.value)
                      )
                    }
                    className="bg-slate-800 text-white text-center px-2 py-2 rounded-md w-16 focus:outline-none"
                  />
                  <input
                    type="number"
                    min="0"
                    value={item.price}
                    onChange={(e) =>
                      handleItemChange(index, "price", Number(e.target.value))
                    }
                    className="bg-slate-800 text-white text-center px-2 py-2 rounded-md w-20 focus:outline-none"
                  />
                  <span className="text-white pl-2">
                    ${item.quantity * item.price}
                  </span>

                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="text-red-400 hover:text-red-600 font-bold px-2 cursor-pointer"
                  >
                    <X />
                  </button>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="border-t border-slate-700 mt-4 pt-4">
              <div className="flex justify-end items-end">
                <div className="text-white text-right">
                  <p className="text-sm text-slate-400">Total:</p>
                  <p className="text-lg font-bold">
                    $
                    {items.reduce(
                      (total, item) => total + item.quantity * item.price,
                      0
                    )}
                  </p>
                </div>
              </div>
            </div>
            <button
              // onClick={}
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer"
            >
              Crear factura
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

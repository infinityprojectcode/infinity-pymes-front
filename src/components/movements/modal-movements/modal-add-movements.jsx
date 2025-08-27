import Modal from "react-modal";
import { useState, useEffect } from "react";
import { Plus, X } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

export default function AddMovements({
  isOpen,
  onClose,
  urlApi,
  apiKey,
  contextAuth,
  refresh,
}) {
  const [sectionActiva, setSectionActiva] = useState("btn_ingreso");

  const [customers, setCustomers] = useState([]);
  const [expirationAt, setExpirationAt] = useState("");
  const [products, setProducts] = useState([]);
  const [customersId, setCustomersId] = useState([]);

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
        params: { business_id: contextAuth.user.business_id },
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
        params: { business_id: contextAuth.user.business_id },
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

  async function handleAddBilling() {
    const details = items.map((item) => {
      const product = products.find((p) => p.id === Number(item.productId));
      return {
        product_id: Number(item.productId),
        quantity: Number(item.quantity),
        price: product ? product.price : 0,
      };
    });

    const data_inventory = {
      business_id: contextAuth.user.business_id,
      customer_id: Number(customersId),
      expiration_at: expirationAt,
      details,
    };

    toast.promise(
      axios
        .post(`${urlApi}billing/i/billing`, data_inventory, {
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
        })
        .then((response) => {
          if (response.data.success) {
            refresh();
            onClose();
            return "Factura creada con éxito";
          } else {
            throw new Error(
              "Error al crear la factura: " + response.data.message
            );
          }
        }),
      {
        loading: "Guardando factura...",
        success: (msg) => msg,
        error: (err) => err.message || "Error en la solicitud",
      }
    );
  }

  const [expenseTypes, setExpenseTypes] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [funds, setFunds] = useState([]);

  const [fundsId, setFundsId] = useState("");
  const [supplierId, setSupplierId] = useState("");
  const [paymentMethodId, setPaymentMethodId] = useState("");
  const [description, setDescription] = useState("");
  const [expenseTypeId, setExpenseTypeId] = useState("");
  const [amount, setAmount] = useState("");

  function getExpenseTypes() {
    axios
      .get(`${urlApi}expenses/g/expenses-types`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        params: { business_id: contextAuth.user.business_id },
      })
      .then((response) => {
        setExpenseTypes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getSuppliers() {
    axios
      .get(`${urlApi}suppliers/g/suppliers`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        params: { business_id: contextAuth.user.business_id },
      })
      .then((response) => {
        setSuppliers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getPaymentMethods() {
    axios
      .get(`${urlApi}payments/g/payment-methods`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setPaymentMethods(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getFunds() {
    axios
      .get(`${urlApi}expenses/g/funds`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        params: { business_id: contextAuth.user.business_id },
      })
      .then((response) => {
        setFunds(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function handleAddExpense() {
    const data_inventory = {
      business_id: contextAuth.user.business_id,
      fund_id: fundsId,
      user_id: contextAuth.user.id,
      supplier_id: supplierId,
      payment_method: paymentMethodId,
      description: description,
      state: "pending",
      expense_type_id: expenseTypeId,
      amount: amount,
    };

    toast.promise(
      axios
        .post(`${urlApi}expenses/i/expenses`, data_inventory, {
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
        })
        .then((response) => {
          if (response.data.success) {
            setFundsId("");
            setSupplierId("");
            setPaymentMethodId("");
            setDescription("");
            setExpenseTypeId("");
            setAmount("");
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
    getExpenseTypes();
    getSuppliers();
    getPaymentMethods();
    getFunds();
  }, []);
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Agregar Clientes"
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
            <h1 className="font-semibold text-lg">Registrar Movimiento</h1>
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
          <div className="space-y-4">
            {/* Tipo de Movimiento */}
            <div>
              <label className="block mb-1">Tipo de Movimiento</label>
              {/* <select className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2">
                <option>Ingreso</option>
                <option>Egreso</option>
              </select> */}
              <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-1 flex w-full shadow">
                <button
                  onClick={() => setSectionActiva("btn_ingreso")}
                  className={`p-2 w-full rounded-md text-sm mr-[4px] cursor-pointer ${
                    sectionActiva === "btn_ingreso"
                      ? "bg-gray-800 text-white"
                      : "bg-transparent hover:bg-gray-900 text-gray-300"
                  }`}
                >
                  Ingreso
                </button>
                <button
                  onClick={() => setSectionActiva("btn_egreso")}
                  className={`p-2 w-full rounded-md text-sm mr-[4px] cursor-pointer ${
                    sectionActiva === "btn_egreso"
                      ? "bg-gray-800 text-white"
                      : "bg-transparent hover:bg-gray-900 text-gray-300"
                  }`}
                >
                  Egreso
                </button>
              </div>
            </div>

            {sectionActiva === "btn_ingreso" ? (
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
                      value={expirationAt}
                      onChange={(e) => setExpirationAt(e.target.value)} // 🔹 Guardamos en el estado
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

                  {/* Tabla de artículos */}
                  <table className="w-full text-sm text-white border-collapse">
                    <thead>
                      <tr className="text-slate-400">
                        <th className="border-b border-slate-700 text-left p-2">
                          Producto
                        </th>
                        <th className="border-b border-slate-700 text-center p-2">
                          Cant.
                        </th>
                        <th className="border-b border-slate-700 text-center p-2">
                          Precio
                        </th>
                        <th className="border-b border-slate-700 text-center p-2">
                          Subtotal
                        </th>
                        <th className="border-b border-slate-700 p-2 w-8"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => (
                        <tr key={index} className="bg-[#0f172a]">
                          <td className="p-2">
                            <select
                              value={item.productId}
                              onChange={(e) =>
                                handleItemChange(
                                  index,
                                  "productId",
                                  e.target.value
                                )
                              }
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
                          </td>

                          <td className="p-2 text-center">
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
                              className="bg-slate-800 text-white text-center px-2 py-2 rounded-md w-14 focus:outline-none"
                            />
                          </td>

                          <td className="p-2 text-center">
                            <input
                              type="number"
                              min="0"
                              readOnly
                              value={Intl.NumberFormat("es-CO").format(
                                products.find(
                                  (p) => p.id === Number(item.productId)
                                )?.price || 0
                              )}
                              onChange={(e) =>
                                handleItemChange(
                                  index,
                                  "price",
                                  Number(e.target.value)
                                )
                              }
                              className="bg-slate-800 text-white text-center px-2 py-2 rounded-md w-16 focus:outline-none"
                            />
                          </td>

                          <td className="p-2 text-center">
                            $
                            {Intl.NumberFormat("es-CO").format(
                              item.quantity *
                                (products.find(
                                  (p) => p.id === Number(item.productId)
                                )?.price || 0)
                            )}
                          </td>

                          <td className="p-2 text-center">
                            <button
                              type="button"
                              onClick={() => removeItem(index)}
                              className="text-red-400 hover:text-red-600 font-bold px-2 cursor-pointer"
                            >
                              <X />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Total */}
                <div className="border-t border-slate-700 mt-4 pt-4">
                  <div className="flex justify-end items-end">
                    <div className="text-white text-right">
                      <p className="text-sm text-slate-400">Total:</p>
                      <p className="text-lg font-bold">
                        $
                        {Intl.NumberFormat("es-CO").format(
                          items.reduce(
                            (total, item) =>
                              total +
                              item.quantity *
                                (products.find(
                                  (p) => p.id === Number(item.productId)
                                )?.price || 0),
                            0
                          )
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleAddBilling()}
                  className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer"
                >
                  Crear factura
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Descripción */}
                <div>
                  <h2 className="font-medium mb-2">Descripción</h2>
                  <input
                    type="text"
                    placeholder="Descripción del gasto"
                    className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                {/* Categoría y Monto */}
                <div className="flex gap-4">
                  <div className="flex-1 flex flex-col">
                    <h2 className="font-medium mb-2">Categoría</h2>
                    <div className="space-y-2">
                      <select
                        className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 cursor-pointer"
                        value={expenseTypeId}
                        onChange={(e) => setExpenseTypeId(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Seleccionar categoría
                        </option>
                        {expenseTypes.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-medium mb-2">Monto</h2>
                    <input
                      type="number"
                      step="1"
                      placeholder="1.000"
                      className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col flex-1">
                    <h2 className="font-medium mb-2">Método de Pago</h2>
                    <div className="space-y-2">
                      <select
                        className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 cursor-pointer"
                        value={paymentMethodId}
                        onChange={(e) => setPaymentMethodId(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Seleccionar método
                        </option>
                        {paymentMethods.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-medium mb-2">Proveedor</h2>
                    <div className="space-y-2">
                      <select
                        className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 cursor-pointer"
                        value={supplierId}
                        onChange={(e) => setSupplierId(e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Seleccionar proveedor
                        </option>
                        {suppliers.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-medium mb-2">Cuentas</h2>
                  <select
                    className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 cursor-pointer"
                    value={fundsId}
                    onChange={(e) => setFundsId(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Seleccionar cuenta
                    </option>
                    {funds.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}: $
                        {Intl.NumberFormat("es-CO").format(cat.amount)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Botón */}
                <button
                  onClick={() => handleAddExpense()}
                  className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer"
                >
                  Registrar Gasto
                </button>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}

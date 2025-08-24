import Modal from "react-modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { toast } from "sonner";

export default function AddExpenses({
  isOpen,
  onClose,
  urlApi,
  apiKey,
  contextAuth,
  refresh,
}) {
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
            <h1 className="font-semibold text-lg">Registrar Nuevo Gasto</h1>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-red-400 cursor-pointer"
            >
              <X />
            </button>
          </div>

          {/* Formulario */}
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
                    {cat.name}: ${Intl.NumberFormat("es-CO").format(cat.amount)}
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
        </div>
      </Modal>
    </div>
  );
}

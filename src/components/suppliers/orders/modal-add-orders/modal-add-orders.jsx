import { useAppContext } from "@context/app/app-provider.jsx";
import { useState, useEffect, useContext } from "react";
import { useAuth } from "@context/auth/auth-provider";
import Modal from "react-modal";
import { toast } from "sonner";
import axios from "axios";

export default function AddOrders({ isOpen, onClose, getMyOrders }) {
  const context = useAppContext();
  const contextAuth = useAuth();
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;
  const [supplierId, setSupplierId] = useState(0);
  const [suppliers, setSuppliers] = useState([]);
  const [dateDelivery, setDateDelivery] = useState("");
  const [products, setProducts] = useState([
    { id: 0, name: "" },
  ]);
  const [listProducts, setListProducts] = useState([]);

  const [total, setTotal] = useState(0);

  const addProduct = () => {
    setListProducts((prev) => [
      ...prev,
      { product_id: 0, quantity: 1, unit_price: 0 },
    ]);
  };

  const removeProduct = (index) => {
    setListProducts((prev) => prev.filter((_, i) => i !== index));

    // recalcular total después de eliminar
    const nuevoTotal = listProducts
      .filter((_, i) => i !== index)
      .reduce((sum, p) => sum + (p.quantity || 0) * (p.unit_price || 0), 0);

    setTotal(nuevoTotal);
  };


  async function fetchSuppliers(id) {
    try {
      const response = await axios.get(`${urlApi}suppliers/g/suppliers/filter/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      });
      if (response.data && Array.isArray(response.data)) {
        setSuppliers(response.data);
      } else {
        toast.error("No se pudieron cargar las categorías");
      }
    } catch {
      toast.error("Error al cargar categorías");
    }
  }

  async function fetchProducts() {
    try {
      const response = await axios.get(`${urlApi}products/g/products`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      });
      if (response.data && Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        toast.error("No se pudieron cargar las categorías");
      }
    } catch {
      toast.error("Error al cargar categorías");
    }
  }

  const updateProduct = (index, field, value) => {
    const newProduct = [...listProducts];

    if (field === "product_id") {
      const prod = products.find(p => p.id === value);
      newProduct[index].product_id = value;
      newProduct[index].unit_price = prod ? parseFloat(prod.price) : 0;
    } else {
      newProduct[index][field] = value;
    }

    setListProducts(newProduct);

    // Calcular total general
    const nuevoTotal = newProduct.reduce(
      (sum, p) => sum + (p.quantity || 0) * (p.unit_price || 0),
      0
    );
    setTotal(nuevoTotal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (listProducts.length === 0 || listProducts.some(p => !p.product_id)) {
      toast.error("Debe agregar al menos un producto válido");
      return;
    }

    if (dateDelivery === "") {
      toast.error("Debe seleccionar una fecha de entrega");
      return;
    }
    if (suppliers.length === 0 || supplierId === 0) {
      toast.error("Debe seleccionar un proveedor");
      return;
    }

    const subtotal = listProducts.reduce((sum, p) => sum + p.quantity * p.unit_price, 0);
    const tax = subtotal * 0.16;
    const total = subtotal + tax;

    const body = {
      business_id: contextAuth.user.business_id,
      code: `OC-${Date.now()}`,
      supplier_id: supplierId,
      date_delivery: dateDelivery,
      subtotal,
      tax,
      total,
      status_id: 1,
      products: listProducts.map(p => ({
        product_id: p.product_id,
        quantity: p.quantity,
        price: p.unit_price
      }))
    };

    saveOrder(body);
  };

  async function saveOrder(body) {
    let res = false;

    try {
      const response = await axios.post(
        `${urlApi}suppliers/i/suppliers/orders`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
        }
      );

      if (response.data && response.data.success) {
        res = true;
        onClose();
      }
    } catch {
      res = false;
    }

    if (res) {
      getMyOrders();
      toast.success("Orden de compra guardada con éxito");
    } else {
      toast.error("Error al guardar orden de compra");
    }
  }

  useEffect(() => {
    if (isOpen) {
      fetchSuppliers(1);
      fetchProducts();
    }
  }, [isOpen]);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Crear Orden de Compra"
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
        <div className="bg-slate-900 text-white p-6 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
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
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Proveedor y Fecha */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1">Proveedor</label>
                <select
                  value={supplierId}
                  onChange={(e) => setSupplierId(parseInt(e.target.value))}
                  className="w-full p-2 hover:cursor-pointer rounded bg-slate-800 border border-slate-700"
                >
                  <option value="">Seleccionar proveedor</option>
                  {suppliers.map((sup) => (
                    <option key={sup.id} value={sup.id}>
                      {sup.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block mb-1">Fecha Entrega Esperada</label>
                <input
                  type="date"
                  value={dateDelivery}
                  onChange={(e) => setDateDelivery(e.target.value)}
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                />
              </div>
            </div>

            {/* Título productos */}
            <div className="flex justify-between">
              <div className="flex items-center">
                <h2 className="font-medium">Productos</h2>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={addProduct}
                  className="flex hover:cursor-pointer items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md"
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

            {/* Lista de productos */}
            <div>
              {/* Cabecera de tabla */}
              <div className="grid grid-cols-5 gap-4 font-semibold border-b border-slate-700 pb-2 mb-2">
                <div>Producto</div>
                <div className="text-center">Cantidad</div>
                <div className="text-center">Precio</div>
                <div className="text-center">Total</div>
                <div></div>
              </div>

              {/* Filas de productos */}
              {listProducts.map((producto, index) => (
                <div key={index} className="grid grid-cols-5 gap-4 items-center mb-2">
                  {/* Producto */}
                  <div>
                    <select
                      value={producto.product_id}
                      onChange={(e) =>
                        updateProduct(index, "product_id", parseInt(e.target.value))
                      }
                      className="w-full p-2 rounded bg-slate-800 border border-slate-700 hover:cursor-pointer"
                    >
                      <option value="">Seleccionar producto</option>
                      {products.map((prod) => (
                        <option key={prod.id} value={prod.id}>
                          {prod.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Cantidad */}
                  <div className="text-center">
                    <input
                      type="number"
                      value={producto.quantity}
                      onChange={(e) =>
                        updateProduct(index, "quantity", parseInt(e.target.value) || 1)
                      }
                      min="1"
                      className="w-20 text-center p-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2"
                    />
                  </div>

                  {/* Precio (solo lectura) */}
                  <div className="text-center">
                    <input
                      type="number"
                      value={producto.unit_price}
                      readOnly
                      className="w-24 text-center p-2 rounded bg-slate-700 border border-slate-600 text-gray-400"
                    />
                  </div>

                  {/* Total */}
                  <div className="text-center">
                    ${(producto.quantity * producto.unit_price).toFixed(2)}
                  </div>

                  {/* Eliminar */}
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => removeProduct(index)}
                      className="text-red-400 hover:text-red-600 hover:cursor-pointer"
                      title="Eliminar producto"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total general */}
            <div className="border-t border-slate-700 pt-4 flex justify-end">
              <div className="text-right flex flex-col">
                <div className="text-md">Total:</div>
                <div className="text-xl font-bold">${total.toFixed(2)}</div>
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

import { useState, useEffect, useContext } from "react";
import AppProvider from "@context/app/app-provider.jsx";
import Modal from "react-modal";
import { toast } from "sonner";
import axios from "axios";

export default function AddSupplier({ isOpen, onClose, getMySuppliers }) {
  const context = useContext(AppProvider);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;
  const [categories, setCategories] = useState([]);
  const [states, setStates] = useState([]);
  const [form, setForm] = useState({
    business_id: 1,
    name: "",
    tax_id: "",
    address: "",
    phone: "",
    email: "",
    website: "",
    payment_method: "",
    currency: "COP",
    status_id: "1",
    categoria: "",
    terminosPago: "",
    contact_name: "",
    contact_title: "",
    contact_email: "",
    contact_phone: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function fetchStates() {
    try {
      const response = await axios.get(`${urlApi}/suppliers/g/supplier-status`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      });
      if (response.data && Array.isArray(response.data)) {
        setStates(response.data);
      } else {
        toast.error("No se pudieron cargar las categorías");
      }
    } catch {
      toast.error("Error al cargar categorías");
    }
  }

  async function fetchCategories() {
    try {
      const response = await axios.get(`${urlApi}/suppliers/g/supplier-categories`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      });
      if (response.data && Array.isArray(response.data)) {
        setCategories(response.data);
      } else {
        toast.error("No se pudieron cargar las categorías");
      }
    } catch {
      toast.error("Error al cargar categorías");
    }
  }

  async function saveSupplier(e) {
    e.preventDefault();
    let res = false;

    const body = {
      business_id: 1,
      name: form.name,
      tax_id: form.tax_id,
      address: form.address,
      phone: form.phone,
      email: form.email,
      website: form.website,
      payment_terms: form.terminosPago,
      payment_method: form.payment_method,
      currency: form.currency,
      status_id: parseInt(form.status_id),
      category_id: parseInt(form.categoria),
      contact_name: form.contact_name,
      contact_title: form.contact_title,
      contact_email: form.contact_email,
      contact_phone: form.contact_phone,
    };

    try {
      const response = await axios.post(
        `${urlApi}suppliers/i/suppliers`,
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
      getMySuppliers();
      clearForm();
      toast.success("Proveedor guardado con éxito");
    } else {
      toast.error("Error al guardar proveedor");
    }
  }

  function clearForm() {
    setForm({
      business_id: 1,
      name: "",
      tax_id: "",
      address: "",
      phone: "",
      email: "",
      website: "",
      payment_method: "",
      currency: "COP",
      status_id: "1",
      categoria: "",
      terminosPago: "",
      contact_name: "",
      contact_title: "",
      contact_email: "",
      contact_phone: ""
    });
  }

  useEffect(() => {
    if (isOpen) {
      fetchCategories();
      fetchStates();
      clearForm();
    }
  }, [isOpen]);

  return (
    <div>
      <Modal
        className="overflow-y-auto scroll-hidden"
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Agregar Proveedor"
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            width: "fit-content",
            maxHeight: "95vh",
            margin: "auto",
            padding: "20px",
            inset: 0, // permite centrar vertical/horizontal
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0",
            border: "none",
            backgroundColor: "transparent",
          },
        }}
      >
        <div className="bg-slate-900 text-white p-6 rounded-lg w-[500px] scroll-hidden">
          {/* Encabezado */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-semibold text-lg">Agregar Nuevo Proveedor</h1>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-red-400 hover:cursor-pointer"
            >
              ✖
            </button>
          </div>

          {/* Formulario */}
          <div className="flex-1 pr-2">
            <form className="space-y-4" onSubmit={saveSupplier}>
              {/* Información Básica */}
              <div className="space-y-3">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block mb-1">Nombre de la Empresa</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={(e) => handleChange(e)}
                      placeholder="TechSupply Corp"
                      className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block mb-1">Persona de Contacto</label>
                    <input
                      type="text"
                      name="contact_name"
                      value={form.contact_name}
                      onChange={(e) => handleChange(e)}
                      placeholder="María González"
                      className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block mb-1">Email (Proveedor)</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={(e) => handleChange(e)}
                      placeholder="proveedor@empresa.com"
                      className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block mb-1">Teléfono (Proveedor)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={(e) => handleChange(e)}
                      placeholder="+57 300 000 0000"
                      className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>

              {/* Datos fiscales / web */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block mb-1">NIT / Tax ID</label>
                  <input
                    type="text"
                    name="tax_id"
                    value={form.tax_id}
                    onChange={(e) => handleChange(e)}
                    placeholder="900123456-1"
                    className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400"
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-1">Sitio Web</label>
                  <input
                    type="text"
                    name="website"
                    value={form.website}
                    onChange={(e) => handleChange(e)}
                    placeholder="https://empresa.com"
                    className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Dirección */}
              <div>
                <h2 className="font-medium mb-2">Dirección</h2>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={(e) => handleChange(e)}
                  rows="2"
                  placeholder="Cra 45 # 23-23, Bogotá"
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400"
                />
              </div>

              {/* Categoría y Condiciones */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block mb-1">Categoría</label>
                    <select
                      name="categoria"
                      value={form.categoria}
                      onChange={(e) => handleChange(e)}
                      className="w-full p-2 hover:cursor-pointer rounded bg-slate-800 border border-slate-700"
                    >
                      <option className="hover:cursor-pointer" value="">Seleccionar categoría</option>
                      {categories.map((cat) => (
                        <option className="hover:cursor-pointer" key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex-1">
                    <label className="block mb-1">Términos de Pago</label>
                    <select
                      name="terminosPago"
                      value={form.terminosPago}
                      onChange={(e) => handleChange(e)}
                      className="w-full p-2 rounded bg-slate-800 hover:cursor-pointer border border-slate-700"
                    >
                      <option value="">Seleccionar términos</option>
                      <option value="15 días">15 días</option>
                      <option value="30 días">30 días</option>
                      <option value="40 días">40 días</option>
                      <option value="Contado">Contado</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block mb-1">Método de Pago</label>
                    <select
                      name="payment_method"
                      value={form.payment_method}
                      onChange={(e) => handleChange(e)}
                      className="w-full p-2 rounded bg-slate-800 hover:cursor-pointer border border-slate-700"
                    >
                      <option value="">Seleccionar método</option>
                      <option value="Transferencia">Transferencia</option>
                      <option value="Efectivo">Efectivo</option>
                      <option value="Tarjeta">Tarjeta</option>
                      <option value="Cheque">Cheque</option>
                    </select>
                  </div>

                  <div className="flex-1">
                    <label className="block mb-1">Moneda</label>
                    <select
                      name="currency"
                      value={form.currency}
                      onChange={(e) => handleChange(e)}
                      className="w-full p-2 rounded bg-slate-800 border border-slate-700"
                    >
                      <option value="COP">COP</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block mb-1">Estado</label>
                    <select
                      name="categoria"
                      value={form.categoria}
                      onChange={(e) => handleChange(e)}
                      className="w-full p-2 hover:cursor-pointer rounded bg-slate-800 border border-slate-700"
                    >
                      <option className="hover:cursor-pointer" value="">Seleccionar estado</option>
                      {states.map((st) => (
                        <option className="hover:cursor-pointer" key={st.id} value={st.id}>
                          {st.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Datos de contacto específicos */}
              <div className="space-y-3">
                <h2 className="font-medium">Contacto</h2>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block mb-1">Cargo</label>
                    <input
                      type="text"
                      name="contact_title"
                      value={form.contact_title}
                      onChange={(e) => handleChange(e)}
                      placeholder="Administrador"
                      className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block mb-1">Email (Contacto)</label>
                    <input
                      type="email"
                      name="contact_email"
                      value={form.contact_email}
                      onChange={(e) => handleChange(e)}
                      placeholder="contacto@empresa.com"
                      className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block mb-1">Teléfono (Contacto)</label>
                    <input
                      type="tel"
                      name="contact_phone"
                      value={form.contact_phone}
                      onChange={(e) => handleChange(e)}
                      placeholder="+57 302 000 0000"
                      className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Agregar Proveedor
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}
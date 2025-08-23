import Modal from "react-modal";
import { useState } from "react";

export default function AddCustomer({ isOpen, onClose, onSubmit }) {
  // Estado local del formulario
  const [formData, setFormData] = useState({
  id: "",
  business_id: "",
  name: "",
  lastname: "",
  email: "",
  phone: "",
  address: "",
  total_purchases: ""
});


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejo de envío
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Llama al padre y pasa los datos
    setFormData({ id: "", business_id: "", name: "", lastname: "", email: "", phone: "", address: "", total_purchases: "" }); // Limpia form
    onClose(); // Cierra modal
  };

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
            <h1 className="font-semibold text-lg">Agregar nuevo cliente</h1>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-red-400"
            >
              ✕
            </button>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre y Apellido */}
            <div className="flex gap-4">
              <div>
                <label className="block mb-1">Nombre de pila</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:white"
                  required
                />
              </div>
              <div>
                <label className="block mb-1">Apellido</label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Gomez"
                  className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:white"
                  required
                />
              </div>  
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john.gomez@email.com"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:white"
                required
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block mb-1">Teléfono</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+57 301 356 78 98"
                className="w-full p-2 rounded bg-slate-800 border border-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 text-white"
                required
              />
            </div>

            {/* Dirección */}
            <div>
              <label className="block mb-1">Dirección</label>
              <input
                type="text"
                name="direccion"
                value={formData.address}
                onChange={handleChange}
                placeholder="Calle 45 # 12-30, Bogotá"
                className="border border-gray-400 p-2 rounded w-full focus:outline-none focus:ring-2 focus:white"
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Agregar cliente
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

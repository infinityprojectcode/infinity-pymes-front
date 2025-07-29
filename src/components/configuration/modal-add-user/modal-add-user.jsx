import Modal from "react-modal";
import { useState } from "react";

export default function AddUser({ isOpen, onClose }) {
  const rolList = ["Visualizador", "Editor", "Administrador"];
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("");
  const [permisos, setPermisos] = useState([]);

  const modulos = [
    "Dashboard",
    "Inventario",
    "Proveedores",
    "Movimientos de Caja",
    "Calendario",
    "Punto de Venta",
    "Clientes",
    "Facturación",
    "Gastos",
    "Reportes",
  ];

  const handlePermisoChange = (modulo) => {
    if (permisos.includes(modulo)) {
      setPermisos(permisos.filter((p) => p !== modulo));
    } else {
      setPermisos([...permisos, modulo]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log({ nombre, email, rol, permisos });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Agregar Usuario"
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
      <div className="bg-slate-900 text-white p-6 rounded-lg w-[500px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Agregar Nuevo Usuario</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-red-400"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-md font-semibold mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded bg-slate-800 border border-slate-700 text-white"
                placeholder="Juan Pérez"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="block text-md font-semibold mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 rounded bg-slate-800 border border-slate-700 text-white"
                placeholder="juan@infinitypymes.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-white mb-1">
              Rol
            </label>
            <select
              name="rol"
              value={rol}
              onChange={(e) => setRol(e.target.value)}
              required
              className="w-full p-2 rounded bg-slate-800 border border-slate-700 text-white"
            >
              <option value="" disabled>
                Seleccionar rol
              </option>
              {rolList.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-md font-medium mb-1">
              Permisos de Módulos
            </label>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {modulos.map((modulo) => (
                <label key={modulo} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={permisos.includes(modulo)}
                    onChange={() => handlePermisoChange(modulo)}
                    className="accent-blue-600"
                  />
                  {modulo}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Crear Usuario
          </button>
        </form>
      </div>
    </Modal>
  );
}

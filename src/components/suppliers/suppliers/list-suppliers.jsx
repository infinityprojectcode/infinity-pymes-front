import modalShowSuppliersIsOpen from "../suppliers/modal-show-suppliers/modal-show-suppliers.jsx";
import ShowSuppliers from "../suppliers/modal-show-suppliers/modal-show-suppliers.jsx";
import AppContext from "../../../context/app/app-context.jsx";
import { useEffect, useContext, useState } from "react"
import { toast } from "sonner";
import axios from "axios"

export default function ListSuppliers() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;
  const [modalShowSuppFliersIsOpen, setModalShowSuppliersIsOpen] = useState(false);
  const [listProveedores, setListProveedores] = useState([]);

  async function handleGetMySuppliers() {
    toast.promise(
      axios
        .post(`${urlApi}suppliers/i/supplier-my-bussines/1`, {}, {
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
          }
        })
        .then((response) => {
          if (response.data.length > 0) {
            setListProveedores(response.data);
            return "Datos obtenidos correctamente";
          } else {
            throw new Error(
              "Error al eliminar la clase: " + response.data.message
            );
          }
        }),
      {
        loading: "Guardando cambios...",
        success: (msg) => msg,
        error: (err) => err.message || "Error en la solicitud de eliminado",
      }
    );
  }

  const getStatus = (estado) => {
    const statusMap = {
      Activo: { name: "Activo", color: "bg-green-500" },
      Inactivo: { name: "Inactivo", color: "bg-red-500" },
      Pendiente: { name: "Pendiente", color: "bg-yellow-500" },
    };
    return statusMap[estado] || { name: estado, color: "bg-gray-500" };
  };

  useEffect(() => {
    handleGetMySuppliers();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="relative w-full max-w-sm mb-4">
          <input
            type="text"
            placeholder="Buscar proveedores..."
            className="w-full pl-10 pr-4 py-2 text-white rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-sm"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
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
        <div className="w-full overflow-x-auto rounded-lg border border-gray-700 bg-gray-900 text-white p-3">
          <h1 className="text-2xl font-bold mb-1">Proveedores (2)</h1>
          <div className="min-w-[680px]">
            {/* Encabezado */}
            <div className="grid grid-cols-7 text-sm font-semibold px-4 py-3">
              <div>Empresa</div>
              <div>Contacto</div>
              <div>Categoría</div>
              <div>Términos de Pago</div>
              <div>Total Compras</div>
              <div>Estado</div>
              <div className="flex justify-center">Acciones</div>
            </div>
            {listProveedores.map((proveedor) => {
              const status = getStatus(proveedor.status_name);
              return (
                <div
                  key={proveedor.id}
                  className="grid grid-cols-7 items-center text-white px-4 py-3 border-t border-gray-700 hover:bg-gray-800 transition"
                >
                  <div className="truncate">{proveedor.name_bussines}</div>
                  <div>{proveedor.contact_name}</div>
                  <div>{proveedor.category}</div>
                  <div>{proveedor.payment_terms}</div>
                  <div>{proveedor.total_price}</div>
                  <div
                    className={`${status.color} w-fit px-2 text-white text-center font-semibold rounded-lg`}
                  >
                    {status.name}
                  </div>
                  <div className="flex gap-2 justify-center">
                    <button onClick={() => setModalShowSuppliersIsOpen(true)}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ShowSuppliers
        isOpen={modalShowSuppFliersIsOpen}
        onClose={() => setModalShowSuppliersIsOpen(false)}
      ></ShowSuppliers>
    </>
  );
}

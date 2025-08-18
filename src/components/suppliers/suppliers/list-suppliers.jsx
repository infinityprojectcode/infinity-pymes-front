import ShowSuppliers from "../suppliers/modal-show-suppliers/modal-show-suppliers.jsx";
import { useState } from "react"

export default function ListSuppliers({ listSuppliers }) {
  const [modalShowSuppFliersIsOpen, setModalShowSuppliersIsOpen] = useState(false);

  const getStatus = (estado) => {
    const statusMap = {
      Activo: { name: "Activo", color: "bg-green-500" },
      Inactivo: { name: "Inactivo", color: "bg-red-500" },
      Pendiente: { name: "Pendiente", color: "bg-yellow-500" },
    };
    return statusMap[estado] || { name: estado, color: "bg-gray-500" };
  };

  return (
    <>
      <div className="flex flex-col">
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
            {listSuppliers.map((proveedor) => {
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
                  <div>${proveedor.total_price != null ? proveedor.total_price : 0 }</div>
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

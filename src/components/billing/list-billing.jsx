import AddBilling from "./modal-billing/modal-add-billing.jsx";
import ViewBilling from "./modal-billing/modal-view-billing.jsx";
import DeleteBilling from "./modal-billing/modal-delete-billing.jsx";
import AppContext from "@context/app/app-context.jsx";
import { Plus, Search, Eye, Trash2 } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { toast } from "sonner";
import axios from "axios";

export default function ListBilling() {
  const context = useContext(AppContext);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalViewIsOpen, setModalViewIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [infoViewModal, setInfoViewModal] = useState([]);
  const [infoDeleteModal, setInfoDeleteModal] = useState(null);
  const [billing, setBilling] = useState([]);

  function getBilling() {
    axios
      .get(`${urlApi}billing/g/billing`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setBilling(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const getStatus = (status) => {
    if (status == "Vencido") return { name: status, color: "bg-red-500" };
    if (status == "Pendiente") return { name: status, color: "bg-yellow-500" };
    return { name: status, color: "bg-green-500" };
  };

  useEffect(() => {
    getBilling();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 sm:items-start sm:gap-2 md:flex-row md:justify-between md:items-center mb-4">
          <div className="flex flex-col text-white">
            <h1 className="text-3xl font-bold mb-1">Facturación</h1>
            <p className="text-gray-400 mb-6">
              Crea y gestiona facturas para tus clientes.
            </p>
          </div>
          <button
            onClick={() => setModalAddIsOpen(true)}
            className="flex items-center w-fit gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded-lg transition duration-300 cursor-pointer"
          >
            <Plus />
            <span>Crear factura</span>
          </button>
        </div>
        <div className="relative w-full max-w-sm mb-4">
          <input
            type="text"
            placeholder="Buscar facturas..."
            className="w-full pl-10 pr-4 py-2 text-white rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-sm"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>
        <div className="w-full overflow-x-auto rounded-lg border border-gray-700  bg-gray-900 text-white p-3">
          <h1 className="text-2xl font-bold mb-1 ">
            Facturas ({billing.length})
          </h1>
          <div className="min-w-[650px]">
            {/* Encabezado */}
            <div className="grid grid-cols-8 text-sm font-semibold px-4 py-3">
              <div>Factura</div>
              <div>Cliente</div>
              <div>Fecha</div>
              <div>Fecha de vencimiento</div>
              <div>Cantidad</div>
              <div>Total</div>
              <div>Estado</div>
              <div className="flex justify-center">Comportamiento</div>
            </div>

            {/* Contenido dinámico */}
            {billing.map((item) => {
              const auxiliar = getStatus(item.name_state);
              return (
                <div
                  key={item.billing_id}
                  className="grid grid-cols-8 items-center text-white px-4 py-3 border-t border-gray-700 hover:bg-gray-800 transition"
                >
                  <div className="truncate">{item.code}</div>
                  <div>{item.customer_name}</div>
                  <div>{item.billing_date}</div>
                  <div>{item.billing_expiration}</div>
                  <div>{item.total_consumption}</div>
                  <div>
                    ${Intl.NumberFormat("es-CO").format(item.total_price)}
                  </div>
                  <div
                    className={`${auxiliar.color} w-fit px-2 text-white text-center font-semibold rounded-lg`}
                  >
                    {auxiliar.name}
                  </div>
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => {
                        setModalViewIsOpen(true);
                        setInfoViewModal(item);
                      }}
                      className="cursor-pointer"
                    >
                      <Eye />
                    </button>
                    <button
                      onClick={() => {
                        setModalDeleteIsOpen(true);
                        setInfoDeleteModal(item.billing_id);
                      }}
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

      <AddBilling
        isOpen={modalAddIsOpen}
        onClose={() => setModalAddIsOpen(false)}
        urlApi={urlApi}
        apiKey={apiKey}
        // refresh={() => getBilling()}
      ></AddBilling>

      {modalViewIsOpen && infoViewModal?.billing_id && (
        <ViewBilling
          isOpen={modalViewIsOpen}
          onClose={() => setModalViewIsOpen(false)}
          urlApi={urlApi}
          apiKey={apiKey}
          info={infoViewModal}
        />
      )}

      <DeleteBilling
        isOpen={modalDeleteIsOpen}
        onClose={() => setModalDeleteIsOpen(false)}
        urlApi={urlApi}
        apiKey={apiKey}
        info={infoDeleteModal}
        refresh={() => getBilling()}
      ></DeleteBilling>
    </>
  );
}

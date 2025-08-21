import AddBilling from "./modal-billing/modal-add-billing.jsx";
import ViewBilling from "./modal-billing/modal-view-billing.jsx";
import DeleteBilling from "./modal-billing/modal-delete-billing.jsx";
import { useAppContext } from "@context/app/app-provider.jsx";
import { useAuth } from "@context/auth/auth-provider";
import { Plus, Search, Eye, Trash2 } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { toast } from "sonner";
import axios from "axios";

export default function ListBilling() {
  const context = useAppContext();
  const contextAuth = useAuth();
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
        params: { business_id: contextAuth.user.business_id },
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
          <table className="min-w-full shadow-md rounded-lg">
            <thead className="text-sm">
              <tr>
                <th className="px-4 py-2 text-left">Factura</th>
                <th className="px-4 py-2 text-left">Cliente</th>
                <th className="px-4 py-2 text-left">Fecha</th>
                <th className="px-4 py-2 text-left">Fecha de vencimiento</th>
                <th className="px-4 py-2 text-left">Cantidad</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-4 py-2 text-left">Estado</th>
                <th className="px-4 py-2">Comportamiento</th>
              </tr>
            </thead>
            <tbody>
              {billing.map((item) => {
                const auxiliar = getStatus(item.name_state);
                return (
                  <tr
                    key={item.billing_id}
                    className="hover:bg-gray-800 border-t border-gray-700"
                  >
                    <td className="px-4 py-2">{item.code}</td>
                    <td className="px-4 py-2">{item.customer_name}</td>
                    <td className="px-4 py-2">{item.billing_date}</td>
                    <td className="px-4 py-2">{item.billing_expiration}</td>
                    <td className="px-4 py-2">{item.total_consumption}</td>
                    <td className="px-4 py-2">
                      ${Intl.NumberFormat("es-CO").format(item.total_price)}
                    </td>
                    <td className="px-4 py-2">
                      <div
                        className={`${auxiliar.color} flex justify-center align-center rounded-sm font-semibold`}
                      >
                        {auxiliar.name}
                      </div>
                    </td>
                    <td className="px-4 py-2 flex gap-2 justify-center">
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
                          setInfoDeleteModal(item);
                        }}
                        className="cursor-pointer"
                      >
                        <Trash2 className="text-red-700" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <AddBilling
        isOpen={modalAddIsOpen}
        onClose={() => setModalAddIsOpen(false)}
        urlApi={urlApi}
        apiKey={apiKey}
        contextAuth={contextAuth}
        refresh={() => getBilling()}
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

      {modalDeleteIsOpen && infoDeleteModal?.billing_id && (
        <DeleteBilling
          isOpen={modalDeleteIsOpen}
          onClose={() => setModalDeleteIsOpen(false)}
          urlApi={urlApi}
          apiKey={apiKey}
          info={infoDeleteModal}
          refresh={() => getBilling()}
        ></DeleteBilling>
      )}
    </>
  );
}

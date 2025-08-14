import Modal from "react-modal";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import axios from "axios";

export default function ViewBilling({ isOpen, onClose, urlApi, apiKey, info }) {
  const [billingDetails, setBillingDetails] = useState([]);

  function getBillingDetails() {
    axios
      .get(`${urlApi}billing/g/billing-detail`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        params: { billing_id: info.billing_id },
      })
      .then((response) => {
        setBillingDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getBillingDetails();
  }, []);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Agregar Inventario"
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
            <h1 className="font-bold text-lg">Detalles de la factura</h1>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-red-400 cursor-pointer"
            >
              <X />
            </button>
          </div>

          <div className="text-white flex flex-col gap-4">
            {/* Encabezado */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-400">Número de factura</p>
                <p className="font-semibold">{info.code}</p>
              </div>
              <div>
                <p className="text-slate-400">Cliente</p>
                <p className="font-semibold">{info.customer_name}</p>
              </div>
              <div>
                <p className="text-slate-400">Fecha</p>
                <p className="font-semibold">{info.billing_date}</p>
              </div>
              <div>
                <p className="text-slate-400">Fecha de vencimiento</p>
                <p className="font-semibold">{info.billing_expiration}</p>
              </div>
            </div>
            <div>
              <p className="text-slate-300 font-medium mb-2">Items</p>
              {billingDetails.map((item) => (
                <div key={item.id} className="flex justify-between mt-4">
                  <div>
                    <p className="font-medium">{item.product_name}</p>
                    <p className="text-slate-400 text-sm">
                      Cantidad: {item.quantity} × $
                      {Intl.NumberFormat("es-CO").format(item.product_price)}
                    </p>
                  </div>
                  <p className="font-medium">
                    ${Intl.NumberFormat("es-CO").format(item.subtotal)}
                  </p>
                </div>
              ))}
            </div>

            {/* Total */}
            <hr className="border-slate-700 my-2" />
            <div className="flex justify-between items-center">
              <p className="text-slate-300">Importe total:</p>
              <p className="text-2xl font-bold text-white">
                ${Intl.NumberFormat("es-CO").format(info.total_price)}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

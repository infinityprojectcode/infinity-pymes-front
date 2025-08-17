import AddSuppliers from "@fragments/suppliers/suppliers/modal-add-suppliers/modal-add-suppliers/modal-add-suppliers.jsx";
import AddOrders from "@fragments/suppliers/orders/modal-add-orders/modal-add-orders.jsx";
import ListSuppliers from "@fragments/suppliers/suppliers/list-suppliers.jsx";
import ListOrders from "@fragments/suppliers/orders/list-orders.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";
import AppProvider from "@context/app/app-provider.jsx";
import { useEffect, useState, useContext } from "react";
import { toast } from "sonner";
import axios from "axios";

export default function Suppliers() {
  const context = useContext(AppProvider);
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  const [modalAddSuppliersIsOpen, setModalAddSuppliersIsOpen] = useState(false);
  const [modalAddOrdersIsOpen, setModalAddOrdersIsOpen] = useState(false);
  const [sectionActived, setSectionActived] = useState("proveedores");

  const [listSuppliers, setListSuppliers] = useState([]);
  const [copyListSuppliers, setCopyListSuppliers] = useState([]);
  const [listOrders, setListOrders] = useState([]);
  const [copyListOrders, setCopylistOrders] = useState([]);
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  async function fetchOrders() {
    let res = false;
    try {
      const response = await axios.post(
        `${urlApi}suppliers/i/orders/1`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
        }
      );

      if (response.data.length > 0) {
        setListOrders(response.data);
        setCopylistOrders(response.data);
        res = true;
      }
    } catch {
      res = false;
    }
    return res;
  }


  async function fetchSuppliers() {
    let res = false;
    try {
      const response = await axios.post(
        `${urlApi}suppliers/i/supplier-my-bussines/1`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
        }
      );

      if (response.data.length > 0) {
        setListSuppliers(response.data);
        setCopyListSuppliers(response.data);
        res = true;
      }
    } catch {
      res = false;
    }
    return res;
  }

  function getMySuppliers() {
    setListSuppliers([]);
    setCopyListSuppliers([]);
    toast.promise(fetchSuppliers(), {
      loading: "Cargando datos...",
      success: (ok) => {
        if (ok) {
          return "Datos obtenidos correctamente";
        } else {
          throw Error("Error al obtener los proveedores");
        }
      },
      error: (msg) => `Error: ${msg}`,
    });
  }

  function getMyOrders() {
    setListOrders([]);
    setCopylistOrders([]);
    toast.promise(fetchOrders(), {
      loading: "Cargando datos...",
      success: (ok) => {
        if (ok) {
          return "Datos obtenidos correctamente";
        } else {
          throw Error("Error al obtener las ordenes de compra");
        }
      },
      error: (msg) => `Error: ${msg}`,
    });
  }


  function filterSuppliers(searchTerm) {
    if (!searchTerm.trim()) {
      setListSuppliers(copyListSuppliers);
      return;
    }

    const filtered = copyListSuppliers.filter((supplier) =>
      supplier.name_bussines
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setListSuppliers(filtered);
  }

  function filterOrders(searchTerm) {
    if (!searchTerm.trim()) {
      setListOrders(copyListOrders);
      return;
    }
    const filtered = copyListOrders.filter((order) =>
      order.name_supplier
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setListOrders(filtered);
  }

  useEffect(() => {
    if (copyListSuppliers.length === 0) {
      getMySuppliers();
    }
    if (copyListOrders.length === 0) {
      getMyOrders();
    }
  }, []);

  return (
    <>
      <div className="w-full h-screen flex">
        <PageTemplate>
          <div className="w-full h-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              {/* Título y subtítulo */}
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Proveedores
                </h1>
                <p className="text-gray-400 mt-1">
                  Gestiona tus proveedores y órdenes de compra.
                </p>
              </div>

              {/* Botones de acción */}
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <button
                  onClick={() => setModalAddSuppliersIsOpen(true)}
                  className="flex hover:cursor-pointer items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Nuevo Proveedor
                </button>

                <button
                  onClick={() => setModalAddOrdersIsOpen(true)}
                  className="flex hover:cursor-pointer items-center gap-2 border border-gray-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-800"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
                    />
                  </svg>
                  Nueva Orden
                </button>
              </div>
            </div>
            <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-1 flex w-fit shadow">
              <button
                onClick={() => setSectionActived("proveedores")}
                className={`p-2 rounded-md text-sm cursor-pointer ${sectionActived === "proveedores"
                  ? "bg-gray-800 text-white"
                  : "bg-transparent text-gray-300"
                  }`}
              >
                Proveedores
              </button>
              <button
                onClick={() => setSectionActived("ordenes")}
                className={`p-2 rounded-md text-sm cursor-pointer ${sectionActived === "ordenes"
                  ? "bg-gray-800 text-white"
                  : "bg-transparent text-gray-300"
                  }`}
              >
                Órdenes de Compra
              </button>
            </div>
            <div className="mt-4">

              {sectionActived === "proveedores" && (
                <>
                  <div className="w-full flex gap-2 items-start">
                    <div className="relative w-full max-w-sm mb-4">
                      <input
                        type="text"
                        placeholder="Buscar proveedores..."
                        className="w-full pl-10 pr-4 py-2 text-white rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-sm"
                        onChange={(e) => filterSuppliers(setFilteredSuppliers(e.target.value))}
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
                    <button
                      onClick={() => getMySuppliers()}
                      className="flex items-center gap-2 bg-blue-700 hover:bg-blue-500 hover:cursor-pointer text-white text-sm font-medium px-4 py-2 rounded-md"
                    >
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                      </svg>
                    </button>
                  </div>
                  <ListSuppliers listSuppliers={listSuppliers} />
                </>
              )}

              {sectionActived === "ordenes" && (
                <>
                  <div className="w-full flex gap-2 items-start">
                    <div className="relative w-full max-w-sm mb-4">
                      <input
                        type="text"
                        placeholder="Buscar proveedores..."
                        className="w-full pl-10 pr-4 py-2 text-white rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-sm"
                        onChange={(e) => filterOrders(setFilteredOrders(e.target.value))}
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
                    <button
                      onClick={() => getMyOrders()}
                      className="flex items-center gap-2 bg-blue-700 hover:bg-blue-500 hover:cursor-pointer text-white text-sm font-medium px-4 py-2 rounded-md"
                    >
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                      </svg>
                    </button>
                  </div>
                  <ListOrders listOrders={listOrders} />
                </>
              )}
            </div>
          </div>
        </PageTemplate>
      </div>

      {/* Modales */}
      <AddSuppliers
        isOpen={modalAddSuppliersIsOpen}
        onClose={() => setModalAddSuppliersIsOpen(false)}
        getMySuppliers={getMySuppliers}
      ></AddSuppliers>
      <AddOrders
        isOpen={modalAddOrdersIsOpen}
        onClose={() => setModalAddOrdersIsOpen(false)}
        getMyOrders={getMyOrders}
      ></AddOrders>
    </>
  );
}

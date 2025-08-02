/* eslint-disable no-debugger */
import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";
import { useState } from "react";

// Importo listas necesarias

import ListUsuarios from "../../components/configuration/list-users.jsx";
import ListRespaldos from "../../components/configuration/list-respaldos.jsx"

export default function Configuration() {
  const [seccionActiva, setSeccionActiva] = useState("usuarios");
  return (
    <>
      <div className="w-full h-screen flex">
        <Sidebar />
        <PageTemplate>
          <div className="p-8 text-white">
            <h1 className="text-3xl font-bold mb-1">Configuración</h1>
            <p className="text-gray-400 mb-6">
              Gestiona usuarios, roles y configuraciones del sistema.
            </p>

            <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-1 flex w-fit shadow">
              <button
                onClick={() => setSeccionActiva("usuarios")}
                className={`p-2 rounded-md text-sm ${
                  seccionActiva === "usuarios"
                    ? "bg-gray-800 text-white"
                    : "bg-transparent text-gray-300"
                }`}
              >
                Proveedores
              </button>
              <button
                onClick={() => setSeccionActiva("respaldos")}
                className={`p-2 rounded-md text-sm ${
                  seccionActiva === "respaldos"
                    ? "bg-gray-800 text-white"
                    : "bg-transparent text-gray-300"
                }`}
              >
                Órdenes de Compra
              </button>
            </div>
            <div className="mt-4">
              {seccionActiva === "usuarios" && <ListUsuarios />}

              {seccionActiva === "respaldos" && <ListRespaldos />}
            </div> 
          </div>
        </PageTemplate>
      </div>
    </>
  );
}

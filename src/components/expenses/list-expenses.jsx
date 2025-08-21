/* eslint-disable no-unused-vars */
import { useAppContext } from "@context/app/app-provider.jsx";
import { useAuth } from "@context/auth/auth-provider";
import GraphicsBar from "@fragments/graphics/expenses/graphics-bar.jsx";
import GraphicsPie from "@fragments/graphics/expenses/graphics-pie.jsx";
import AddExpenses from "@fragments/expenses/modal-expenses/modal-add-expenses.jsx";
import { useState, useEffect } from "react";
import {
  TrendingDown,
  TrendingUp,
  ChartColumn,
  ChartPie,
  Plus,
  ChevronDown,
} from "lucide-react";
import axios from "axios";

export default function ListExpenses() {
  const context = useAppContext();
  const contextAuth = useAuth();
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [totalExpenses, setTotalExpenses] = useState([]);
  const [totalMonthExpenses, setTotalMonthExpenses] = useState([]);
  const [totalOutstandingExpenses, setTotalOutstandingExpenses] = useState([]);
  const [totalActiveCategories, setTotalActiveCategories] = useState([]);
  const [recordsExpenses, setRecordsExpenses] = useState([]);

  function getTotalExpenses() {
    axios
      .get(`${urlApi}expenses/g/expenses-total`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setTotalExpenses(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getTotalMonthExpenses() {
    axios
      .get(`${urlApi}expenses/g/expenses-total-month`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setTotalMonthExpenses(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getTotalOutstandingExpenses() {
    axios
      .get(`${urlApi}expenses/g/expenses-total-outstanding`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setTotalOutstandingExpenses(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getTotalActiveCategories() {
    axios
      .get(`${urlApi}expenses/g/expenses-total-categories`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setTotalActiveCategories(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getRecordsExpenses() {
    axios
      .get(`${urlApi}expenses/g/expenses-records`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      })
      .then((response) => {
        setRecordsExpenses(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const getStatus = (status) => {
    if (status == "cancelled")
      return { name: "Cancelado", color: "bg-gray-500", operator: "+" };
    if (status == "pending")
      return { name: "Pendiente", color: "bg-yellow-500", operator: "-" };
    return { name: "Pagado", color: "bg-green-500", operator: "-" };
  };

  useEffect(() => {
    getTotalExpenses();
    getTotalMonthExpenses();
    getTotalOutstandingExpenses();
    getTotalActiveCategories();
    getRecordsExpenses();
  }, []);

  return (
    <>
      {/* CABECERA */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Gastos y Egresos</h1>
          <p className="text-gray-400 mt-1">
            Controla y categoriza todos tus gastos operacionales.
          </p>
        </div>

        {/* Filtro + botón “Nuevo Gasto” */}
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          {/* Select */}
          <div className="relative w-max">
            <select className="appearance-none bg-[#161b22] text-white text-sm border border-gray-600 rounded-md px-3 py-2 pr-10 focus:outline-none cursor-pointer">
              <option>Hoy</option>
              <option>Esta Semana</option>
              <option>Este Mes</option>
              <option>Últimos 6 meses</option>
              <option>Último año</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <ChevronDown className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Botón “Nuevo Gasto” */}
          <button
            onClick={() => setModalAddIsOpen(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition cursor-pointer"
          >
            <Plus className="h-4 w-4" />
            Nuevo Gasto
          </button>
        </div>
      </div>
      {/* TARJETAS ESTADÍSTICAS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Gastos */}
        <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 shadow flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-sm text-gray-400">Total Gastos</span>
            <TrendingDown className="h-5 w-5 text-red-500" />
          </div>
          <h2 className="mt-2 text-2xl font-bold text-red-500">
            ${Intl.NumberFormat("es-CO").format(totalExpenses.total_gastos)}
          </h2>
        </div>

        {/* Gastos del Mes */}
        <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 shadow flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-sm text-gray-400">Gastos del Mes</span>
            <ChartColumn className="h-5 w-5 text-orange-400" />
          </div>
          <h2 className="mt-2 text-2xl font-bold text-orange-400">
            ${Intl.NumberFormat("es-CO").format(totalMonthExpenses.gastos_mes)}
          </h2>
        </div>

        {/* Gastos Pendientes */}
        <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 shadow flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-sm text-gray-400">Gastos Pendientes</span>
            <TrendingUp className="h-5 w-5 text-yellow-400" />
          </div>
          <h2 className="mt-2 text-2xl font-bold text-yellow-400">
            $
            {Intl.NumberFormat("es-CO").format(
              totalOutstandingExpenses.gastos_pendientes
            )}
          </h2>
        </div>

        {/* Categorías Activas */}
        <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 shadow flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-sm text-gray-400">Categorías Activas</span>
            <ChartPie className="h-5 w-5 text-blue-400" />
          </div>
          <h2 className="mt-2 text-2xl font-bold text-blue-400">
            {totalActiveCategories.amount}
          </h2>
        </div>
        <div className="col-span-2">
          <GraphicsBar />
        </div>
        <div className="col-span-2">
          <GraphicsPie />
        </div>
      </div>
      <div className="w-full overflow-x-auto rounded-lg bg-[#0d1117]   text-white p-6">
        <h1 className="text-xl font-bold mb-4">
          Registro de Gastos ({recordsExpenses.length})
        </h1>
        <table className="min-w-full shadow-md rounded-lg">
          <thead className="text-sm">
            <tr>
              <th className="px-4 py-2 text-left">Fecha</th>
              <th className="px-4 py-2 text-left">Descripción</th>
              <th className="px-4 py-2 text-left">Categoría</th>
              <th className="px-4 py-2 text-left">Proveedor</th>
              <th className="px-4 py-2 text-left">Método</th>
              <th className="px-4 py-2 text-left">Monto</th>
              <th className="px-4 py-2 text-left">Estado</th>
              <th className="px-4 py-2 text-left">Recibo</th>
            </tr>
          </thead>
          <tbody>
            {recordsExpenses.map((item) => {
              const auxiliar = getStatus(item.state);
              return (
                <tr
                  key={item.id}
                  className="text-sm border-t border-gray-700 hover:bg-gray-800 transition"
                >
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2">{item.description}</td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2">{item.supplier}</td>
                  <td className="px-4 py-2">{item.payment_method}</td>
                  <td className="px-4 py-2">
                    {auxiliar.operator}$
                    {Intl.NumberFormat("es-CO").format(item.amount)}
                  </td>
                  <td className="px-4 py-2">
                    <div
                      className={`${auxiliar.color} flex justify-center align-center rounded-sm font-semibold`}
                    >
                      {auxiliar.name}
                    </div>
                  </td>
                  <td className="px-4 py-2">{item.receipt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <AddExpenses
        isOpen={modalAddIsOpen}
        onClose={() => setModalAddIsOpen(false)}
      ></AddExpenses>
    </>
  );
}

import AddMovements from "@fragments/movements/modal-movements/modal-add-movements.jsx";
import CloseDailyMovements from "@fragments/movements/modal-movements/modal-add-closing.jsx";
import { useState } from "react";
import {
  Plus,
  FileMinus,
  TrendingUp,
  TrendingDown,
  DollarSign,
} from "lucide-react";

export default function ListMovements() {
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalCloseDailyIsOpen, setModalCloseDailyIsOpen] = useState(false);
  const [sectionActiva, setSectionActiva] = useState("movimientos");

  const movements = [
    {
      date: "2025-01-24 - 10:30",
      type_movement: "Ingreso",
      description: "Venta de productos electrónicos",
      category: "Ventas",
      payment_method: "Efectivo",
      amount: 1500,
      reference: "FAC-001",
    },
    {
      date: "2025-01-24 - 14:15",
      type_movement: "Egreso",
      description: "Compra de suministros de oficina",
      category: "Suministros",
      payment_method: "Transferencia",
      amount: 5000,
      reference: "REC-001",
    },
    {
      date: "2025-01-24 - 16:45",
      type_movement: "Ingreso",
      description: "Pago de cliente",
      category: "Cobros",
      payment_method: "Efectivo",
      amount: 800,
      reference: "PAG-001",
    },
  ];

  const closures = [
    {
      id: 1,
      date: "2025-01-23",
      saldoInicial: 5000,
      ingresos: 3200,
      expenses: 1800,
      saldoEsperado: 6400,
      conteoReal: 6350,
      diferencia: -50,
    },
    {
      id: 2,
      date: "2025-01-24",
      saldoInicial: 6400,
      ingresos: 2800,
      expenses: 1900,
      saldoEsperado: 7300,
      conteoReal: 7300,
      diferencia: 0,
    },
    {
      id: 3,
      date: "2025-01-25",
      saldoInicial: 10000,
      ingresos: 5000,
      expenses: 3000,
      saldoEsperado: 12000,
      conteoReal: 8000,
      diferencia: -4000,
    },
    {
      id: 4,
      date: "2025-01-26",
      saldoInicial: 10000,
      ingresos: 5000,
      expenses: 3000,
      saldoEsperado: 12000,
      conteoReal: 16000,
      diferencia: 4000,
    },
  ];

  const getStatusMovements = (status) => {
    if (status == "Ingreso")
      return {
        name: "Ingreso",
        bg_color: "bg-green-700",
        operator: "+",
        txt_color: "text-green-500",
      };
    return {
      name: "Egreso",
      bg_color: "bg-red-700",
      operator: "-",
      txt_color: "text-red-500",
    };
  };

  const getStatusDailyClosing = (status) => {
    if (status >= 0)
      return {
        value: status,
        operator: "+",
        txt_color: "text-green-500",
      };
    return {
      value: status,
      operator: "-",
      txt_color: "text-red-500",
    };
  };

  return (
    <>
      <div className="w-full h-full space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          {/* Título y subtítulo */}
          <div>
            <h1 className="text-3xl font-bold text-white">
              Movimientos de Caja
            </h1>
            <p className="text-gray-400 mt-1">
              Controla los ingresos y egresos de efectivo.
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button
              onClick={() => setModalAddIsOpen(true)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              Nuevo Movimiento
            </button>

            <button
              onClick={() => setModalCloseDailyIsOpen(true)}
              className="flex items-center gap-2 border border-gray-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer"
            >
              <FileMinus className="h-4 w-4" />
              Cierre Diario
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Ingresos Hoy */}
          <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-400">Ingresos Hoy</span>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <div className="mt-2">
              <h2 className="text-2xl font-bold text-green-500">$0</h2>
            </div>
          </div>

          {/* Egresos Hoy */}
          <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-400">Egresos Hoy</span>
              <TrendingDown className="h-5 w-5 text-red-400" />
            </div>
            <div className="mt-2">
              <h2 className="text-2xl font-bold text-red-500">$0</h2>
            </div>
          </div>

          {/* Balance Hoy */}
          <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-400">Balance Hoy</span>
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <div className="mt-2">
              <h2 className="text-2xl font-bold text-green-500">$0</h2>
            </div>
          </div>

          {/* Movimientos Hoy */}
          <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-400">Movimientos Hoy</span>
              <FileMinus className="h-5 w-5 text-gray-400" />
            </div>
            <div className="mt-2">
              <h2 className="text-2xl font-bold text-white">0</h2>
            </div>
          </div>
        </div>

        <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-1 flex w-fit shadow">
          <button
            onClick={() => setSectionActiva("movimientos")}
            className={`p-2 rounded-md text-sm mr-[4px] cursor-pointer ${
              sectionActiva === "movimientos"
                ? "bg-gray-800 text-white"
                : "bg-transparent hover:bg-gray-900 text-gray-300"
            }`}
          >
            Movimientos
          </button>
          <button
            onClick={() => setSectionActiva("auditoria")}
            className={`p-2 rounded-md text-sm mr-[4px] cursor-pointer ${
              sectionActiva === "auditoria"
                ? "bg-gray-800 text-white"
                : "bg-transparent hover:bg-gray-900 text-gray-300"
            }`}
          >
            Auditoría
          </button>
          <button
            onClick={() => setSectionActiva("cierre")}
            className={`p-2 rounded-md text-sm cursor-pointer ${
              sectionActiva === "cierre"
                ? "bg-gray-800 text-white"
                : "bg-transparent hover:bg-gray-900 text-gray-300"
            }`}
          >
            Cierre Diario
          </button>
        </div>

        {/* Secciones dinámicas */}
        <div className="mt-4">
          {sectionActiva === "movimientos" && (
            <div className="w-full overflow-x-auto rounded-lg bg-[#0d1117] text-white p-6">
              <h2 className="text-xl font-bold mb-4">Movimientos Recientes</h2>
              <table className="min-w-full shadow-md rounded-lg">
                <thead className="text-sm">
                  <tr>
                    <th className="px-4 py-2 text-left">Fecha - Hora</th>
                    <th className="px-4 py-2 text-left">Tipo</th>
                    <th className="px-4 py-2 text-left">Descripción</th>
                    <th className="px-4 py-2 text-left">Categoría</th>
                    <th className="px-4 py-2 text-left">Método</th>
                    <th className="px-4 py-2 text-left">Monto</th>
                    <th className="px-4 py-2 text-left">Referencia</th>
                  </tr>
                </thead>
                <tbody>
                  {movements.map((item) => {
                    const auxiliar = getStatusMovements(item.type_movement);
                    return (
                      <tr
                        key={item.id}
                        className="text-sm border-t border-gray-700 hover:bg-gray-800 transition"
                      >
                        <td className="px-4 py-2">{item.date}</td>
                        <td className="px-4 py-2">
                          <span
                            className={`${auxiliar.bg_color} flex justify-center align-center rounded-sm font-semibold`}
                          >
                            {auxiliar.name}
                          </span>
                        </td>
                        <td className="px-4 py-2">{item.description}</td>
                        <td className="px-4 py-2">{item.category}</td>
                        <td className="px-4 py-2">{item.payment_method}</td>
                        <td>
                          <div className={`font-bold ${auxiliar.txt_color}`}>
                            {auxiliar.operator}$
                            {Intl.NumberFormat("es-CO").format(item.amount)}
                          </div>
                        </td>
                        <td className="px-4 py-2">{item.reference}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {sectionActiva === "auditoria" && (
            <div className="bg-[#0d1117] text-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-6">Auditoría de Caja</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* MÉTODO DE PAGO */}
                <div className="bg-[#161b22] p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">
                    Resumen por Método de Pago
                  </h3>
                  <div className="flex justify-between mb-2">
                    <span>Efectivo</span>
                    <span className="text-green-400 font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Transferencia</span>
                    <span className="text-green-400 font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Tarjeta</span>
                    <span className="text-green-400 font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cheque</span>
                    <span className="text-green-400 font-semibold">$0</span>
                  </div>
                </div>

                {/* INGRESOS POR CATEGORÍA */}
                <div className="bg-[#161b22] p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">
                    Ingresos por Categoría
                  </h3>
                  <div className="flex justify-between mb-2">
                    <span>Ventas</span>
                    <span className="text-green-400 font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Cobros</span>
                    <span className="text-green-400 font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Servicios</span>
                    <span className="text-green-400 font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Otros Ingresos</span>
                    <span className="text-green-400 font-semibold">$0</span>
                  </div>
                </div>

                {/* EGRESOS POR CATEGORÍA */}
                <div className="bg-[#161b22] p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">
                    Egresos por Categoría
                  </h3>
                  <div className="flex justify-between mb-2">
                    <span>Suministros</span>
                    <span className="text-red-400 font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Servicios</span>
                    <span className="text-red-400 font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Mantenimiento</span>
                    <span className="text-red-400 font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Otros Gastos</span>
                    <span className="text-red-400 font-semibold">$0</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {sectionActiva === "cierre" && (
            <div className="w-full overflow-x-auto rounded-lg bg-[#0d1117] text-white p-6">
              <h2 className="text-xl font-bold mb-4">Cierres Diarios</h2>
              <table className="min-w-full shadow-md rounded-lg">
                <thead className="text-sm">
                  <tr>
                    <th className="px-4 py-2 text-left">Fecha</th>
                    <th className="px-4 py-2 text-left">Saldo Inicial</th>
                    <th className="px-4 py-2 text-left">Ingresos</th>
                    <th className="px-4 py-2 text-left">Egresos</th>
                    <th className="px-4 py-2 text-left">Saldo Esperado</th>
                    <th className="px-4 py-2 text-left">Conteo Final</th>
                    <th className="px-4 py-2 text-left">Diferencia</th>
                  </tr>
                </thead>
                <tbody>
                  {closures.map((item) => {
                    const saldo_esperado =
                      item.saldoInicial + item.ingresos - item.expenses;

                    const saldo_final = item.conteoReal - saldo_esperado;

                    const auxiliar = getStatusDailyClosing(saldo_final);

                    return (
                      <tr
                        key={item.id}
                        className="text-sm border-t border-gray-700 hover:bg-gray-800 transition"
                      >
                        <td className="px-4 py-2">{item.date}</td>
                        <td className="px-4 py-2">
                          $
                          {Intl.NumberFormat("es-CO").format(item.saldoInicial)}
                        </td>
                        <td className="px-4 py-2 text-green-500">
                          ${Intl.NumberFormat("es-CO").format(item.ingresos)}
                        </td>
                        <td className="px-4 py-2 text-red-500">
                          ${Intl.NumberFormat("es-CO").format(item.expenses)}
                        </td>
                        <td className="px-4 py-2 font-bold">
                          ${Intl.NumberFormat("es-CO").format(saldo_esperado)}
                        </td>
                        <td className="px-4 py-2">
                          ${Intl.NumberFormat("es-CO").format(item.conteoReal)}
                        </td>
                        <td
                          className={`px-4 py-2 font-bold ${auxiliar.txt_color}`}
                        >
                          {auxiliar.operator}$
                          {Intl.NumberFormat("es-CO").format(
                            Math.abs(auxiliar.value)
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <AddMovements
        isOpen={modalAddIsOpen}
        onClose={() => setModalAddIsOpen(false)}
      ></AddMovements>

      <CloseDailyMovements
        isOpen={modalCloseDailyIsOpen}
        onClose={() => setModalCloseDailyIsOpen(false)}
      ></CloseDailyMovements>
    </>
  );
}

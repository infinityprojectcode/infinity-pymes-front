import AddMovements from "@fragments/movements/modal-add-movements/modal-add-movements.jsx";
import CloseDailyMovements from "@fragments/movements/modal-closedaily-movements/modal-closedaily-movements.jsx";
import { useState } from "react";

export default function ListMovements() {
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalCloseDailyIsOpen, setModalCloseDailyIsOpen] = useState(false);
  const [sectionActiva, setSectionActiva] = useState("movimientos");

  const movements = [
    {
      date: "2025-01-24 10:30",
      type_movement: "Ingreso",
      description: "Venta de productos electrónicos",
      category: "Ventas",
      payment_method: "Efectivo",
      amount: 1500,
      reference: "FAC-001",
    },
    {
      date: "2025-01-24 14:15",
      type_movement: "Egreso",
      description: "Compra de suministros de oficina",
      category: "Suministros",
      payment_method: "Transferencia",
      amount: -500,
      reference: "REC-001",
    },
    {
      date: "2025-01-24 16:45",
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
      saldoFinal: 6400,
      conteo: 6350,
      diferencia: -50,
    },
    {
      id: 2,
      date: "2025-01-24",
      saldoInicial: 6400,
      ingresos: 2800,
      expenses: 1900,
      saldoFinal: 7300,
      conteo: 7300,
      diferencia: 0,
    },
    {
      id: 3,
      date: "2025-01-25",
      saldoInicial: 7300,
      ingresos: 1500,
      expenses: 700,
      saldoFinal: 8100,
      conteo: 8000,
      diferencia: -100,
    },
    {
      id: 4,
      date: "2025-01-26",
      saldoInicial: 8100,
      ingresos: 2200,
      expenses: 1000,
      saldoFinal: 9300,
      conteo: 9350,
      diferencia: 50,
    },
  ];

  const getStatus = (status) => {
    if (status == "Atrasado") return { name: "Atrasado", color: "bg-red-500" };
    if (status == "Pendiente")
      return { name: "Pendiente", color: "bg-yellow-500" };
    return { name: "Pagado", color: "bg-green-500" };
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
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
              Nuevo Movimiento
            </button>

            <button
              onClick={() => setModalCloseDailyIsOpen(true)}
              className="flex items-center gap-2 border border-gray-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
              Cierre Diario
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Ingresos Hoy */}
          <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-400">Ingresos Hoy</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 17l6-6 4 4 8-8" />
              </svg>
            </div>
            <div className="mt-2">
              <h2 className="text-2xl font-bold text-green-500">$0.00</h2>
            </div>
          </div>

          {/* Egresos Hoy */}
          <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-400">Egresos Hoy</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-red-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 7l6 6 4-4 8 8" />
              </svg>
            </div>
            <div className="mt-2">
              <h2 className="text-2xl font-bold text-red-500">$0.00</h2>
            </div>
          </div>

          {/* Balance Hoy */}
          <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-400">Balance Hoy</span>
              <span className="text-gray-400 text-base font-medium">$</span>
            </div>
            <div className="mt-2">
              <h2 className="text-2xl font-bold text-green-500">$0.00</h2>
            </div>
          </div>

          {/* Movimientos Hoy */}
          <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 flex flex-col justify-between shadow">
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-400">Movimientos Hoy</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="mt-2">
              <h2 className="text-2xl font-bold text-white">0</h2>
            </div>
          </div>
        </div>

        <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-1 flex w-fit shadow">
          <button
            onClick={() => setSectionActiva("movimientos")}
            className={`p-2 rounded-md text-sm ${
              sectionActiva === "movimientos"
                ? "bg-gray-800 text-white"
                : "bg-transparent text-gray-300"
            }`}
          >
            Movimientos
          </button>
          <button
            onClick={() => setSectionActiva("auditoria")}
            className={`p-2 rounded-md text-sm ${
              sectionActiva === "auditoria"
                ? "bg-gray-800 text-white"
                : "bg-transparent text-gray-300"
            }`}
          >
            Auditoría
          </button>
          <button
            onClick={() => setSectionActiva("cierre")}
            className={`p-2 rounded-md text-sm ${
              sectionActiva === "cierre"
                ? "bg-gray-800 text-white"
                : "bg-transparent text-gray-300"
            }`}
          >
            Cierre Diario
          </button>
        </div>

        {/* Secciones dinámicas */}
        <div className="mt-4">
          {sectionActiva === "movimientos" && (
            <div className="w-full overflow-x-auto bg-[#0d1117] text-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Movimientos Recientes</h2>
              <div className="min-w-[680px]">
                {/* Encabezados */}
                <div className="grid grid-cols-7 text-sm text-gray-400 border-b border-gray-600 pb-2 px-4">
                  <div>Fecha/Hora</div>
                  <div>Tipo</div>
                  <div>Descripción</div>
                  <div>Categoría</div>
                  <div>Método</div>
                  <div>Monto</div>
                  <div>Referencia</div>
                </div>

                {/* Filas */}
                {movements.map((item) => {
                  const colorTipo =
                    item.type_movement === "Ingreso"
                      ? "bg-green-700"
                      : "bg-red-700";
                  const colorMonto =
                    item.amount >= 0 ? "text-green-500" : "text-red-500";
                  const montoFormateado =
                    item.amount >= 0
                      ? `+$${item.amount}.00`
                      : `-$${Math.abs(item.amount)}.00`;

                  return (
                    <div
                      key={item.id}
                      className="grid grid-cols-7 items-center text-sm text-white px-4 py-3 border-t border-gray-700 hover:bg-gray-800 transition"
                    >
                      <div>{item.date}</div>
                      <div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${colorTipo}`}
                        >
                          {item.type_movement}
                        </span>
                      </div>
                      <div>{item.description}</div>
                      <div>{item.category}</div>
                      <div>{item.payment_method}</div>
                      <div className={`font-bold ${colorMonto}`}>
                        {montoFormateado}
                      </div>
                      <div>{item.reference}</div>
                    </div>
                  );
                })}
              </div>
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
                    <span className="text-green-400 font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Transferencia</span>
                    <span className="text-green-400 font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Tarjeta</span>
                    <span className="text-green-400 font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cheque</span>
                    <span className="text-green-400 font-semibold">$0.00</span>
                  </div>
                </div>

                {/* INGRESOS POR CATEGORÍA */}
                <div className="bg-[#161b22] p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">
                    Ingresos por Categoría
                  </h3>
                  <div className="flex justify-between mb-2">
                    <span>Ventas</span>
                    <span className="text-green-400 font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Cobros</span>
                    <span className="text-green-400 font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Servicios</span>
                    <span className="text-green-400 font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Otros Ingresos</span>
                    <span className="text-green-400 font-semibold">$0.00</span>
                  </div>
                </div>

                {/* EGRESOS POR CATEGORÍA */}
                <div className="bg-[#161b22] p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">
                    Egresos por Categoría
                  </h3>
                  <div className="flex justify-between mb-2">
                    <span>Suministros</span>
                    <span className="text-red-400 font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Servicios</span>
                    <span className="text-red-400 font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Mantenimiento</span>
                    <span className="text-red-400 font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Otros Gastos</span>
                    <span className="text-red-400 font-semibold">$0.00</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {sectionActiva === "cierre" && (
            <div className="w-full overflow-x-auto bg-[#0d1117] text-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Cierres Diarios</h2>
              <div className="min-w-[680px]">
                {/* Encabezados */}
                <div className="grid grid-cols-7 text-sm text-gray-400 border-b border-gray-600 pb-2 px-4">
                  <div>Fecha</div>
                  <div>Saldo Inicial</div>
                  <div>Ingresos</div>
                  <div>Egresos</div>
                  <div>Saldo Final</div>
                  <div>Conteo</div>
                  <div>Diferencia</div>
                </div>

                {/* Filas */}
                {closures.map((cierre) => {
                  const colorIngreso = "text-green-500";
                  const colorEgreso = "text-red-500";
                  const colorDiferencia =
                    cierre.diferencia >= 0 ? "text-green-500" : "text-red-500";
                  const diferenciaFormateada =
                    cierre.diferencia >= 0
                      ? `+$${cierre.diferencia}.00`
                      : `-$${Math.abs(cierre.diferencia)}.00`;

                  return (
                    <div
                      key={cierre.id}
                      className="grid grid-cols-7 items-center text-sm text-white px-4 py-3 border-t border-gray-700 hover:bg-gray-800 transition"
                    >
                      <div>{cierre.date}</div>
                      <div>${cierre.saldoInicial.toFixed(2)}</div>
                      <div className={colorIngreso}>
                        ${cierre.ingresos.toFixed(2)}
                      </div>
                      <div className={colorEgreso}>
                        ${cierre.expenses.toFixed(2)}
                      </div>
                      <div className="font-bold">
                        ${cierre.saldoFinal.toFixed(2)}
                      </div>
                      <div>${cierre.conteo.toFixed(2)}</div>
                      <div className={`font-bold ${colorDiferencia}`}>
                        {diferenciaFormateada}
                      </div>
                    </div>
                  );
                })}
              </div>
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

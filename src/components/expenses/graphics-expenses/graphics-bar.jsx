import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";
import { useAppContext } from "@context/app/app-provider.jsx";
import { useAuth } from "@context/auth/auth-provider";
import axios from "axios";
import { Download } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function GraphicsBar() {
  const context = useAppContext();
  const contextAuth = useAuth();
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;
  const [chartOneExpenses, setChartOneExpenses] = useState([]);

  function getChartOneExpenses() {
    axios
      .get(`${urlApi}expenses/g/expenses-chart-one`, {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        params: { business_id: contextAuth.user.business_id },
      })
      .then((response) => {
        setChartOneExpenses(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getChartOneExpenses();
  }, []);

  const data = {
    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    datasets: [
      {
        label: "Ingresos",
        data: chartOneExpenses.map((item) => item.ingresos),
        backgroundColor: "#10b981",
        borderRadius: 4,
        barThickness: 15,
      },
      {
        label: "Gastos",
        data: chartOneExpenses.map((item) => item.gastos),
        backgroundColor: "#ef4444",
        borderRadius: 4,
        barThickness: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        display: false,
      },
      legend: { display: false },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        callbacks: {
          label: (ctx) =>
            `${ctx.dataset.label}: $${Intl.NumberFormat("es-CO").format(
              ctx.parsed.y
            )}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 50000,
        ticks: {
          stepSize: 10000,
          color: "rgba(255, 255, 255, 0.7)",
          font: {
            size: 12,
            weight: "bold",
          },
          callback: (value) => `$${Intl.NumberFormat("es-CO").format(value)}`,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      x: {
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
        },
      },
    },
  };

  return (
    <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 shadow col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-4">
      {/* Título */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-white text-left">
          Ingresos y Gastos
        </h1>
        <button
          className="flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 border h-10 px-4 py-2 border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent cursor-pointer"
          disabled
        >
          <Download className="h-4 w-4 mr-2" /> Exportar
        </button>
      </div>
      {/* Contenedor del gráfico */}
      <div className="flex justify-center items-center w-full h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

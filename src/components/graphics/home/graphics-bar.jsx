import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function GraphicsBar() {
  const data = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Ventas",
        data: [4000, 3000, 2000, 2800, 0, 2390],
        backgroundColor: "#4287f5",
      },
      {
        label: "Compras",
        data: [2500, 1500, 10000, 3800, 0, 3800],
        backgroundColor: "rgb(239, 68, 68)",
      },
      {
        label: "Ganancias",
        data: [1500, 1500, -8000, -1000, 0, -1410],
        backgroundColor: "rgb(16, 185, 129)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
        min: -10000,
        max: 10000,
        ticks: {
          stepSize: 5000,
          color: "rgba(255, 255, 255, 0.7)",
          font: {
            size: 12,
            weight: "bold",
          },
          callback: (value) => value.toLocaleString(),
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
    plugins: {
      datalabels: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y}`,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 shadow col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-4">
      {/* Título alineado a la izquierda */}
      <h1 className="text-xl font-bold text-white text-left">
        Ventas vs Compras vs Ganancias
      </h1>

      {/* Contenedor del gráfico centrado */}
      <div className="flex justify-center items-center w-full h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

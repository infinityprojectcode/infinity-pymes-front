import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function GraphicsBar() {
  const data = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        label: "Ingresos",
        data: [15000, 18500, 17000, 19500, 17000, 20000],
        backgroundColor: "#10b981", // verde
        borderRadius: 4,
        barThickness: 30,
      },
      {
        label: "Gastos",
        data: [9000, 9500, 9200, 9700, 9300, 9800],
        backgroundColor: "#ef4444", // rojo
        borderRadius: 4,
        barThickness: 30,
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
          label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 20000,
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
  };

  return (
    <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 shadow col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-4">
      {/* Título alineado a la izquierda */}
      <h1 className="text-xl font-bold text-white text-left">
        Ingresos y Gastos
      </h1>

      {/* Contenedor del gráfico centrado */}
      <div className="flex justify-center items-center w-full h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

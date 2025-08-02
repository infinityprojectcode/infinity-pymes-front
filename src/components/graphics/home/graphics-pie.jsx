import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function GraphicsPie() {
  const data = {
    labels: ["Electrónicos", "Accesorios", "Muebles", "Otros"],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: ["#4285F4", "#10B981", "#F59E0B", "#EF4444"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 25, // espacio interior para evitar corte
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.parsed}%`,
        },
      },
      datalabels: {
        clip: false,
        color: (ctx) => ctx.dataset.backgroundColor[ctx.dataIndex],
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return `${label} ${value}%`;
        },
        align: "end",
        anchor: "end",
        offset: 10,
        font: {
          weight: "bold",
          size: 12,
        },
      },
    },
  };

  return (
    <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-4 shadow col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-4">
      <h1 className="text-xl font-bold text-white text-left">
        Distribución por Categorías
      </h1>

      <div className="w-full flex justify-center items-center h-full">
        <div className="w-full h-48 ">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

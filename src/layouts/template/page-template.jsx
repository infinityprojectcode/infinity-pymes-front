import { Link } from "react-router-dom";
import Sidebar from "../sidebar/sidebar.jsx"; // Importa tu Sidebar

export default function PageTemplate({ title, children }) {
  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row">
      {/* Sidebar responsivo */}
      <Sidebar />

      {/* Contenido principal */}
      <div className="w-full h-full overflow-y-auto bg-400 p-4">
        <h1 className="text-100 text-2xl mb-4">{title}</h1>
        {children}
      </div>
    </div>
  );
}

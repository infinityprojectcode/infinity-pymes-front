import { useState } from "react";

export default function ListAppointment() {
  return (
    <div className="bg-[#0d1117] text-white rounded-lg p-4 mt-4">
      <h2 className="text-lg font-semibold mb-6">Citas para 2025-07-25</h2>
      <div className="flex items-center justify-center">
        <p className="text-center text-md text-gray-400">
          No hay citas programadas para esta fecha
        </p>
      </div>
    </div>
  );
}

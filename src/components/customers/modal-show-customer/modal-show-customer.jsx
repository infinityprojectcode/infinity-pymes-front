import Modal from "react-modal";
import { useState } from "react";

export default function ShowCustomer({ isOpen, onClose }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Agregar Clientes"
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
          content: {
            width: "fit-content",
            height: "fit-content",
            margin: "auto",
            padding: "0",
            border: "none",
            backgroundColor: "transparent",
          },
        }}
      >
        <div className="flex flex-col gap-4 bg-slate-900 text-white p-6 rounded-lg w-[400px]">
          <div className="flex justify-between items-center mb-4">
            <h1 className="font-semibold text-lg">Detalles del cliente</h1>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-red-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col">
              <h3>Nombre de pila</h3>
              <p></p>
            </div>
            <div className="flex flex-col">
              <h3>Apellido</h3>
              <p></p>
            </div>
          </div>
          <div className="flex flex-col">
            <h3>Email</h3>
            <p></p>
          </div>
          <div className="flex flex-col">
            <h3>Telefono</h3>
            <p></p>
          </div>
          <div className="flex flex-col">
            <h3>Dirección</h3>
            <p></p>
          </div>
          <div className="flex flex-col">
            <h3>Total gastado</h3>
            <p></p>
          </div>
          <div className="flex flex-col">
            <h3>Productos comprados</h3>
            <p></p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

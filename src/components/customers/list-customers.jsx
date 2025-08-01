/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { v4 as crypto } from "uuid";
import CustomerIcon from "@assets/icons/customer-icon";
import CurrencyDolarIcon from "@assets/icons/currency-dolar-icon";
import AddCustomer from "./modal-add-customer/modal-add-customer.jsx";
import ShowCustomer from "./modal-show-customer/modal-show-customer.jsx";
import List from "./list-data/list-data.jsx";

export default function ListCustomers() {

  const [idCustomer, setIdCustomer] = useState("");
  const [firstNameCustomer, setFirstNameCustomer] = useState("");
  const [lastNameCustomer, setLastNameCustomer] = useState("");
  const [nameCustomer, setNameCustomer] = useState("");
  const [phoneCustomer, setPhoneCustomer] = useState("");
  const [emailCustomer, setEmailCustomer] = useState("");
  const [directionCustomer, setDirectionCustomer] = useState("");
  const [listProductPerCustomer, setListProductPerCustomer] = useState([]);

  const [selectedCustomer, setSelectedCustomer] = useState(null);


  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [showInfoCustomer, setShowInfoCustomer] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showIsOpen, setShowIsOpen] = useState(false);

  {/*
  function clearFields() {
    setNameCustomer("");
    setLastNameCustomer("");
    setPhoneCustomer("");
    setEmailCustomer("");
    setDirectionCustomer("");
  }

  const handleAddCustomer = () => {
    // setListCustomer((prev) => [
    //   ...prev,
    //   {
    //     id: crypto.randomUUID,
    //     name: nameCustomer,
    //     category: categoryCustomer,
    //     price: priceCustomer,
    //     stock: stockCustomer,
    //   },
    // ]);
  };

  const handleSaveCustomer = () => {
    const customer = List.find(
      (customer) => customer.id === idCustomer
    );
    customer.name = nameCustomer;
    setListCustomer(List);
    setShowAddCustomer(false);
    clearFields();
  };

  const handleShowCustomer = (id) => {
    const customer = listCustomer.find((customer) => customer.id === id);
    setIdCustomer(customer.id);
    setFirstNameCustomer(customer.first_name);
    setLastNameCustomer(customer.last_name);
    setPhoneCustomer(customer.phone);
    setEmailCustomer(customer.email);
    setDirectionCustomer(customer.direction);
    setShowInfoCustomer(!showInfoCustomer);
    setListProductPerCustomer(customer.products || []);
  };

  const handleDeleteCustomer = (id) => {
    const customers = listCustomer.filter((customer) => customer.id !== id);
    setListCustomer(customers);
  };

  useEffect(() => {
    if (showAddCustomer && nameCustomer === "") {
      setShowAddCustomer(!showAddCustomer);
    } else {
      setShowAddCustomer(false);
    }
  }, [listCustomer]);*/}

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-white">
            <h1 className="text-3xl font-bold mb-1">Clientes</h1>
            <p className="text-gray-400 mb-6">
              Gestione sus relaciones con los clientes y realice un seguimiento
              de sus gastos.
            </p>
          </div>
          <button
            onClick={() => setModalIsOpen(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded-lg transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            <span>Agregar nuevo cliente</span>
          </button>
        </div>
        <div className="relative w-full max-w-sm mb-4">
          <input
            type="text"
            placeholder="Buscar clientes..."
            className="w-full pl-10 pr-4 py-2 text-white rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-sm"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
            />
          </svg>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {List.map((customer) => (
            <div
              key={customer.id}
              className="bg-slate-900 text-white p-4 rounded-lg shadow-md w-full max-w-md space-y-2"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-bold">
                    {customer.first_name}
                    {customer.last_name}
                  </h2>
                  <p className="text-sm text-slate-400">{customer.email}</p>
                </div>
                <div className="bg-green-700 text-sm px-3 py-1 rounded-full font-medium">
                  ${customer.total_product_price.toLocaleString("es-CO")}
                </div>
              </div>
              <div className="flex items-center text-slate-400 text-sm gap-2">
                <span>+57 {customer.phone}</span>
              </div>
              <div className="flex items-center text-slate-400 text-sm gap-2">
                <span>{customer.direction}</span>
              </div>
              <button
                onClick={() => {setSelectedCustomer(customer);setShowIsOpen(true);}}
                className="mt-2 w-full border border-slate-700 text-white py-2 px-4 rounded flex justify-center items-center gap-2 hover:bg-slate-800 transition"
              >
                <span className="font-medium">Ver detalles</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <AddCustomer
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      ></AddCustomer>
      <ShowCustomer
        isOpen={showIsOpen}
        onClose={() => setShowIsOpen(false)}
        customer={selectedCustomer}
      ></ShowCustomer>
    </>
  );
}

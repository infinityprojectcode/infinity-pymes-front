/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { v4 as crypto } from "uuid";
import CustomerIcon from "@assets/icons/customer-icon";
import CurrencyDolarIcon from "@assets/icons/currency-dolar-icon";

export default function ListCustomers() {
  const list = [
    {
      id: crypto(),
      icon: <CustomerIcon />,
      first_name: "Daniel",
      last_name: "Muñoz",
      phone: 3002852755,
      email: "daniel2002@gmail.com",
      direction: "Calle falsa 123",
      status_count: true,
      time_registered: "12/12/2022",
      total_product_price: 500000,
      products: [
        {
          id: crypto(),
          name: "Gaseosa",
          category: "Gaseosas",
          price: "5000",
          quantity: 15,
        },
        {
          id: crypto(),
          name: "Gaseosa",
          category: "Gaseosas",
          price: "5000",
          quantity: 15,
        },
        {
          id: crypto(),
          name: "Gaseosa",
          category: "Gaseosas",
          price: "5000",
          quantity: 15,
        },
        {
          id: crypto(),
          name: "Gaseosa",
          category: "Gaseosas",
          price: "5000",
          quantity: 15,
        },
        {
          id: crypto(),
          name: "Gaseosa",
          category: "Gaseosas",
          price: "5000",
          quantity: 15,
        },
      ],
    },
    {
      id: crypto(),
      icon: <CustomerIcon />,
      first_name: "Daniel",
      last_name: "Muñoz",
      phone: 3002852755,
      email: "daniel2002@gmail.com",
      direction: "Calle falsa 123",
      status_count: false,
      time_registered: "12/12/2022",
      total_product_price: 0,
    },
    {
      id: crypto(),
      icon: <CustomerIcon />,
      first_name: "Daniel",
      last_name: "Muñoz",
      phone: 3002852755,
      email: "daniel2002@gmail.com",
      direction: "Calle falsa 123",
      status_count: true,
      time_registered: "12/12/2022",
      total_product_price: 80000,
      products: [
        {
          id: crypto(),
          name: "Gaseosa",
          category: "Gaseosas",
          price: "5000",
          quantity: 15,
        },
        {
          id: crypto(),
          name: "Gaseosa",
          category: "Gaseosas",
          price: "5000",
          quantity: 15,
        },
        {
          id: crypto(),
          name: "Gaseosa",
          category: "Gaseosas",
          price: "5000",
          quantity: 15,
        },
        {
          id: crypto(),
          name: "Gaseosa",
          category: "Gaseosas",
          price: "5000",
          quantity: 15,
        },
        {
          id: crypto(),
          name: "Gaseosa",
          category: "Gaseosas",
          price: "5000",
          quantity: 15,
        },
      ],
    },
    {
      id: crypto(),
      icon: <CustomerIcon />,
      first_name: "Daniel",
      last_name: "Muñoz",
      phone: 3002852755,
      email: "daniel2002@gmail.com",
      direction: "Calle falsa 123",
      status_count: false,
      time_registered: "12/12/2022",
      total_product_price: 0,
    },
  ];

  const [idCustomer, setIdCustomer] = useState("");
  const [firstNameCustomer, setFirstNameCustomer] = useState("");
  const [lastNameCustomer, setLastNameCustomer] = useState("");
  const [nameCustomer, setNameCustomer] = useState("");
  const [phoneCustomer, setPhoneCustomer] = useState("");
  const [emailCustomer, setEmailCustomer] = useState("");
  const [directionCustomer, setDirectionCustomer] = useState("");
  const [listProductPerCustomer, setListProductPerCustomer] = useState([]);

  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [showInfoCustomer, setShowInfoCustomer] = useState(false);
  const [listCustomer, setListCustomer] = useState(list);

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
    const customer = listCustomer.find(
      (customer) => customer.id === idCustomer
    );
    customer.name = nameCustomer;
    setListCustomer(listCustomer);
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
  }, [listCustomer]);

  return (
    <div>
      {!showInfoCustomer && (
        <button
          className="bg-blue-500 rounded-lg p-2 text-white"
          onClick={() => setShowAddCustomer(!showAddCustomer)}
        >
          Añadir nuevo
        </button>
      )}
      {!showAddCustomer && !showInfoCustomer ? (
        <div className="w-full h-full pt-5">
          <ul className="[&>li>h1]:font-black flex flex-row flex-wrap gap-4 [&>li]:rounded-lg [&>li]:p-4">
            {listCustomer.map((item, index) => (
              <li key={index} className="bg-200">
                <div className="flex flex-col items-start justify-between gap-4">
                  <div className="flex gap-2">
                    <span className="text-100">
                      {item.first_name} {item.last_name}
                    </span>
                  </div>
                  {item.status_count ? (
                    <div className="flex items-start">
                      <CurrencyDolarIcon
                        className={`${item.status_count ? "text-500" : "text-600"}`}
                      />{" "}
                      <span
                        className={`${item.status_count ? "text-500" : "text-600"}`}
                      >
                        {item.total_product_price}
                      </span>
                    </div>
                  ) : (
                    <div className="flex">
                      <CurrencyDolarIcon
                        className={`${item.status_count ? "text-500" : "text-600"}`}
                      />{" "}
                      <span
                        className={`${item.status_count ? "text-500" : "text-600"}`}
                      >
                        {item.total_product_price}
                      </span>
                    </div>
                  )}
                  <div className="flex gap-2">
                    <span className="text-200">{item.status_count}</span>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between">
                      <button
                        className="text-400"
                        onClick={() => handleShowCustomer(item.id)}
                      >
                        Ver
                      </button>
                    </div>
                  </div>
                  {/* <div className="flex gap-2">
                    <button
                      onClick={() => handleEditCustomer(item.id)}
                      className="bg-blue-500 rounded-lg p-2 text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-pencil"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                        <path d="M13.5 6.5l4 4" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDeleteCustomer(item.id)}
                      className="bg-red-500 rounded-lg p-2 text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-trash"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </button>
                  </div> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : showAddCustomer ? (
        <div className="flex flex-col pt-5">
          <div className="flex flex-row">
            <div className="w-2/5 grid">
              <div>
                <label className="text-100">
                  Ingresa los datos del cliente
                </label>
              </div>
              <div className="pt-2">
                <label className="text-100">Nombre:</label>
                <input
                  className="w-full p-2 rounded-lg outline-none"
                  type="text"
                  value={nameCustomer}
                  placeholder="Nombre"
                  onChange={(e) => setNameCustomer(e.target.value)}
                />
              </div>
              <div className="pt-2">
                <label className="text-100">Apellido:</label>
                <input
                  className="w-full p-2 rounded-lg outline-none"
                  type="text"
                  value={lastNameCustomer}
                  placeholder="Apellido"
                  onChange={(e) => setLastNameCustomer(e.target.value)}
                />
              </div>
              <div className="pt-2">
                <label className="text-100">Email:</label>
                <input
                  className="w-full p-2 rounded-lg outline-none"
                  type="email"
                  value={emailCustomer}
                  placeholder="Email"
                  onChange={(e) => setEmailCustomer(e.target.value)}
                />
              </div>
              <div className="pt-2">
                <label className="text-100">Direccion:</label>
                <input
                  className="w-full p-2 rounded-lg outline-none"
                  type="text"
                  value={directionCustomer}
                  placeholder="Direccion"
                  onChange={(e) => setDirectionCustomer(e.target.value)}
                />
              </div>
              <div className="pt-2">
                <label className="text-100">Telefono:</label>
                <input
                  className="w-full p-2 rounded-lg outline-none"
                  type="text"
                  value={phoneCustomer}
                  placeholder="Telefono"
                  onChange={(e) => setPhoneCustomer(e.target.value)}
                />
              </div>
              <div className="pt-2 flex gap-8">
                {/* <div>
                  <label className="text-100">Precio:</label>
                  <input
                    className="w-full p-2 rounded-lg outline-none"
                    type="number"
                    placeholder="$20.000"
                    value={priceCustomer}
                    onChange={(e) => setPriceCustomer(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-100">Cantidad:</label>
                  <input
                    className="w-full p-2 rounded-lg outline-none"
                    type="number"
                    value={stockCustomer}
                    onChange={(e) => setStockCustomer(e.target.value)}
                  />
                </div> */}
              </div>
            </div>
          </div>
          {idCustomer !== "" && nameCustomer !== "" ? (
            <button
              className="bg-blue-500 rounded-lg p-2 text-white mt-4"
              onClick={() => handleSaveCustomer()}
            >
              Editar
            </button>
          ) : (
            <button
              className="bg-blue-500 rounded-lg p-2 text-white mt-4"
              onClick={() => handleAddCustomer()}
            >
              Añadir
            </button>
          )}
        </div>
      ) : showInfoCustomer ? (
        <div>
          <div className="grid">
            <label className="text-100">Nombre:</label>
            <span className="text-100">{firstNameCustomer}</span>
            <label className="text-100">Apellido</label>
            <span className="text-100">{lastNameCustomer}</span>
            <label className="text-100">Email</label>
            <span className="text-100">{emailCustomer}</span>
            <label className="text-100">Dirección</label>
            <span className="text-100">{directionCustomer}</span>
            <label className="text-100">Teléfono</label>
            <span className="text-100">{phoneCustomer}</span>
            <label className="text-100">Productos</label>
            <ul className="[&>li>h1]:font-black flex flex-row flex-wrap gap-4 [&>li]:rounded-lg [&>li]:p-4">
              {listProductPerCustomer.length > 0 &&
                listProductPerCustomer.map((item, index) => (
                  <li key={index} className="bg-200">
                    <div className="flex flex-col items-start justify-between gap-4">
                      <div className="flex gap-2">
                        <span className="text-100">{item.name}</span>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            <button
              className="bg-blue-500 rounded-lg p-2 text-white mt-4"
              onClick={() => setShowInfoCustomer(!showInfoCustomer)}
            >
              Cerrar
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

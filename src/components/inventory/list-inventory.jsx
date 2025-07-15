/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import bebidas from "@assets/images/bebida.webp";
import { v4 as crypto } from "uuid";
import AddInventory from "./modal-add-inventory/modal-add-inventory.jsx";

export default function ListInventory() {
  
  const list = [
    {
      id: crypto(),
      name: "Cerveza",
      category: "Bebidas",
      price: "5000",
      stock: 10,
    },
    {
      id: crypto(),
      name: "Licor",
      category: "Licores",
      price: "5000",
      stock: 3,
    },
    {
      id: crypto(),
      name: "Gaseosa",
      category: "Gaseosas",
      price: "5000",
      stock: 0,
    },
  ];

  const [idProduct, setIdProduct] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [stockProduct, setStockProduct] = useState("");
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [listProduct, setListProduct] = useState(list);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function clearFields() {
    setNameProduct("");
    setCategoryProduct("");
    setPriceProduct("");
    setStockProduct("");
  }

  const getStatus = (stock) => {
    if (stock == 0) return { name: "Agotado", color: "bg-red-500" };
    if (stock <= 5) return { name: "Stock bajo", color: "bg-yellow-500" };
    return { name: "En stock", color: "bg-green-500" };
  };

  const handleAddProduct = () => {
    setListProduct((prev) => [
      ...prev,
      {
        id: crypto.randomUUID,
        name: nameProduct,
        category: categoryProduct,
        price: priceProduct,
        stock: stockProduct,
      },
    ]);
  };

  const handleSaveProduct = () => {
    const product = listProduct.find((product) => product.id === idProduct);
    product.name = nameProduct;
    product.category = categoryProduct;
    product.price = priceProduct;
    product.stock = stockProduct;
    setListProduct(listProduct);
    setShowAddProduct(false);
    clearFields();
  };

  const handleCategory = (value) => {
    setCategoryProduct(value);
  };

  const handleEditProduct = (id) => {
    const product = listProduct.find((product) => product.id === id);
    setIdProduct(product.id);
    setNameProduct(product.name);
    setCategoryProduct(product.category);
    setPriceProduct(product.price);
    setStockProduct(product.stock);
    setShowAddProduct(true);
  };

  const handleDeleteProduct = (id) => {
    const products = listProduct.filter((product) => product.id !== id);
    setListProduct(products);
  };

  useEffect(() => {
    if (showAddProduct && nameProduct === "") {
      setShowAddProduct(!showAddProduct);
    } else {
      setShowAddProduct(false);
    }
  }, [listProduct]);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-white">
            <h1 className="text-3xl font-bold mb-1">Inventario</h1>
            <p className="text-gray-400 mb-6">
              Gestione su inventario de productos y los niveles de stock.
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
            <span>Agregar nuevo producto</span>
          </button>
        </div>
        <div className="relative w-full max-w-sm mb-4">
          <input
            type="text"
            placeholder="Buscar productos..."
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
        <div className="w-full overflow-x-auto rounded-lg border border-gray-700  bg-gray-900 text-white p-3">
          <h1 className="text-2xl font-bold mb-1 ">Products (5)</h1>
          {/* Encabezado */}
          <div className="grid grid-cols-6 text-sm font-semibold px-4 py-3">
            <div>Nombre del producto</div>
            <div>Categoría</div>
            <div>Precio</div>
            <div>Cantidad</div>
            <div>Estado</div>
            <div>Acciones</div>
          </div>

          {/* Contenido dinámico */}
          {listProduct.map((item) => {
            const auxiliar = getStatus(item.stock);
            return (
              <div
                key={item.id}
                className="grid grid-cols-6 items-center text-white px-4 py-3 border-t border-gray-700 hover:bg-gray-800 transition"
              >
                <div className="truncate">{item.name}</div>
                <div>{item.category}</div>
                <div>${item.price}</div>
                <div>{item.stock}</div>
                <div
                  className={`${auxiliar.color} w-fit px-2 text-white text-center font-semibold rounded-lg`}
                >
                  {auxiliar.name}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditProduct(item.id)}
                    className=" text-white rounded-md text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                      <path d="m15 5 4 4" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDeletProduct(item.id)}
                    className="rounded-md text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-red-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M10 11v6" />
                      <path d="M14 11v6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                      <path d="M3 6h18" />
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AddInventory
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      ></AddInventory>
    </>
  );
}

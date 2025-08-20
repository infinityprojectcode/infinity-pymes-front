import ImagenFondo from "@assets/images/ImagenConVector.jpg";
import { useAppContext } from "@context/app/app-provider.jsx";
import { useEffect, useState, useContext } from "react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

function Signup() {
  const context = useAppContext();
  const urlApi = context.urlApi;
  const apiKey = context.apiKey;

  async function fetchRegister() {
    let res = false;
    try {
      const response = await axios.post(
        `${urlApi}suppliers/i/orders/1`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey,
          },
        }
      );

      if (response.data.length > 0) {
        setListOrders(response.data);
        setCopylistOrders(response.data);
        res = true;
      }
    } catch {
      res = false;
    }
  }

  return (
    <div className="flex flex-col gap-4 md:gap-0 justify-center md:flex-row-reverse h-screen w-full bg-gradient-to-r from-slate-700 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center w-full">
        <img
          className="absolute inset-0 object-cover h-full w-full -z-10"
          src={ImagenFondo}
          alt="Background"
        />
      </div>
      <div className="relative inset-0 flex flex-col gap-1 md:gap-6 items-center justify-center md:w-2/3 bg-transparent">
        <div className="grid place-content-center">
          <h1 className=" text-white font-bold text-5xl text-center decoration-inherit ">
            Infinity Pymes
          </h1>
        </div>
        <div className="grid">
          <div className="grid">
            <p className="text-white font-normal text-lg text-center">
              Administra tu negocio de una manera facil e intuitiva
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center md:w-2/5 bg-transparent md:bg-white">
        <div className="flex flex-col items-center md:items-start justify-around w-full h-full px-8">
          <section className=" bg-transparent md:bg-white text-white md:text-black md:bg-none rounded-lg w-4/5 md:w-full">
            <div className="flex flex-col w-full gap-3">
              <div className="w-full">
                <h1 className="text-white md:text-black text-center md:text-start text-4xl decoration-inherit font-bold ">
                  Registrate
                </h1>
              </div>
              <div className="grid">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium text-gray-900 text-white md:text-black"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="text"
                  placeholder="Nombre completo"
                  className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-full outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="grid">
                <label className="text-lg font-medium">Correo electronico</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Correo electronico"
                ></input>
              </div>
              <div className="grid">
                <label className="text-lg font-medium">Negocio</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username"
                ></input>
              </div>
              <div className="grid">
                <label className="text-lg font-medium">Contraseña</label>
                <input
                  type="password"
                  autoComplete="off"
                  name="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                ></input>
              </div>
              <div className="grid">
                <Link
                  to="/"
                  className="text-white md:text-gray-800 hover:text-blue-700"
                >
                  Ya tengo una cuenta
                </Link>
                <button
                  type="submit"
                  className="my-4 text-white hover:cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2 
                  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Registrar
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Signup;

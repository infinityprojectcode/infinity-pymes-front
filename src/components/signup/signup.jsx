import ImagenFondo from "@assets/images/ImagenConVector.jpg";
import { useAppContext } from "@context/app/app-provider.jsx";
import { useEffect, useState, useContext } from "react";
import { toast } from "sonner";
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
    <div className="h-screen w-full relative">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* <img className='absolute inset-0 object-cover h-full w-full' src='https://wallpapercave.com/wp/wp3172267.jpg' alt='Background' /> */}
        <img
          className="absolute inset-0 object-cover h-full w-full"
          src={ImagenFondo}
          alt="Background"
        />
      </div>
      <div className="grid place-content-center h-screen w-full z-90">
        <div className="flex min-h-fit w-full px-30 z-10 rounded-xl bg-white">
          <section className="h-full w-full rounded-[1.7rem] border border-white p-4 ">
            <div className="flex flex-col w-full place-content-center">
              <div className="w-full mb-4">
                <h1 className=" text-black text-center text-3xl decoration-inherit font-medium ">
                  Registrate
                </h1>
              </div>
              <div className="grid m-2">
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  name="text"
                  placeholder="Nombre completo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="grid m-2">
                <label className="text-lg font-base">Correo electronico</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Correo electronico"
                ></input>
              </div>
              <div className="grid m-2">
                <label className="text-lg font-base">Negocio</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username"
                ></input>
              </div>
              <div className="grid m-2">
                <label className="text-lg font-base">Contraseña</label>
                <input
                  type="password"
                  autoComplete="off"
                  name="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                ></input>
              </div>
              <div className="grid">
                <button
                  type="submit"
                  className="my-8 text-white hover:cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2 
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

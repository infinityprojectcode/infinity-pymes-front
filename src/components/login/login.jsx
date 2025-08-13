import { Link } from "react-router-dom";
import ImagenFondo from "@assets/images/ImagenConVector.jpg";

export default function Begin() {
  return (
    <div className="flex flex-col justify-center md:flex-row-reverse h-screen w-full bg-gradient-to-r from-slate-700 relative overflow-hidden">
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
        <div className="flex flex-col items-center justify-around w-full h-full px-8 py-4">
          <section className="p-4 bg-gradient-to-b from-[#00003e] to-[#020a20] md:bg-white text-white md:text-black md:bg-none rounded-lg">
            <h1 className="text-4xl font-bold pb-2 text-center md:text-left"> Iniciar sesión</h1>
            <div className="pb-2 text-center md:text-left">
              <p className="text-2xl font-light">Inicia sesión en tu cuenta.</p>
              <p className="text-2xl font-light">
                Si no tienes cuenta, puedes registrarte aquí.
              </p>
            </div>
            <form className="h-full text-white md:text-gray-900">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium"
                >
                  Usuario
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg font-medium"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="password"
                  required
                />
              </div>
              <div className="flex items-start mb-6">
                <Link to="#" className="text-white md:text-gray-800 hover:text-blue-700">
                  Olvidaste tu contraseña?
                </Link>
                <Link
                  to="/signup"
                  className="ml-auto text-white md:text-gray-800 hover:text-blue-700"
                >
                  Registrate
                </Link>
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-white md:text-gray-800 dark:text-black"
                >
                  Recordarme
                </label>
              </div>
              <Link to="/home">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2
                                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Iniciar Sesion
                </button>
              </Link>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import ImagenFondo from "@assets/images/ImagenConVector.jpg";

export default function Begin() {
  return (
    <div className="flex h-screen w-full bg-gradient-to-r from-slate-700 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center w-full">
        <img
          className="absolute inset-0 object-cover h-full w-full -z-10"
          src={ImagenFondo}
          alt="Background"
        />
      </div>
      <div className="relative flex flex-col items-center w-2/5 bg-white">
        <div className="flex flex-col items-center justify-around w-full h-full p-8">
          <section className="pl-4 pr-4">
            <h1 className="text-4xl font-bold pb-2"> Iniciar sesión</h1>
            <div className="pb-2">
              <p className="text-2xl font-light">Inicia sesión en tu cuenta.</p>
              <p className="text-2xl font-light">
                Si no tienes cuenta, puedes registrarte aquí.
              </p>
            </div>
            <form className="h-full">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
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
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-black"
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
                <Link to="#" className="text-gray-800 hover:text-blue-700">
                  Olvidaste tu contraseña?
                </Link>
                <Link
                  to="/signup"
                  className="ml-auto text-gray-800 hover:text-blue-700"
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
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Recordarme
                </label>
              </div>
              <Link to="/config">
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
      <div className="relative inset-0 flex flex-col gap-6 items-center justify-center w-2/3 bg-transparent">
        <div className="grid place-content-center">
          <h1 className=" text-white font-bold text-5xl text-center decoration-inherit ">
            Infinit Pymes
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
    </div>
  );
}

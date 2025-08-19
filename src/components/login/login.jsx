import { generateEphemeralKeyPair, decryptEncryptedBlob } from "../../utils/crypto/handle-crypto";
import ImagenFondo from "@assets/images/ImagenConVector.jpg";
import { useAuth } from "@context/auth/auth-provider";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const doLogin = async () => {
    // 1) Generar claves efímeras
    const { publicJwk, privateKey } = await generateEphemeralKeyPair();

    // 2) Llamar al backend enviando la clave pública
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}auth/i/login/users`,
      {
        email: form.email,
        password: form.password,
        publicKey: publicJwk,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": import.meta.env.VITE_API_TK,
        },
      }
    );

    if (
      !response.data?.success ||
      !response.data?.data?.accessToken ||
      !response.data?.data?.dataToken
    ) {
      throw new Error(response.data?.message || "Credenciales inválidas");
    }

    // 3) Desencriptar payload sensible
    const { accessToken, dataToken } = response.data.data;
    const sensitive = await decryptEncryptedBlob(dataToken, privateKey);

    // 4) Guardar en el contexto de autenticación
    login({
      body: {
        accessToken,
        user: {
          id: sensitive.user.id,
          business_id: sensitive.user.business_id,
          name: sensitive.user.name,
          email: sensitive.user.email,
          permissions: sensitive.permissions, // 👈 importantísimo para rutas dinámicas
        },
      },
    });

    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    toast.promise(doLogin(), {
      loading: "Iniciando sesión...",
      success: () => {
        navigate("/home");
        return "Login exitoso";
      },
      error: (err) => `Error: ${err.message || "No se pudo iniciar sesión"}`,
    });
  };

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
            <form className="h-full" onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium text-gray-900"
                >
                  Usuario
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5"
                  placeholder="username"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg font-medium text-gray-900"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  value={form.password}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 p-2.5"
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
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  Recordarme
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2"
              >
                Iniciar Sesion
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
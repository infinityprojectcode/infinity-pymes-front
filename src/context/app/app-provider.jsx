// app-provider.jsx
import { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  // Variables de entorno
  const urlApi = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const storedLang = localStorage.getItem("language");
    if (storedTheme) setTheme(storedTheme);
    if (storedLang) setLanguage(storedLang);
  }, []);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <AppContext.Provider
      value={{ urlApi, apiKey, theme, changeTheme, language, changeLanguage }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook para usar el contexto
export const useAppContext = () => useContext(AppContext);
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AppContext from "./app-context";
import PropTypes from "prop-types";

const AppProvider = ({ children }) => {
  AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const urlApi = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const emanuel = function () {
    console.log("Emanuel is here!");
  };

  return (
    <AppContext.Provider
      value={{
        urlApi,
        apiKey
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

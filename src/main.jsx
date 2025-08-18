import { AppProvider } from "@context/app/app-provider.jsx";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { StrictMode } from "react";
import Modal from "react-modal";
import App from "./app/app";
import "./index.css";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </HashRouter>
  </StrictMode>
);
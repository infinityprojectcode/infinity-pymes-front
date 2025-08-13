import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import AppProvider from "./context/app/context-provider";
import App from "./app/app";
import Modal from "react-modal";
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

import AuthProvider from "../lib/auth/authProvider/AuthProvider.jsx";
import Router from "@routes/router/root.jsx";
import { Toaster } from "sonner";
import "./app.css";

export default function App() {
  return (
    <>
      <AuthProvider>
        <Toaster />
        <Router />
      </AuthProvider>
    </>
  );
}

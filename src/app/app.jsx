import AuthProvider from "@context/auth/auth-provider.jsx";
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

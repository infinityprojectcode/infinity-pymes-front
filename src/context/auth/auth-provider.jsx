import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  permissions: [],
});

export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
  });

  const [accessToken, setAccessToken] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken && storedToken !== "undefined" ? JSON.parse(storedToken) : "";
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!(localStorage.getItem("user") && localStorage.getItem("token") &&
      localStorage.getItem("user") !== "undefined" && localStorage.getItem("token") !== "undefined");
  });


  function getAccessToken() {
    return accessToken;
  }

  function login(userData) {
    setAccessToken(userData.body.accessToken);
    setUser(userData.body.user);

    localStorage.setItem("token", JSON.stringify(userData.body.accessToken));
    localStorage.setItem("user", JSON.stringify(userData.body.user));

    setIsAuthenticated(true);
  }

  function logout() {
    setAccessToken("");
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  }

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken && storedUser !== "undefined" && storedToken !== "undefined") {
      setUser(JSON.parse(storedUser));
      setAccessToken(JSON.parse(storedToken));
      setIsAuthenticated(true);
      navigate("/home");
    } else {
      setUser(null);
      setAccessToken("");
      setIsAuthenticated(false);
      navigate("/");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        getAccessToken,
        user,
        permissions: user?.permissions || []
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

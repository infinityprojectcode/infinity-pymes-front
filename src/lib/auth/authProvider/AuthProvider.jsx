import { useContext, createContext, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
});

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");

  function getAccessToken() {
    return accessToken;
  }

  function saveUser(userData) {
    setAccessToken(userData.body.accessToken);
    setRefreshToken(userData.body.refreshToken);

    localStorage.setItem("token", JSON.stringify(userData.body.refreshToken));
    setIsAuthenticated(true);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, getAccessToken, saveUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

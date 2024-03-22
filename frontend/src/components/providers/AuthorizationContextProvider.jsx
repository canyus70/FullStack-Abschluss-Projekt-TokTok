import { useEffect, useState } from "react";
import AuthorizationContext from "../../contexts/AuthorizationContext";
import { backendUrl } from "../../api";

const AuthorizationContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(undefined);

  const fetchToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    const response = await fetch(`${backendUrl}/api/v1/users/refresh-token`, {
      method: "POST",
      credentials: "include",
      headers: { authorization: `Bearer ${refreshToken}` },
    });

    const { result } = await response.json();
    setAccessToken(result?.accessToken);
  };

  const setToken = async (accessToken) => {
    try {
      if (!accessToken) return setAccessToken(undefined);

      setAccessToken(accessToken);

      setInterval(fetchToken, 1000 * 60 * 45);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <AuthorizationContext.Provider value={[accessToken, setToken]}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export default AuthorizationContextProvider;

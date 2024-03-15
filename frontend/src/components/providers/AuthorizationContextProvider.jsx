import { useEffect, useState } from "react";
import AuthorizationContext from "../../contexts/AuthorizationContext";

const AuthorizationContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");

  const fetchToken = async () => {
    const response = await fetch("/api/v1/users/refresh-token", {
      method: "PATCH",
      credentials: "include",
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

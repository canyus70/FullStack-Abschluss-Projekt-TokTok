import { useContext, useEffect, useState } from "react";
import AuthorizationContext from "../../contexts/AuthorizationContext";
import { jwtDecode } from "jwt-decode";
import fetchUser from "../../services/fetchUser";
import UserContext from "../../contexts/UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [accessToken] = useContext(AuthorizationContext);

  useEffect(() => {
    if (!accessToken) return;

    const decoded = jwtDecode(accessToken);
    console.log(decoded);
    fetchUser(decoded.sub ?? "", setUser);
  }, [accessToken, setUser]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

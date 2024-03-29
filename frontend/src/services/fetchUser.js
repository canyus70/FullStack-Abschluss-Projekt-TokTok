import { backendUrl } from "../api";

const fetchUser = async (id, setUser, accessToken) => {
  try {
    const response = await fetch(`${backendUrl}/api/v1/users/${id}/profile`, {
      headers: { authorization: `Bearer ${accessToken}` },
    });

    const { userInfo } = await response.json();

    setUser(userInfo);
  } catch (error) {
    console.log(error);
  }
};

export default fetchUser;

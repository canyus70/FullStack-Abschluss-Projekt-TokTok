const fetchUser = async (id, setUser) => {
  try {
    const response = await fetch(
      `http://localhost:4444/api/v1/users/${id}/profile/`
    );

    const { result } = await response.json();

    setUser(result);
  } catch (error) {
    console.log(error);
  }
};

export default fetchUser;

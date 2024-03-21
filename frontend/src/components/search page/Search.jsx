import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import IconMimik from "../SVG/IconMimik.svg";
import "./Search.scss";
import Navbar from "../navbar/Navbar";
import { useContext, useState } from "react";
import Avatar from "../avatar/Avatar";
import ToggleFollowButton from "../toggleButtons/ToggleFollowButton.jsx";
import AuthorizationContext from "../../contexts/AuthorizationContext.jsx";
import UserContext from "../../contexts/UserContext.jsx";
import fetchUser from "../../services/fetchUser.js";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(null);
  const [accessToken] = useContext(AuthorizationContext);
  const [authorizedUser, setAuthorizedUser] = useContext(UserContext);

  const onClickFollow = () => {
    if (!accessToken || !authorizedUser) return;
    fetchUser(authorizedUser._id, setAuthorizedUser, accessToken);
  };

  const handleInputChange = async (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    try {
      const response = await fetch(
        `http://localhost:4444/api/v1/users/search-users?filter=${newQuery}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSearchResult(data.result);
      setError(null);
    } catch (error) {
      console.error("Error searching users:", error);
      setError("Could not perform the search.");
    }
  };

  return (
    <>
      <section className="container">
        <form className="search-user">
          <Input
            className="input-search"
            placeholder="Search"
            prefix={<UserOutlined />}
            value={query}
            onChange={handleInputChange}
          />
        </form>
        <div className="image-container">
          <img src={IconMimik} alt="" />
        </div>
        <div className="border"></div>
      </section>
      {query && ( // Nur anzeigen, wenn query nicht leer ist
        <ul>
          {searchResult.map((user) => (
            <li key={user._id} className="item">
              <div className="tengu">
                <div className="vallhalla">
                  <Avatar avatar={user.avatar} small />
                </div>
                <div className="shinto">
                  <h2>{user.username}</h2>
                  <h5>{user.profession}</h5>
                </div>
              </div>
              <ToggleFollowButton
                user={user}
                className="toggleFollowButton"
                onClick={onClickFollow}
              />
            </li>
          ))}
        </ul>
      )}
      <Navbar />
    </>
  );
};

export default Search;

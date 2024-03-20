import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import IconMimik from "../SVG/IconMimik.svg";
import "./Search.scss";
import Navbar from "../navbar/Navbar";
import { useEffect, useState } from "react";
import Avatar from "../avatar/Avatar";
import { backendUrl } from "../../api";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = async (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    try {
      const response = await fetch(
        `${backendUrl}/api/v1/users/search-users?filter=${newQuery}`
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
            <li key={user._id} className="tengu">
              <div className="vallhalla">
                <Avatar avatar={user.avatar} small />
              </div>
              <div className="shinto">
                <h2>{user.username}</h2>
                <h5>{user.profession}</h5>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Navbar />
    </>
  );
};

export default Search;

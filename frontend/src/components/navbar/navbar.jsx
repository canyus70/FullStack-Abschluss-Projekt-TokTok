import "./navbar.scss";
import IconHome from "../SVG/IconHome.svg";
import IconSearch from "../SVG/IconSearch.svg";
import IconUpload from "../SVG/IconUpload.svg";
import IconProfile from "../SVG/IconProfile.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div className="navbarContainer">
        <Link
          to="/"
          className={`navLink ${location.pathname === "/" ? "active" : ""}`}
        >
          <div>
            <img
              src={IconHome}
              alt="Home"
              className={`homeImage navImage ${
                location.pathname === "/home" ? "active" : ""
              }`}
            />
          </div>
        </Link>
        <Link
          to="/search"
          className={`navLink ${
            location.pathname === "/search" ? "active" : ""
          }`}
        >
          <div>
            <img src={IconSearch} alt="Search" className="navImage" />
          </div>
        </Link>
        <Link
          to="/upload"
          className={`navLink ${
            location.pathname === "/upload" ? "active" : ""
          }`}
        >
          <div>
            <img src={IconUpload} alt="Upload" className="navImage" />
          </div>
        </Link>
        <Link
          to="/profile"
          className={`navLink ${
            location.pathname === "/profile" ? "active" : ""
          }`}
        >
          <div>
            <img src={IconProfile} alt="" className="navImage" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;

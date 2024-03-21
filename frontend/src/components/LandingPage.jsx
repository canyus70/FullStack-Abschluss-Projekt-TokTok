import { Link } from "react-router-dom";
import Logo from "../components/SVG/Logo.svg";

const LandingPage = () => {
  return (
    <div className="landing">
      <img src={Logo} alt="logo" />

      <Link to="/signin">
        <h2>
          please <span>Sign In</span>{" "}
        </h2>
      </Link>
    </div>
  );
};

export default LandingPage;

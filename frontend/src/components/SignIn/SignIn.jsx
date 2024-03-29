import TokTokLogo from "../SVG/TokTokLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "antd";
import "./SignIn.scss";
import { useContext, useState } from "react";
import AuthorizationContext from "../../contexts/AuthorizationContext";
import { backendUrl } from "../../api";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const [_, setAccessToken] = useContext(AuthorizationContext);

  const loginUser = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setErrorMessage("Email or password is wrong");
      return;
    }

    fetch(`${backendUrl}/api/v1/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then(({ success, result, message }) => {
        if (!success) return setErrorMessage(message || "Login failed");

        const authorization = `Bearer ${result.tokens.accessToken}`;

        setErrorMessage("");
        setSuccessMessage(
          "Login successful, please go to Dashboard and enjoy!"
        );

        console.log(result);
        setAccessToken(result.tokens.accessToken);
        setTimeout(() => {
          navigate("/");
        }, "2500");
        localStorage.setItem("refreshToken", result.tokens.refreshToken);
      });
  };

  return (
    <header>
      <div className="logoTok1">
        <img src={TokTokLogo} alt="" />
      </div>
      <form className="reg-registration-form1">
        <Input
          type="email"
          className="reg-input1"
          placeholder="✉️ Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input.Password
          className="reg-input1"
          placeholder="🔓 Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="registrationButton" onClick={loginUser}>
          SignIn
        </button>

        <Link className="Only1" to="/resend-password">
          <div className="forgot1">
            <p style={{ color: "#3f51b2" }}>Forgot the password?</p>
          </div>
        </Link>
      </form>
      <div className="message">
        <p style={{ color: "#ff4d67" }}>{errorMessage}</p>
        <p style={{ color: "#27C39E" }}>{successMessage}</p>
      </div>
      <div className="SigIn1">
        <p>Don’t have an account?</p>
        <Link className="Only1" to="/SignUp">
          <p>SignUp</p>
        </Link>
      </div>
    </header>
  );
};

export default SignIn;

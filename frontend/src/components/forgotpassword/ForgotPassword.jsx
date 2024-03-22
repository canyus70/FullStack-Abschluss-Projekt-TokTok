import TokTokLogo from "../SVG/TokTokLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "antd";
import "./ForgotPassword.scss";
import { useState } from "react";
import { backendUrl } from "../../api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const resendPassword = (event) => {
    event.preventDefault();
    if (!email) {
      setErrorMessage("User with this email doesnt exist");
      return;
    }

    fetch(`${backendUrl}/api/v1/users/resend-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then(({ success, result, message }) => {
        if (!success) {
          setErrorMessage(message || "Resend password failed");
          return;
        }
        setErrorMessage("");
        setSuccessMessage(
          "Resend password was succesfull! Please check your email"
        );
        console.log(result);
        setTimeout(() => {
          navigate("/signin");
        }, "2500");
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

        <Input
          type="submit"
          value="ResendPassword"
          className="registration-button1"
          onClick={resendPassword}
        />
      </form>
      <p style={{ color: "red" }}>{errorMessage}</p>
      <p style={{ color: "green" }}>{successMessage}</p>
      <div className="SigIn1">
        <p>Don’t have an account?</p>
        <Link className="Only1" to="/SignUp">
          <p>SignUp</p>
        </Link>
      </div>
    </header>
  );
};

export default ForgotPassword;

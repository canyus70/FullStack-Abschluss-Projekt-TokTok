import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TokTokLogo from "../SVG/TokTokLogo.svg";
import { Input } from "antd";
import "./SixDigit.scss";
import { backendUrl } from "../../api";

const SixDigit = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [sixDigitCode, setSixDigitCode] = useState("");
  const [successMessageVerify, setSuccessMessageVerify] = useState("");
  const { userId } = useParams();
  const navigate = useNavigate();

  async function verifyEmail(event) {
    event.preventDefault();
    if (!sixDigitCode) {
      setErrorMessage(
        "Please enter your six digit code, we have sent you an email"
      );
      return;
    }

    fetch(`${backendUrl}/api/v1/users/verify-email`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, sixDigitCode }),
    })
      .then((res) => res.json())
      .then(({ success, result, message }) => {
        if (!success)
          return setErrorMessage(message || "Email verifcation failed");
        console.log({ result });
        setErrorMessage("");
        setSuccessMessageVerify(
          "Verifications successful, You can now login to your account."
        );
        setTimeout(() => {
          navigate("/signin");
        }, "2500");
      });
  }

  return (
    <header>
      <div className="text3">
        <h1>
          Verify your <br /> Email
        </h1>
      </div>
      <div className="logoTok3">
        <img src={TokTokLogo} alt="" />
      </div>
      <form className="reg-registration-form3">
        <Input
          type="text"
          name="Verify"
          id="Verify"
          className="reg-input3"
          placeholder="Verify Code"
          value={sixDigitCode}
          onChange={(e) => setSixDigitCode(e.target.value)}
        />
        <Input
          type="submit"
          value="Accept"
          className="registration-button3"
          onClick={verifyEmail}
        />
        <p style={{ color: "red" }}>{errorMessage}</p>
        <p style={{ color: "green" }}>{successMessageVerify}</p>
        <Link to="/SignIn" className="skip">
          <p> Or Skip </p>
        </Link>
      </form>
      <div className="firma">
        <p>TokTok Pte. Ltd. GmbH & Co. KG</p>
      </div>
    </header>
  );
};

export default SixDigit;

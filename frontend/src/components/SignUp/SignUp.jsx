import TokTokLogo from "../SVG/TokTokLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "antd";
import "./SignUp.scss";
import { useState } from "react";
import { backendUrl } from "../../api";

const SignUp = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedpassword, setConfirmedPassword] = useState("");
  const [successMessageRegister, setSuccessMessageRegister] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const registerUser = (event) => {
    event.preventDefault();
    if (
      !firstname ||
      !lastname ||
      !username ||
      !birthday ||
      !email ||
      !password
    ) {
      setErrorMessage("All fields must be defined");
      return;
    }
    if (password !== confirmedpassword) {
      setErrorMessage("Password confirmation missmatches");
      return;
    }
    fetch(`${backendUrl}/api/v1/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname,
        lastname,
        username,
        birthday,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then(({ success, result, message }) => {
        if (!success) return setErrorMessage(message || "Registration failed");

        setSuccessMessageRegister(
          "Register successful, please go to the next step and enjoy!"
        );
        setErrorMessage("");
        setTimeout(() => {
          navigate("/sixdigit/" + result._id);
        }, "2500");
      });
  };

  return (
    <>
      <header>
        <div className="logoTok">
          <img src={TokTokLogo} alt="" />
        </div>
        <form className="reg-registration-form">
          <Input
            type="text"
            name="firstname"
            id="firstname"
            className="reg-input"
            placeholder="Firstname"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            type="text"
            name="lastname"
            id="lastname"
            className="reg-input"
            placeholder="Lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            type="text"
            name="username"
            className="reg-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            type="date"
            name="birthdate"
            id="birthdate"
            className="reg-input"
            placeholder="Birthdate"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <Input
            type="email"
            className="reg-input"
            placeholder="✉️ Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input.Password
            className="reg-input"
            placeholder="🔓 Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input.Password
            className="reg-input"
            placeholder="🔓confirmed Password"
            value={confirmedpassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
          />

          <button className="registrationButton" onClick={registerUser}>
            SignUp
          </button>
        </form>
        <div className="message">
          <p style={{ color: "#ff4d67" }}>{errorMessage}</p>
          <p style={{ color: "#27C39E" }}>{successMessageRegister}</p>
        </div>
        <div className="SigIn">
          <p>Already have an account?</p>
          <Link className="Only" to="/SignIn">
            <p style={{ color: "#3f51b2" }}>SignIn</p>
          </Link>
        </div>
      </header>
    </>
  );
};

export default SignUp;

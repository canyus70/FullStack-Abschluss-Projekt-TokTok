import TokTokLogo from "../SVG/TokTokLogo.svg";
import { Link } from "react-router-dom";
import { Input } from "antd";

import "./SignUp.scss";

const SignUp = () => {
  return (
    <>
      <header>
        <div className="text">
          <h1>
            Create your <br />
            Account
          </h1>
        </div>
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
          />
          <Input
            type="text"
            name="lastname"
            id="lastname"
            className="reg-input"
            placeholder="Lastname"
          />
          <Input
            type="text"
            name="username"
            className="reg-input"
            placeholder="Username"
          />
          <Input
            type="date"
            name="birthdate"
            id="birthdate"
            className="reg-input"
            placeholder="Birthdate"
          />
          <Input type="email" className="reg-input" placeholder="✉️ Email" />

          <Input.Password className="reg-input" placeholder="🔓 Password" />
          <Link className="LinkFrom" to="/SixDigit">
            <Input
              type="submit"
              value="SignUp"
              className="registration-button"
            />
          </Link>
        </form>
        <div className="SigIn">
          <p>Already have an account?</p>
          <Link className="Only" to="/SignIn">
            <p>SignIn</p>
          </Link>
        </div>
      </header>
    </>
  );
};

export default SignUp;

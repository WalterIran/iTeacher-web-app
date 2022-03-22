import React from "react";
import "./Login.css";
import { PrimaryButton, SecondaryButton } from "../../UI/Form/Button/Button";
import { PrimaryInput } from "../../UI/Form/Input/Input";

const Login = () => {
  return (
    <div className="outer-div">
      <div className="img-div">
        <img src={"https://raw.githubusercontent.com/WalterIran/iteacher-web-app/main/public/app-logo.png"} width="200" height="200" />
      </div>
      <div className="inner-div">
        <div className="input-email">
          <PrimaryInput type="text" placeholder="EMAIL" />
        </div>
        <div className="input-pass">
          <PrimaryInput type="password" placeholder="PASSWORD" />
        </div>
        <div>Forgot Password</div>
        <div className="button-login">
          <PrimaryButton>Log In</PrimaryButton>
        </div>
        <div className="button-signin">
          <PrimaryButton>Sign In</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Login;

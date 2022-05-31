import React from "react";
import logo from "../../assets/images/logo.svg";

const navBar = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <ul>
        <li>Features</li>
        <li>Company</li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <ul>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  );
};

export default navBar;

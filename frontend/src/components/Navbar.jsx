import React from "react";
import '../styles/Navbar.css';
import logo from "/wainong-logo.svg";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="nav-container">
      <ul className="nav-content no-bullets">
        <Link to="/">
          <img className="logo" src={logo} />
        </Link>
        <li>
          <Button name="Login" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

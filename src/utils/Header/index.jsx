import React from "react";
import { MdMenu } from "react-icons/md";
import "./styles.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-app">
      <div className="logo">
        <Link to="/">Otaku List</Link>
      </div>
      <div className="menu">
        <Link to="/admin">
          <MdMenu size="2.4rem" />
        </Link>
      </div>
    </div>
  );
}

export default Header;

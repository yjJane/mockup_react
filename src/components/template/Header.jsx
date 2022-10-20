import React from "react";
import {Link} from "react-router-dom";
import "../../assets/Header.scss";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo"><img src="../../public/brand-logo.png" alt="" /></Link>
      <Navigation></Navigation>
    </header>
  )
}

export default Header;
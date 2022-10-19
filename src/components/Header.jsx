import React from "react";
import {Link} from "react-router-dom";
import "../assets/Header.module.css";

const Header = () => {
  return (
    <header>
      <Link to="/"><img src="../../public/brand-logo.png" alt="" /></Link>
      <nav>
        <ul>
          <li><Link to="/MainEntrance">MainEntrance</Link></li>
          <li><Link to="/FDC">2021FDC</Link></li>
          <li><Link to="/Pavilion">Pavilion</Link></li>
          <li><Link to="/Exhivitor">Exhibitor</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
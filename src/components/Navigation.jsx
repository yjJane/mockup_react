import React from "react";
import { Link } from "react-router-dom";
import "../assets/Navigation.scss";

const Navigation = () => {
  return (
    <nav className="gnb_wrap">
      <ul className="gnb_list">
        <li className="gnb_item"><Link to="/MainEntrance">MainEntrance</Link></li>
        <li className="gnb_item"><Link to="/FDC">2021FDC</Link></li>
        <li className="gnb_item"><Link to="/Pavilion">Pavilion</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;
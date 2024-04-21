import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import Items from "../items/Items";
import { BsTelephone } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [toggel, setToggel] = useState(false);
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <div className={`nav__items ${toggel ? "show" : ""}`}>
            <Items />
          </div>
          <div className="nav__btn">
            <a className="tel" href="#">
              <BsTelephone /> +123 ( 456 ) ( 7890 )
            </a>
            <button onClick={() => setToggel(!toggel)} className="menu">
              <GiHamburgerMenu />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

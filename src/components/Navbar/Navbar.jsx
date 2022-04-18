import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./navbar.scss";
import menuIcon from "../../images/menu.svg";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const showMenu = () => {
    setMenuActive(!menuActive);
  }

  //const menuItems = ["home", "about"]

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <Link to="/" className="navbar__logo">
          Logo
        </Link>
        <button onClick={showMenu} className="navbar__toggle">
          <img src={menuIcon} alt="kjkj" />
        </button>

        <div className={menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"}>
          <NavLink onClick={showMenu} to="/" className="navbar__menu-link">
            About us
          </NavLink>
          <NavLink onClick={showMenu} to="/services" className="navbar__menu-link">
            Services
          </NavLink>
          <NavLink onClick={showMenu} to="/portfolio" className="navbar__menu-link">
            Portfolio
          </NavLink>
          <NavLink onClick={showMenu} to="/contact" className="navbar__menu-link">
            Contacts
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./navbar.scss";
import menuIcon from "../../images/menu.svg";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const showMenu = () => {
    setMenuActive(!menuActive);
  };

  const menuItems = [
    {
      id: 1,
      menu: "about",
      link: "/",
    },
    
    {
      id: 2,
      menu: "portfolio",
      link: "portfolio",
    },

    {
      id: 3,
      menu: "services",
      link: "services",
    },

    {
      id: 4,
      menu: "blog",
      link: "blog",
    },

    {
      id: 5,
      menu: "contact",
      link: "contact",
    },
  ];

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

        <div
          className={
            menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"
          }
        >
          {menuItems.map((menuItem) => {
            return (
              <NavLink
                onClick={showMenu}
                to={menuItem.link}
                className="navbar__menu-link"
                key={menuItem.id}
              >
                {menuItem.menu}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

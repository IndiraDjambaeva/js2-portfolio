import "./navbar.scss";
import menuIcon from "../../images/menu.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <a href="/" className="navbar__logo">
          Logo
        </a>
        <button className="navbar__toggle">
          <img src={menuIcon} alt="kjkj" />
        </button>
        <div className="navbar__menu--show">
          <a href="/" className="navbar__menu-link">
            About us
          </a>
          <a href="/" className="navbar__menu-link">
            Services
          </a>
          <a href="/" className="navbar__menu-link">
            Portfolio
          </a>
          <a href="/" className="navbar__menu-link">
            Contacts
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

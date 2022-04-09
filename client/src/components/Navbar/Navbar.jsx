import { react, useState } from "react";
import "./navbar.css";
function Navbar(props) {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");
    // TogglerIcon
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="brand">
        brand
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Hem
          </a>
        </li>

        <li className="nav__item">
          <a href="#" className="nav__link">
            Meny
          </a>
        </li>

        <li className="nav__item">
          <a href="#" className="nav__link">
            Kontakta oss
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
export default Navbar;

import menu from "../img/menu.svg";
import "./Header.css";

// TODO: Make links go somewhere
const Header = () => (
  <header class="Header">
    <a href="/" class="Header-text">
      Aristimer
    </a>
    <a href="/">
      <img src={menu} className="Header-menu" alt="menu" />
    </a>
  </header>
);

export default Header;
import { useState } from "react";
import { ReactComponent as Logo } from "../img/logo.svg";
import menu from "../img/menu.svg";
import "./Header.css";
import { pathMap } from "../Routes";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="Header">
      <a className="Header-left" href="/equitimer">
        <Logo className="Header-logo" alt="logo" />
        <div className="Header-text">Equitimer</div>
      </a>
      <div onClick={() => setMenuOpen(!isMenuOpen)}>
        <img src={menu} className="Header-menu" alt="menu" />
      </div>
      {isMenuOpen && (
        <>
          <div className="nav-menu-bg" onClick={() => setMenuOpen(false)} />
          <div className="nav-menu">
            <div
              className="nav-menu-item"
              onClick={() => (window.location = "/equitimer")}
            >
              Home
            </div>
            <div
              className="nav-menu-item"
              onClick={() => (window.location = `/equitimer/#${pathMap.Team}`)}
            >
              Measure new meeting
            </div>
            <div
              className="nav-menu-item"
              onClick={() => {
                window.open("https://linkedin.com/in/mjferry2016");
                setMenuOpen(false);
              }}
            >
              Contact
            </div>
            <div
              className="nav-menu-item"
              onClick={() => {
                window.open("https://github.com/mferryRV/equitimer");
                setMenuOpen(false);
              }}
            >
              See source code
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;

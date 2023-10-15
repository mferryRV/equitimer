import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "monday-ui-react-core";
import menu from "../img/menu.svg";
import "./Header.css";
import { pathMap } from "../Routes";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <header className="Header">
      <a href="/equitimer" className="Header-text">
        Equitimer
      </a>
      <div onClick={() => setMenuOpen(!isMenuOpen)}>
        <img src={menu} className="Header-menu" alt="menu" />
      </div>
      {isMenuOpen && (
        <>
          <div className="nav-menu-bg" onClick={() => setMenuOpen(false)} />
          <div className="nav-menu">
            <Menu>
              <MenuItem
                title="Home"
                onClick={() => (window.location = "/equitimer")}
              />
              <MenuItem
                title="Measure meeting"
                onClick={() => navigate(pathMap.Team)}
              />
              <MenuItem
                title="See source code"
                onClick={() => {
                  window.open("https://github.com/mferryRV/equitimer");
                  setMenuOpen(false);
                }}
              />
            </Menu>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;

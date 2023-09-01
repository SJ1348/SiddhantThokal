import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "./button";

function NavbarComp() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" className="logo-link">
              SiD
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <CloseIcon className="closeIcon" />
            ) : (
              <MenuIcon className="menuIcon" />
            )}
          </div>
          <ul className={click ? "nav-menu-active" : "nav-menu"}>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link to="/projects" className="nav-links">
                Projects
              </Link>
            </li>
            <li className="nav-item" onClick={closeMobileMenu}>
              <Link to="/contactMe" className="nav-links">
                Contact Me
              </Link>
            </li>

            <div className={click ? "btn-active" : "btn"}>
              <Link to="/login" className="btn-mobile">
                <Button buttonStyle="btn--primary" buttonSize="btn--medium">
                  LOGIN
                </Button>
              </Link>
              <Link to="/signup" className="btn-mobile">
                <Button buttonStyle="btn--outline" buttonSize="btn--medium">
                  SINGUP
                </Button>
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavbarComp;

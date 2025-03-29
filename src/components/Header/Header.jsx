import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Header/Header.css";

export default function Header() {
  // set Hook
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  // create mobile menu handler
  const mobileMenuHandler = () => {
    setIsMenuOpen(true);
  };
  const closeMobileMenuHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-logo-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <button onClick={mobileMenuHandler} className="mobile-nav-menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </button>

      <div className={`mobile-menu-container ${isMenuOpen ? "open" : ""}`}>
        <button onClick={closeMobileMenuHandler} className="mobile-close-menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
              <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
            </g>
          </svg>
        </button>
        <ul className="mobile-menu-content">
          {["/", "/destination", "/crew", "/technology"].map((path, index) => (
            <li className="mobile-menus" key={path}>
              <Link
                className={`mobile-menus-link ${
                  activeLink === path ? "active" : ""
                }`}
                to={path}
                onClick={closeMobileMenuHandler}
              >
                <span>0{index}</span>
                {path.replace("/", "") || "Home"}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <nav className="nav-bar">
        <ul className="menu-container">
          {["/", "/destination", "/crew", "/technology"].map((path, index) => (
            <li className="menus" key={path}>
              <Link
                className={`menus-link ${activeLink === path ? "active" : ""}`}
                to={path}
              >
                <span>0{index}</span>
                {path.replace("/", "") || "Home"}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

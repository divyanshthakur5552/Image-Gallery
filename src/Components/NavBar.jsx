import { BsImageAlt } from "react-icons/bs";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaRegSun } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./NavBar.css";

export default function Navbar({
  toggleTheme,
  inputValue,
  handleKeyPress,
  handleSearch,
  setInputValue,
}) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      <div className="navbar">
        <div className="navbar-main">
          <div className="logo" onClick={() => navigate("/")}>
            <BsImageAlt className="logo-icon" />
            <h1 className="logo-text">Image Gallery</h1>
          </div>

          <div className={`search-box ${isSearchOpen ? "search-open" : ""}`}>
            <input
              type="text"
              value={inputValue}
              placeholder="Search"
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <IoSearchCircleOutline
              onClick={handleSearch}
              className="search-icon"
            />
          </div>

          <div className="navbar-right">
            <ul className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
              <li>
                <NavLink to="/" end onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/saved" onClick={closeMenu}>
                  Saved
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={closeMenu}>
                  About
                </NavLink>
              </li>
            </ul>

            <div className="icon-group">
              <IoSearchCircleOutline
                className="mobile-search-icon"
                onClick={toggleSearch}
              />
              <FaRegSun className="toggle-icon" onClick={toggleTheme} />
              <div className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* moved outside navbar to prevent clipping */}
      <div
        className={`mobile-search-overlay ${
          isSearchOpen ? "search-overlay-open" : ""
        }`}
      >
        <div className="mobile-search-box">
          <input
            type="text"
            value={inputValue}
            placeholder="Search"
            onKeyPress={handleKeyPress}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <IoSearchCircleOutline
            onClick={handleSearch}
            className="search-icon"
          />
        </div>
      </div>
    </>
  );
}

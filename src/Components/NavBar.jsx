import { BsImageAlt } from "react-icons/bs";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaRegSun } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";

import "./NavBar.css";

export default function Navbar({
  toggleTheme,
  inputValue,
  handleKeyPress,
  handleSearch,
  setInputValue,
}) {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <BsImageAlt className="logo-icon" />
        <h1 className="logo-text">Image Gallery</h1>
      </div>

      <div className="search-box">
        <input
          type="text"
          value={inputValue}
          placeholder="Search"
          onKeyPress={handleKeyPress}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <IoSearchCircleOutline onClick={handleSearch} className="search-icon" />
      </div>

      <div className="navbar-right">
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/saved">Saved</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <FaRegSun className="toggle-icon" onClick={toggleTheme} />
      </div>
    </div>
  );
}

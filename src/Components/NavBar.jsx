import { BsImageAlt } from "react-icons/bs";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaRegSun } from "react-icons/fa6";

import "./NavBar.css";
const API_URL = "https://api.unsplash.com/search/photos";

export default function Navbar({
  toggleTheme,
  inputValue,
  handleKeyPress,
  handleSearch,
  setInputValue,
}) {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <BsImageAlt className="logo-icon" />
          <h1 className="logo-text">Image Gallery</h1>
        </div>

        <div className="search-box">
          {/* Remove form wrapper */}
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
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
          <FaRegSun className="toggle-icon" onClick={toggleTheme} />
        </div>
      </div>
    </>
  );
}

import Box from "./Components/Box.Jsx";
import Navbar from "./Components/Navbar";
import axios from "axios";
import Loader from "./Components/Loader";
import React, { useEffect, useState } from "react";
const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;
function App() {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchImages();
  }, [page]);
  const fetchImages = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${API_URL}?query=${inputValue}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      console.log("loading:", loading);
      setImages(data.results);
      setTotalImages(data.total_pages);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Setting loading to false");
      setLoading(false);
    }
  };

  const handleSearch = () => {
    setPage(1);
    fetchImages();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
  }
  return (
    <>
      <div className="container">
        <Navbar
          toggleTheme={toggleTheme}
          inputValue={inputValue}
          handleKeyPress={handleKeyPress}
          handleSearch={handleSearch}
          setInputValue={setInputValue}
        />

        <Box
          images={images}
          totalImages={totalImages}
          page={page}
          setPage={setPage}
          loading={loading}
        />
      </div>
    </>
  );
}

export default App;

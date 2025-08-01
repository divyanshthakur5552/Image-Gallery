import React, { useEffect, useState } from "react";
import "./Home.css";
import Box from "./Box.Jsx";
import NavBar from "./NavBar.jsx";
import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  const fetchImages = async () => {
    try {
      setLoading(true);
      let url = "";
      let isRandom = false;

      if (inputValue.trim() === "") {
        url = `https://api.unsplash.com/photos/random?count=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`;
        isRandom = true;
      } else {
        url = `${API_URL}?query=${inputValue}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`;
      }

      const { data } = await axios.get(url);

      if (isRandom) {
        setImages(data); // data is an array
        setTotalImages(1);
      } else {
        setImages(data.results || []);
        setTotalImages(data.total_pages || 1);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch once on initial load
  useEffect(() => {
    fetchImages();
  }, []);

  // ✅ Fetch on page change only if user searched
  useEffect(() => {
    if (inputValue.trim() !== "") {
      fetchImages();
    }
  }, [page]);

  const handleSearch = () => {
    setPage(1); // reset to page 1
    fetchImages();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="container">
      <NavBar
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
  );
}

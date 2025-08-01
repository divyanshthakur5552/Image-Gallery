import { useEffect, useState } from "react";
import NavBar from "./NavBar.jsx";
import "./Saved.css";
import { FaHeart } from "react-icons/fa";

export default function Saved() {
  const [savedImages, setSavedImages] = useState([]);

  useEffect(() => {
    const images = JSON.parse(localStorage.getItem("savedImages")) || [];
    setSavedImages(images.reverse()); // Most recent images first
  }, []);

  return (
    <>
      <NavBar />
      <div className="saved-page">
        <h2 className="saved-heading">Saved Images</h2>
        <div className="box">
          {savedImages.length === 0 ? (
            <p className="empty-message">No saved images yet.</p>
          ) : (
            savedImages.map((img) => (
              <div key={img.id} className="image-container">
                <img src={img.url} alt={img.description} className="image" />
                <div className="btn-actions">
                  <div className="like-btn-container"></div>
                </div>
                <p className="description">{img.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

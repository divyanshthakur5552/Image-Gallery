import React, { useState, useEffect } from "react";
import "./LikeBtn.css";

export default function LikeButton({ imageId, images }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(images.like || 0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const storedLiked = localStorage.getItem(`liked-${imageId}`);
    const hasLiked = storedLiked === "true";
    setLiked(hasLiked);

    // ✅ FIXED: Ensure fallback if images.like is undefined
    setLikeCount((images.like || 0) + (hasLiked ? 1 : 0));
  }, [imageId, images.like]);

  const toggleLike = () => {
    const newLiked = !liked;
    const newCount = likeCount + (newLiked ? 1 : -1);

    setLiked(newLiked);
    setLikeCount(newCount);
    setAnimating(true);

    localStorage.setItem(`liked-${imageId}`, newLiked);

    setTimeout(() => setAnimating(false), 300);
  };

  return (
    <div className="like-btn-wrapper" onClick={toggleLike}>
      <i
        className={`heart-icon ${liked ? "liked" : ""} ${
          animating ? "pop" : ""
        }`}
      ></i>
      <span className="like-count">{likeCount}</span>
    </div>
  );
}

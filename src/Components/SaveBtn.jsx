import { useEffect, useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";

export default function SaveBtn({ imageId, imageUrl, imageDescription }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem("savedImages")) || [];
    const isAlreadySaved = savedImages.some((img) => img.id === imageId);
    setSaved(isAlreadySaved);
  }, [imageId]);

  function handleSave() {
    const savedImages = JSON.parse(localStorage.getItem("savedImages")) || [];

    // Only save if not already saved
    if (!savedImages.some((img) => img.id === imageId)) {
      const newImage = {
        id: imageId,
        url: imageUrl,
        description: imageDescription,
      };
      savedImages.push(newImage);
      localStorage.setItem("savedImages", JSON.stringify(savedImages));
      setSaved(true);
    }
  }

  function handleUnsave() {
    const savedImages = JSON.parse(localStorage.getItem("savedImages")) || [];
    const updatedImages = savedImages.filter((img) => img.id !== imageId);
    localStorage.setItem("savedImages", JSON.stringify(updatedImages));
    setSaved(false);
  }

  return (
    <>
      {!saved ? (
        <FaRegBookmark onClick={handleSave} />
      ) : (
        <FaBookmark onClick={handleUnsave} />
      )}
    </>
  );
}

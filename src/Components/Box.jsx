import React from "react";
import "./Box.css";
import Loader from "./Loader";

export default function Box({ images, totalImages, page, setPage, loading }) {
  return (
    <>
      <div className="box">
        {loading ? (
          <div className="loader-container">
            <Loader />
          </div>
        ) : (
          images.map((image) => {
            return (
              <div className="image-container" key={image.id}>
                <img
                  key={image.id}
                  src={image.urls.small}
                  alt={image.alt_description}
                  className="image"
                />
                <p>❤️{image.likes}</p>
                <p>{image.alt_description}</p>
              </div>
            );
          })
        )}
      </div>

      <div className="btn">
        {page > 1 && (
          <button onClick={() => setPage(page - 1)}>Previous</button>
        )}
        {page < totalImages && (
          <button onClick={() => setPage(page + 1)}>next</button>
        )}
      </div>
    </>
  );
}

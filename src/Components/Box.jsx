import React from "react";
import "./Box.css";
import SaveBtn from "./SaveBtn";
import Loader from "./Loader";
import LikeButton from "./LikeBtn";

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
                <div className="user-info">
                  <img
                    src={image.user.profile_image.medium}
                    alt={image.user.name}
                    className="profile-pic"
                  />
                  <span className="username">{image.user.name}</span>
                </div>
                <img
                  src={image.urls.small}
                  alt={image.alt_description}
                  className="image"
                />
                <div className="btn-actions">
                  <div className="like-btn-container">
                    <LikeButton imageId={image.id} images={images} />
                  </div>
                  <div className="save-btn-container">
                    <SaveBtn
                      imageId={image.id}
                      imageUrl={image.urls.small}
                      imageDescription={image.alt_description}
                    />
                  </div>
                </div>

                <p className="description">{image.alt_description}</p>
              </div>
            );
          })
        )}
      </div>
      {loading ? null : (
        <div className="btn">
          {page > 1 && (
            <button onClick={() => setPage(page - 1)}>Previous</button>
          )}
          {page < totalImages && (
            <button onClick={() => setPage(page + 1)}>next</button>
          )}
        </div>
      )}
    </>
  );
}

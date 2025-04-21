import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favouritePhotoIds, toggleFavourite }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={{
            id: photo.id,
            username: photo.user.username,
            imageSource: photo.urls.regular,
            profile: photo.user.profile,
            location: photo.location,
          }}
          isFavourite={favouritePhotoIds.includes(photo.id)}
          toggleFavourite={toggleFavourite}
        />
      ))}
    </ul>
  );
};

export default PhotoList;

import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos"

const PhotoList = () => {
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
        />
      ))}
    </ul>
  );
};

export default PhotoList;

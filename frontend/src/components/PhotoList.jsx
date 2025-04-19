import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = () => {
  return (
    <ul className="photo-list">
      {sampleDataForPhotoList.map(photo => (
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

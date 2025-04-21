import { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { username, profile, imageSource, location, id } = props.photo;


  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={id} />
      <img src={imageSource} alt="person holding phone" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt="image of a person" className="photo-list__user-profile" />

        <div className="photo-list__user-info">
          <p>{username}</p>
          <div className="photo-list__user-location">
            <p>{location.city}, {location.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

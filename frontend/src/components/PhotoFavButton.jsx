// import FavIcon from './FavIcon';
import React, { useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';


const PhotoFavButton = ({ photoId, isFavourited, toggleFavourite }) => {

  const handleClick = () => {
    toggleFavourite(prevFavs => {
      return prevFavs.includes(photoId) ? prevFavs.filter(id => id !== photoId) : [...prevFavs, photoId];
    })
    // console.log(`Toggledd fav for photo ID: ${photoId}`)
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourited} />
      </div>
    </div>
  );
};

export default PhotoFavButton;

// import FavIcon from './FavIcon';
import React, { useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';


const PhotoFavButton = () => {
  const [favouritePhoto, setFavouritePhoto]= useState(false)

  const handleClick = () => {
    setFavouritePhoto(prevState => !prevState)
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon selected={favouritePhoto}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;

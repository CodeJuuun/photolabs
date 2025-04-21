// import FavIcon from './FavIcon';
import React, { useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';


const PhotoFavButton = ({ photoId }) => {
  const [favouritePhoto, setFavouritePhoto] = useState(false);

  const handleClick = () => {
    setFavouritePhoto(prevState => !prevState);
    // console.log(`Toggledd fav for photo ID: ${photoId}`)
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favouritePhoto} />
      </div>
    </div>
  );
};

export default PhotoFavButton;

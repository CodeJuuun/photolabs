// import FavIcon from './FavIcon';
import React from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';


const PhotoFavButton = (props) => {
  const { likedPhoto, handleClick } = props;

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={likedPhoto}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;

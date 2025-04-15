// import FavIcon from './FavIcon';
import React, { useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';


const PhotoFavButton = (props) => {
  const [select, setSelect]= useState(false)

  const handleClick = () => {
    setSelect(!select)
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon selected={select}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;

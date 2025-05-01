import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';


const PhotoFavButton = ({ isFavourite, onClick }) => {
  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
};

export default PhotoFavButton;

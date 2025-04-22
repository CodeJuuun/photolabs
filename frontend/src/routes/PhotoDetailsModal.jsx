import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

// photo = currently selected photo, photos = entire photo dataset
const PhotoDetailsModal = ({ closeModal, photo, photos, likedPhotos, toggleFavourite }) => {
  // handling unselected photo
  if (!photo) {
    return null;
  }

  //helper function to filter photos based on similar photo
  
  return (
    <>
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
          {/* {console.log(photo)} */}
        </button>
      </div>
      <div className='photo-details-modal__image'>
        <img src={photo} alt={photo.location} />
      </div>
      <div className='photo-details-modal__images'>

      </div>
    </>
  );
};

export default PhotoDetailsModal;

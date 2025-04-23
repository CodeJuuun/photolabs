import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
// photo = currently selected photo, photos = entire photo dataset
const PhotoDetailsModal = ({ closeModal, photo, photos, likedPhotos, toggleFavourite }) => {
  // handling unselected photo
  if (!photo) {
    return null;
  }

  //helper function to filter photos based on similar photo
  const getSimilarPhotos = () => {
    return photos.filter(p =>
      p.location.city === photo.location.city &&
      p.location.country === photo.location.country &&
      p.id !== photo.id
    );
  };

  return (
    <>
      <div
        className="photo-details-modal">
        <button
          className="photo-details-modal__close-button"
          onClick={closeModal}>

          <img
            src={closeSymbol}
            alt="close symbol" />
        </button>
        <div className='photo-details-modal__image-wrapper'>
          <PhotoFavButton
            isFavourite={likedPhotos.includes(photo.id)}
            onClick={() => toggleFavourite(photo.id)}
          />
        </div>
        <img
          src={photo.imageSource}
          alt="selected"
          className='photo-details-modal__image' />

        <div
          className="photo-details-modal__top-bar">
          <div
            className="photo-details-modal__photographer-details">
            <img
              src={photo.profile}
              alt="Photographer"
              className="photo-details-modal__photographer-profile"
            />
            <div
              className="photo-details-modal__photographer-info">
              <div>{photo.username}</div>
              <div
                className="photo-details-modal__photographer-location">
                {photo.location.city}, {photo.location.country}
              </div>
            </div>
          </div>
        </div>

        <div className="photo-details-modal__header">Similar Photos</div>
        <div className="photo-details-modal__images">
          <PhotoList
            photos={getSimilarPhotos()}
            likedPhotos={likedPhotos}
            toggleFavourite={toggleFavourite}
          />
        </div>
      </div>
    </>
  );
};

export default PhotoDetailsModal;

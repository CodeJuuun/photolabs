import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoListItem from '../components/PhotoListItem';
// photo = currently selected photo, photos = entire photo dataset
const PhotoDetailsModal = ({ closeModal, photo, photos, likedPhotos, toggleFavourite }) => {
  // handling unselected photo
  if (!photo) {
    return null;
  }

  //helper function to filter photos based on similar photo
  const similarPhotos = (photo, photos) => {
    if (!photos) return [];
    return photos.filter(p => p.location === photo.location && p.id !== photo.id);
  };

  return (
    <>
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>

        <img src={photo.imageSource} alt="" className='photo-details-modal__image' />

        <div className='photo-details-modal__images'>
          {similarPhotos(photo, photos).map(similarPhoto => (
            <PhotoListItem
              key={similarPhoto.id}
              photo={{
                id: similarPhoto.id,
                username: similarPhoto.user.username,
                imageSource: similarPhoto.urls.regular,
                profile: similarPhoto.user.profile,
                location: similarPhoto.location,
              }}
              isFavourite={likedPhotos.includes(similarPhoto.id)}
              toggleFavourite={toggleFavourite}
              openModal={openModal}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotoDetailsModal;

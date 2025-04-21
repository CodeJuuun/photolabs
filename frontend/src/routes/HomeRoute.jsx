import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favouritePhotoIds, toggleFavourite, openModal }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={favouritePhotoIds.length > 0} />
      <PhotoList
        photos={photos}
        favouritePhotoIds={favouritePhotoIds}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;

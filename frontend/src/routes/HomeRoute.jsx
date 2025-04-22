import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, likedPhotos, toggleFavourite, openModal }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={likedPhotos.length > 0} />
      <PhotoList
        photos={photos}
        likedPhotos={likedPhotos}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />

      
    </div>
  );
};

export default HomeRoute;

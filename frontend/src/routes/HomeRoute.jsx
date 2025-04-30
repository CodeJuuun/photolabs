import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, onLoadTopic, likedPhotos, toggleFavourite, onPhotoSelect }) => {

  return (
    <div className="home-route">
      <TopNavigation 
      topics={topics}
      onLoadTopic={onLoadTopic} 
      isFavPhotoExist={likedPhotos.length > 0} />
      <PhotoList
        photos={photos}
        likedPhotos={likedPhotos}
        toggleFavourite={toggleFavourite}
        onPhotoSelect={onPhotoSelect}
      />

      
    </div>
  );
};

export default HomeRoute;

import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, likedPhotos, toggleFavourite, onPhotoSelect }) => {
  console.log( "rendering photos in homeroute successful")
  console.log( "rendering topics in homeroute successful")
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={likedPhotos.length > 0} />
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

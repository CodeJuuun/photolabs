import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favPhoto, setFavPhoto }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhoto={favPhoto} />
      <PhotoList photos={photos} favPhoto={favPhoto} setFavPhoto={setFavPhoto}/>
    </div>
  );
};

export default HomeRoute;

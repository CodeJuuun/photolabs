import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: "/Image-1-Regular.jpeg",
  username: "Joe Example",
  profile: "/profile-1.jpg",
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <PhotoListItem data={sampleDataForPhotoListItem} />
    </div>
  );
};

export default App;

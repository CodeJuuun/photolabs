import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from './components/PhotoFavButton';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: "/Image-1-Regular.jpeg",
  username: "Joe Example",
  profile: `/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3).fill(sampleDataForPhotoListItem);
  return (
    <div className="App">
      {photos.map((photo, index) => (
        <PhotoListItem key={index} photo={photo} />
      ))}
      {/* <PhotoFavButton /> */}
    </div>
  );
};

export default App;

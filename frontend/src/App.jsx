import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favouritePhotoIds, setFavouritePhotoIds] = useState([]);
  
  const toggleFavourite = (photoId) => {
    setFavouritePhotoIds(prev =>
      prev.includes(photoId)
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favouritePhotoIds={favouritePhotoIds}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default App;

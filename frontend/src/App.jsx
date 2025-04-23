import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        likedPhotos={likedPhotos}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
      {isModalOpen && selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          closeModal={closeModal}
          photos={photos}
          likedPhotos={likedPhotos}
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;

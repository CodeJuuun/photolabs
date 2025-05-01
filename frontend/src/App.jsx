import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state: { photoData, topicData, likedPhotos, selectedPhoto, isModalOpen },
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        likedPhotos={likedPhotos}
        toggleFavourite={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
        onLoadTopic={onLoadTopic}
      />
      {isModalOpen && selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          closeModal={onClosePhotoDetailsModal}
          photos={photoData}
          likedPhotos={likedPhotos}
          toggleFavourite={updateToFavPhotoIds}
          onPhotoSelect={onPhotoSelect}
        />
      )}
    </div>
  );
};

export default App;

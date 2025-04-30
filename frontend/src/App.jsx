import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        likedPhotos={state.likedPhotos}
        toggleFavourite={updateToFavPhotoIds}
        onPhotoSelect={onPhotoSelect}
        onLoadTopic={onLoadTopic}
      />
      {state.isModalOpen && state.selectedPhoto && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          closeModal={onClosePhotoDetailsModal}
          photos={state.photoData}
          likedPhotos={state.likedPhotos}
          toggleFavourite={updateToFavPhotoIds}
          onPhotoSelect={onPhotoSelect}
        />
      )}
    </div>
  );
};

export default App;

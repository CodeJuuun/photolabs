import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModelOpen] = useState(false);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModelOpen(true);
  };

  const closeModal = () => {
    setIsModelOpen(false);
    setSelectedPhoto(null);
  };

  const toggleFavourite = (photoId) => {
    setLikedPhotos(prev =>
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

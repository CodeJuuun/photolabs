import { useState } from "react";

const useApplicationData = () => {

  const state = { likedPhotos, selectedPhoto, isModalOpen };
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModelOpen] = useState(false);

  const OnPhotoSelect = (photo) => {
    setSelectedPhoto(photo);
    setIsModelOpen(true);
  };

  const OnClosePhotoDetailsModal = () => {
    setIsModelOpen(false);
    setSelectedPhoto(null);
  };

  const updateToFavPhotosIds = (photoId) => {
    setLikedPhotos(prev =>
      prev.includes(photoId)
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  return {
    state,
    OnPhotoSelect,
    updateToFavPhotosIds,
    OnClosePhotoDetailsModal,
  };

};

export default useApplicationData;
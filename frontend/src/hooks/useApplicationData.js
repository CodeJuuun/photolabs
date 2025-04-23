import { useState } from "react";

const useApplicationData = () => {

  const [likedPhotos, setLikedPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModelOpen] = useState(false);
  const state = { likedPhotos, selectedPhoto, isModalOpen };
  
  const onPhotoSelect = (photo) => {
    setSelectedPhoto(photo);
    setIsModelOpen(true);
  };

  const onClosePhotoDetailsModal = () => {
    setIsModelOpen(false);
    setSelectedPhoto(null);
  };

  const updateToFavPhotoIds = (photoId) => {
    setLikedPhotos(prev =>
      prev.includes(photoId)
        ? prev.filter(id => id !== photoId)
        : [...prev, photoId]
    );
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };

};

export default useApplicationData;
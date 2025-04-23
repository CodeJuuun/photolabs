import { useState } from "react";

const useApplicationData = () => {

  const [state, setState] = useState();

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

}

export default useApplicationData;
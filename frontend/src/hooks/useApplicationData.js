import { useReducer, useEffect } from "react";
import { reducer, ACTIONS } from "./useApplicationReducer";
//-----------------------------------------------------------------------------------------
const initialState = {
  likedPhotos: [],
  selectedPhoto: null,
  isModalOpen: false,
  photoData: [],
  topicData: []
};

//-----------------------------------------------------------------------------------------
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch photo data from api endpoint and store it in state
  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then(res => res.json())
      .then(data => dispatch({
        type: ACTIONS.SET_PHOTO_DATA,
        payload: { photos: data }
      }))
      .catch(error => {
        console.error("Error fetching photo data:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: ACTIONS.SET_TOPIC_DATA,
          payload: { topics: data }
        })
      );
  }, []);

  const onPhotoSelect = (photo) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { photo }
    });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { isOpen: false }
    });
  };

  const updateToFavPhotoIds = (photoId) => {
    if (state.likedPhotos.includes(photoId)) {
      dispatch({
        type: ACTIONS.FAV_PHOTO_REMOVED,
        payload: { id: photoId }
      });
    } else {
      dispatch({
        type: ACTIONS.FAV_PHOTO_ADDED,
        payload: { id: photoId }
      });
    }
  };

  const onLoadTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/${topicId}/photos`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_BY_TOPIC,
          payload: { photos: data }
        });
      });
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    onLoadTopic
  };

};

export default useApplicationData;
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

  // Fetch photo data from api endpoint and store it in the state
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
  }, []); // empty array will ensure to only run this effect once the component mounts


  // Fetch  topic data from api and store it in state
  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: ACTIONS.SET_TOPIC_DATA,
          payload: { topics: data }
        }))
      .catch(error => {
        console.error("Error in fetching topic data photos:", error);
      });
  }, []);
  //-----------------------------------------
  // Function to select photo and open modal
  const onPhotoSelect = (photo) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { photo }
    });
  };
  //-----------------------------------------
  // Function to close the modal
  const onClosePhotoDetailsModal = () => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { isOpen: false }
    });
  };
  //-----------------------------------------
  // Function to toggle liked status or un-like it (will add/remove from favourites)
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
  //-----------------------------------------
  // Upon clicking topic, will load all related photos to that topic
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
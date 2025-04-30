import { useReducer, useEffect } from "react";
//-----------------------------------------------------------------------------------------
const initialState = {
  likedPhotos: [],
  selectedPhoto: null,
  isModalOpen: false,
  photoData: [],
  topicData: []
};
//-----------------------------------------------------------------------------------------
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_PHOTO_BY_TOPIC: 'SET_PHOTO_BY_TOPIC',
};
//-----------------------------------------------------------------------------------------
function reducer(state, action) {


  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        likedPhotos: [...state.likedPhotos, action.payload.id]
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        likedPhotos: state.likedPhotos.filter(id => id !== action.payload.id)
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
        isModalOpen: true
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        isModalOpen: action.payload.isOpen,
        selectedPhoto: action.payload.isOpen ? state.selectedPhoto : null
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload.photos
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload.topics
      };

    case ACTIONS.SET_PHOTO_BY_TOPIC:
      return {
        ...state,
        photoData: action.payload.photos
      };

    default:
      throw new Error(`Action type is not supported: ${action.type}`);
  }
}

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
    fetch("http://localhost:8001/api/topics/:topic_id/photos")
      .then((res) => {
        res.json();
      })
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
  };

};

export default useApplicationData;
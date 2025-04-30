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
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
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
        ...state, photoData: action.payload
      }

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
      .then(data => {
        console.log("Photo data fetched successfully");
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: { photos: data }
        });
      });
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

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };

};

export default useApplicationData;
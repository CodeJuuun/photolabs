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
export function reducer(state, action) {


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

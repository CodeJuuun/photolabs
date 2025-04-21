import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      {isFavPhotoExist && <FavIcon displayAlert={true}/>}
    </div>
  ) 
};

export default FavBadge;
